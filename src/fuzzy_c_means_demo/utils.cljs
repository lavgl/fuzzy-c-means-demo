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

(defn generate-n-colors [n]
  (let [angle (/ 360 n)
        rotate #(+ % angle)
        angles (iterate rotate 0)
        colors (map #(str "hsl(" % ",100%,50%)") angles)]
    (vec (take n colors))))


(def help-text
  "Доброго дня!
Для того, щоб використати дану програму, потрібно виконати кілька простих дій:

1. Завантажити файл. Він повинен містити дані такого формату:
[[1 2]
 [3 4]
 [4 5]]

тобто, повинен містити масив пар чисел, перше з яких - координата по вісі абсцих,
друге - координата по вісі ординат.

2. Натиснути кнопку CALCULATE.

3. Можна використати нижню панель з бігунком для перегляду історії роботи алгоритму.

Насолоджуйтесь візуалізацією!

Вихідний код програми доступний за посиланням:

https://github.com/lavgl/fuzzy-c-means-demo")
