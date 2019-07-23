(ns pongcljs.state.core
  (:require [pongcljs.state.defaults :as default]
            [pongcljs.state.initiate :as initiate]
            [pongcljs.state.store :as store]))

;; "There's a simple rule that everybody follows - put all your app-state in one place" - David Nolen https://clojurescriptpodcast.com/ S1E1
(def starting-state default/starting-state)

;;; Cookies

(defn get-cookie [] (store/get))

(defn save [state]
  (store/set state))

(defn reset []
  (store/reset)
  (initiate/init starting-state))

(defn get-starting-state
  "Get the starting state of the application, but inject in additional environmental data."
  []
  ;; TODO memorize because q/sketch and core.setup both want data from this. We want ot make sure it's the same data and we don't need to repeat this effort.
  ;; (cond
  ;;   (cookies/empty?) (populate-starting-state-with-defaults)
  ;;   :else (get-cookie))
  ;; TODO Can this function be merged with reset
  (initiate/init starting-state))
