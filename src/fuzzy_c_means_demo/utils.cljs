(ns fuzzy-c-means-demo.utils
  (:require [sablono.util]))

(defn adapt-react-class [react-class]
  (fn [& args]
    (let [[opts children] (if (map? (first args))
                           [(first args) (rest args)]
                           [{} args])
          type# (first children)]
      (let [new-children (if (vector? type#)
                           [(sablono.interpreter/interpret children)]
                           children)]
        (apply js/React.createElement react-class
               (clj->js (sablono.util/html-to-dom-attrs opts)) new-children)))))


(defn has-history? [state]
  (seq (:history state)))

(defn iterations-count [state]
  (if (has-history? state)
    (count (:history state))
    1))
