(ns pongcljs.state.core
  (:require [pongcljs.logging :as log]
            [pongcljs.state.defaults :as default]
            [pongcljs.state.initiate :as initiate]
            [pongcljs.state.store :as store]))

;; "There's a simple rule that everybody follows - put all your app-state in one place" - David Nolen https://clojurescriptpodcast.com/ S1E1
(def starting-state default/starting-state)

(def save store/set)

(defn reset []
  (log/info "Resetting game")
  (store/delete)
  (->
   (initiate/init starting-state)
   store/set))

(defn get-starting-state
  "Get the starting state of the application, but inject in additional environmental data."
  []
  ;; TODO memorize because q/sketch and core.setup both want data from this. We want to make sure it's the same data and we don't need to repeat this effort.
  (log/info "get starting state")
  (cond
    ;; TODO remove not when state saving has been fixed.
    (store/empty?) (reset)
    (not (store/empty?)) (reset)
    :else
    (let [state (store/get)]
      (log/info "reading state from store")
      state)))
