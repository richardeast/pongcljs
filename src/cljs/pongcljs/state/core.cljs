(ns pongcljs.state.core
  (:require [reagent.cookies :as cookies]
            [pongcljs.state.defaults :as default]
            [pongcljs.state.initiate :as initiate]))

;; "There's a simple rule that everybody follows - put all your app-state in one place" - David Nolen https://clojurescriptpodcast.com/ S1E1
(def starting-state default/starting-state)

;;; Cookies
;; Googling "clojurescript cookies" brings reagent-utils to the top
;; TODO investigate if plain js interop is a better alternative. (. js/document -cookie)

(defn get-cookie [] (cookies/get "state"))

(defn save [state]
  (cookies/set! "state" state)
  state) ; make sure we return the state.

(defn reset []
  (cookies/remove! "state")
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
