(ns pongcljs.state.store
  (:refer-clojure :exclude [get set])
  (:require [reagent.cookies :as cookies]))

;;; Cookies
;; Googling "clojurescript cookies" brings reagent-utils to the top
;; TODO investigate if plain js interop is a better alternative. (. js/document -cookie)

;; TODO Make Clojure/ClojureScript neutral

(def cookie-name "state")
(defn echo [x] x)

(defn get [] (cookies/get cookie-name))

(defn set [state]
  (cookies/set! cookie-name state)
  state) ; make sure we return the state.

(defn reset [] (cookies/remove! cookie-name))


