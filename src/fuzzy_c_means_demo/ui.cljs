(ns fuzzy-c-means-demo.ui
  (:require [cljs.core.async :as async]
            [rum.core :as rum]))

(rum/defc Button [label on-click]
  [:button
   {:on-click on-click}
   label])

(defn ->click-count [state]
  (:count state))

(rum/defc Counter [click-count]
  [:div {:style {:color "red"
                 :font-size 32}}
   click-count])

(rum/defc App < rum/reactive [state-atom event-bus]
  (println "app rendered" state-atom)
  (let [state (rum/react state-atom)]
    [:div
     (Counter (->click-count state))
     (Button "+" #(async/put! event-bus [:inc]))
     (Button "-" #(async/put! event-bus [:dec]))]))

(defn mount [state event-bus]
  (rum/mount
   (App state event-bus)
   (js/document.getElementById "app")))
