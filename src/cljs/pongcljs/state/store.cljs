(ns pongcljs.state.store
  (:refer-clojure :exclude [get set empty?])
  (:require [reagent.cookies :as cookies]
            [pongcljs.logging :as log]))

;;; Cookies
;; Googling "clojurescript cookies" brings reagent-utils to the top
;; TODO investigate if plain js interop is a better alternative. (. js/document -cookie)

;; TODO Make Clojure/ClojureScript neutral

;; TODO local storage may be better than cookies: 4096 Bytes size limit for cookies vs 5Mb default for LocalStorage.
;; TODO Look into DataScript (github.com/tonsky/datascript), could be a better tool for storing game state.

(def cookie-name "state")
(def empty? cookies/empty?)

(defn get [] (cookies/get cookie-name))

(defn set [state]
  (log/info "setting cookie")
  (cookies/set! cookie-name state)
  state) ; make sure we return the state.

(defn delete []
  (cookies/remove! cookie-name)
  nil)
