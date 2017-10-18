(ns fuzzy-c-means-demo.ui
  (:require [cljs.core.async :as async]
            [rum.core :as rum]
            [cljsjs.react]
            [cljsjs.victory]
            [fuzzy-c-means-demo.utils :as utils]))

;; Victory bindings

(def VictoryChart (utils/adapt-react-class js/Victory.VictoryChart))
(def VictoryScatter (utils/adapt-react-class js/Victory.VictoryScatter))
(def VictoryLegend (utils/adapt-react-class js/Victory.VictoryLegend))
(def VictoryTooltip (utils/adapt-react-class js/Victory.VictoryTooltip))

(def theme js/Victory.VictoryTheme.material)

;; utils

(defn- abs-max [coll]
  (->> coll
       (map Math/abs)
       (apply max)))

(defn- label [[x y]]
  (str "x: " x "\ny: " y))

(defn- ->fielded-point [point]
  (hash-map
   :x (first point)
   :y (second point)
   :label (label point)))

;; selectors

(defn ->prepared-points [state]
  (->> state
       :points
       (map ->fielded-point)))

;; components

(rum/defc Chart [points]
  (let [xs (map :x points)
        ys (map :y points)
        domain-x (abs-max xs)
        domain-y (abs-max ys)]
    (VictoryChart
     {:theme theme
      :domain {:x [(- domain-x) domain-x]
               :y [(- domain-y) domain-y]}}
     (VictoryScatter {:data points
                      :label-component (VictoryTooltip)}))))

(rum/defc Button [props label]
  [:button
   props
   label])

(rum/defc Input [props]
  [:div {:style {:margin 5}}
   [:label (:label props)]
   [:input props]])

(rum/defc InputSection []
  [:.input-section
   (Input {:label "Load file with points"
           :type "file"})
   (Input {:label "Fuzzyness parameter (m):"
           :type "text"})
   (Input {:label "Clusters number:"
           :type "text"})
   (Button {} "Calculate")])

(rum/defc Layout [state event-bus]
  (let [points (->prepared-points state)]
    [:.layout
     [:.chart-section
      [:.chart
       (Chart points)]
      [:.control-panel
       "Control panel"]]
     (InputSection)]))

(rum/defc App < rum/reactive [state-atom event-bus]
  (let [state (rum/react state-atom)]
    (Layout state event-bus)))

(defn mount [state event-bus]
  (rum/mount
   (App state event-bus)
   (js/document.getElementById "app")))
