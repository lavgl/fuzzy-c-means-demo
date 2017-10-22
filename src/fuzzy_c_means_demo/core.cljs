(ns fuzzy-c-means-demo.core
  (:require [cljsjs.material-ui]
            [cljs.core.async :as async]
            [fuzzy-c-means-demo.ui :as ui]
            [fuzzy-c-means-demo.c-means :as c-means]
            [fuzzy-c-means-demo.utils :as utils]
            [goog.Timer]
            [goog.events])
  (:require-macros [fuzzy-c-means-demo.core :refer [go-loop-sub]]))

(enable-console-print!)

(def points [[1 1]
             [2 2]
             [1 3]
             [1 -2]
             [1 -3]
             [2 -3]
             [-3 -2]
             [-3 -3]
             [-4 -3]
             [-4 -2]
             [-4 -3]
             [-2 -3]])

(defonce state (atom {:points points
                      :clusters-number 3
                      :fuzzyness-param 2
                      :history nil
                      :current-iteration 0
                      :playing? false}))

(def event-bus (async/chan))
(def event-bus-pub (async/pub event-bus first))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

(go-loop-sub event-bus-pub :change-clusters-number [_ value]
             (swap! state assoc :clusters-number value))

(go-loop-sub event-bus-pub :change-fuzzyness-param [_ value]
             (swap! state assoc :fuzzyness-param value))

; maybe try spec for file validation
(go-loop-sub event-bus-pub :file-uploaded [_ content]
             (let [points (cljs.reader/read-string content)]
               (if (vector? points)
                 (swap! state assoc :points points)
                 (js/alert "Please, load file with correct points!"))))

(go-loop-sub event-bus-pub :calculate []
             (let [clusters-number (-> @state :clusters-number js/parseInt)
                   fuzzyness-param (-> @state :fuzzyness-param js/parseFloat)
                   points (:points @state)
                   history (c-means/calculate
                            {:clusters-number clusters-number
                             :e 0.01
                             :m fuzzyness-param}
                           points)]
               (swap! state assoc :history history)
               (swap! state assoc :current-iteration 0)))

(go-loop-sub event-bus-pub :select-iteration [_ value]
             (swap! state assoc :current-iteration value))

(go-loop-sub event-bus-pub :next-iteration []
             (let [max-iter (dec (utils/iterations-count @state))
                   current-iter (:current-iteration @state)]
               (if (= current-iter max-iter)
                 (swap! state assoc :current-iteration 0)
                 (swap! state update :current-iteration inc))))

(def timer (goog.Timer. 100))
(goog.events.listen timer goog.Timer.TICK #(async/put! event-bus [:next-iteration]))

(go-loop-sub event-bus-pub :toggle-playing []
             (swap! state update :playing? not)
             (if (:playing? @state)
               (.start timer)
               (.stop timer)))


(ui/mount state event-bus)
