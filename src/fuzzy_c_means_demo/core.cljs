(ns fuzzy-c-means-demo.core
  (:require [cljs.core.async :as async]
            [fuzzy-c-means-demo.ui :as ui])
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
                      :count 1}))

(def event-bus (async/chan))
(def event-bus-pub (async/pub event-bus first))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

(go-loop-sub event-bus-pub :inc []
             (swap! state update-in [:count] inc))

(go-loop-sub event-bus-pub :dec []
             (swap! state update-in [:count] dec))

(ui/mount state event-bus)
