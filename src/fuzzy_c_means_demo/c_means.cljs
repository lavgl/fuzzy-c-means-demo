(ns fuzzy-c-means-demo.c-means)

(defn- d [c x]
  (Math/sqrt
   (+
    (Math/pow (- (first x) (first c)) 2)
    (Math/pow (- (second x) (second c)) 2))))


(defn- indexed [coll]
  (map-indexed vector coll))

(defn- mmap [cb matrix]
  (map-indexed (fn [i row]
                 (map-indexed (fn [j elem]
                                (cb elem i j matrix)) row)) matrix))

(defn- mmax [matrix]
  (apply max (flatten matrix)))

(defn- msub [m1 m2]
  (mmap #(- % (get-in m2 [%2 %3])) m1))

(defn- normalize-by-sum [coll]
  (let [sum (apply + coll)]
    (map #(/ % sum) coll)))

(defn- generateU0 [points-number clusters-number]
  (letfn [(make-row []
            (vec
             (normalize-by-sum
              (repeatedly clusters-number #(rand)))))]
    (vec (repeatedly points-number make-row))))

(defn- calculate-center-dimension [m cluster-index matrix-u dimension-values]
  (letfn [(numerator-reducer [sum [index value]]
            (let [u (get-in matrix-u [index cluster-index])]
              (+ sum (* value (Math/pow u m)))))
          (denumerator-reducer [sum [index]]
                               (let [u (get-in matrix-u [index cluster-index])]
                                 (+ sum (Math/pow u m))))]
    (let [indexed-coll (indexed dimension-values)]
      (let [numerator (reduce numerator-reducer 0 indexed-coll)
            denumerator (reduce denumerator-reducer 0 indexed-coll)]
        (/ numerator denumerator)))))

(defn- calculate-centers [m matrix-u points]
  (let [clusters-number (count (first matrix-u))
        dimension-getters [first second]]
    (letfn [(make-inner-map-fn [cluster-index]
              (fn [dimension]
                (calculate-center-dimension m cluster-index matrix-u (map dimension points))))
            (outer-map-fn [i]
              (vec (map (make-inner-map-fn i) dimension-getters)))]
      (vec (map outer-map-fn (range clusters-number))))))

(defn- calculate-u-datum [m centers point center-index]
  (letfn [(denumerator-reducer [sum center]
            (+ sum (Math/pow
                    (/
                     (d (get centers center-index) point)
                     (d center point))
                    (/ 2 (- m 1)))))]
    (/ 1 (reduce denumerator-reducer 0 centers))))

(defn- calculate-u-matrix [m centers points]
  (letfn [(make-centers-mapper [point]
            (fn [center-index]
              (calculate-u-datum m centers point center-index)))
          (point-mapper [point]
            (vec (map-indexed (make-centers-mapper point) centers)))]
    (vec (map point-mapper points))))

(defn- append-history [centers U history]
  (conj history (hash-map
                 :u U
                 :centers centers)))

(defn- continue? [e history]
  (if (< (count history) 2)
    true
    (let [last-U (:u (last history))
          llast-U (:u (last (butlast history)))
          max-diff (Math/abs (mmax (msub last-U llast-U)))]
      (> max-diff e))))

(defn calculate [{:keys [clusters-number e m]} points]
  (loop [centers []
         matrix-u (generateU0 (count points) clusters-number)
         history (append-history centers matrix-u [])]
    (if-not (continue? e history)
      history
      (let [centers (calculate-centers m matrix-u points)
            matrix-u (calculate-u-matrix m centers points)]
        (recur centers
               matrix-u
               (append-history centers matrix-u history))))))
