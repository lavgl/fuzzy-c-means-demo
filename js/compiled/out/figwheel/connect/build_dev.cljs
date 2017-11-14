(ns figwheel.connect.build-dev (:require [fuzzy-c-means-demo.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/fuzzy-c-means-demo.core.on-js-reload (apply js/fuzzy-c-means-demo.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'fuzzy-c-means-demo.core/on-js-reload' is missing"))), :open-urls ["http://localhost:3449/index.html"], :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

