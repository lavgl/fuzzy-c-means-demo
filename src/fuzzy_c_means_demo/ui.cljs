(ns fuzzy-c-means-demo.ui
  (:require [cljs.core.async :as async]
            [rum.core :as rum]
            [cljsjs.react]
            [cljsjs.victory]
            [fuzzy-c-means-demo.utils :as utils]))

(def VictoryChart (utils/adapt-class js/Victory.VictoryChart))
(def VictoryScatter (utils/adapt-class js/Victory.VictoryScatter))
(def VictoryLegend (utils/adapt-class js/Victory.VictoryLegend))

(def theme js/Victory.VictoryTheme.material)

(defn abs-max [coll]
  (->> coll
       (map Math/abs)
       (apply max)))

(rum/defc Chart [data]
  (let [xs (map :x data)
        ys (map :y data)
        domain-x (abs-max xs)
        domain-y (abs-max ys)]
    (VictoryChart
     {:theme theme
      :domain {:x [(- domain-x) domain-x]
               :y [(- domain-y) domain-y]}}
     (VictoryScatter {:data data})
     (VictoryLegend {:x 0
                     :y 0
                     :data [{:name "One" :symbol {:fill "red"}}
                            ]}))))

(rum/defc Button [label on-click]
  [:button
   {:on-click on-click}
   label])

(defn ->click-count [state]
  (:count state))

(defn ->points-with-fields [data]
  (map #(hash-map :x (first %) :y (second %)) data))

(rum/defc App < rum/reactive [state-atom event-bus]
  (let [state (rum/react state-atom)
        points (:points state)]
    (Chart (->points-with-fields points))))

(defn mount [state event-bus]
  (rum/mount
   (App state event-bus)
   (js/document.getElementById "app")))
