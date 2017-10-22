(ns fuzzy-c-means-demo.ui
  (:require [cljs.core.async :as async]
            [rum.core :as rum]
            [cljs-react-material-ui.rum :as ui]
            [cljs-react-material-ui.core :refer [get-mui-theme]]
            [cljs-react-material-ui.icons :as ic]
            [cljsjs.victory]
            [fuzzy-c-means-demo.utils :as utils]
            [oops.core :refer [oget oset! ocall]]
  ))

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
   ;; :label (label point)
   ))

(defn- mark-point [point]
  (-> point
      (assoc :type :point)
      (assoc :symbol "circle")))

(defn- mark-center [center]
  (-> center
      (assoc :type :center)
      (assoc :symbol "diamond")))

(defn- make-file-upload-handler [handler]
  (fn [e]
    (let [file (oget e "target.files.0")
          reader (js/FileReader.)]
      (oset! reader "onloadend" (fn []
                                   (let [result (aget reader "result")]
                                     (handler result))))
      (if (boolean file)
        (ocall reader "readAsText" file)
        (handler nil)))))

(defn- make-text-change-handler [event-bus kw]
  (fn [e]
    (async/put! event-bus [kw (oget e "target.value")])))

;; selectors

(defn- ->prepared-points [state]
  (->> state
       :points
       (map ->fielded-point)
       (map mark-point)))

(def slider-enabled? utils/has-history?)

(defn max-slider-value [state]
  (dec (utils/iterations-count state)))

(defn- current-centers [state]
  (let [history (:history state)
        current-iteration (:current-iteration state)
        centers (get-in history [current-iteration :centers])]
    (->> centers
         (map ->fielded-point)
         (map mark-center))))

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

(rum/defc InputSection [state event-bus]
  (let [clusters-number (:clusters-number state)
        fuzzyness-param (:fuzzyness-param state)]
    [:.input-section
     [:div
      (ui/text-field {:floating-label-text "Clusters number"
                      :type "number"
                      :default-value clusters-number
                      :on-change (make-text-change-handler
                                  event-bus
                                  :change-clusters-number)})]
     [:div
      (ui/text-field {:floating-label-text "Fuzzyness parameter (m):"
                      :type "number"
                      :step 0.01
                      :default-value fuzzyness-param
                      :on-change (make-text-change-handler
                                  event-bus
                                  :change-fuzzyness-param)})]
     [:.file-input-block
      [:div
       [:label "Points file"]]
      [:.file-input
       [:input {:type "file"
                :on-change (make-file-upload-handler
                            #(async/put! event-bus [:file-uploaded %]))}]]]
     [:.submit-button
      (ui/raised-button {:label "Calculate"
                         :on-click #(async/put! event-bus [:calculate])})]]))

(rum/defc PlayButton [state event-bus]
  (if (slider-enabled? state)
    (let [playing? (:playing? state)]
      (ui/icon-button {:on-click #(async/put! event-bus [:toggle-playing])}
                      (if playing?
                        (ic/av-pause)
                        (ic/av-play-arrow))))
    (ui/icon-button
     {:disabled true}
     (ic/av-play-arrow))))


(rum/defc Slider [state event-bus]
  (if (slider-enabled? state)
    (ui/slider {:value (:current-iteration state)
                :step 1
                :max (max-slider-value state)
                :on-change #(async/put!
                             event-bus
                             [:select-iteration %2])})
    (ui/slider {:disabled true})))

(rum/defc ControlPanel [state event-bus]
  [:.control-panel
   [:.slider
    (Slider state event-bus)]
   [:div
    (PlayButton state event-bus)]])

(rum/defc Layout [state event-bus]
  (let [points (->prepared-points state)
        centers (current-centers state)
        chart-data (concat points centers)]
    (ui/mui-theme-provider
     {:mui-theme (get-mui-theme)}
     [:.layout
      [:.chart-section
       [:.chart
        (Chart chart-data)]
       (ControlPanel state event-bus)]
      (InputSection state event-bus)])))

(rum/defc App < rum/reactive [state-atom event-bus]
  (let [state (rum/react state-atom)]
    (Layout state event-bus)))

(defn mount [state event-bus]
  (rum/mount
   (App state event-bus)
   (js/document.getElementById "app")))
