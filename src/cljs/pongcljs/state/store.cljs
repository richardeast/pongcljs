(ns pongcljs.state.store
  (:refer-clojure :exclude [get set empty?])
  (:import goog.net.Cookies)
  (:require [cljs.reader :as reader]))

;;; Cookies
;; TODO investigate if plain js interop is a better alternative. (. js/document -cookie)

;; TODO Make Clojure/ClojureScript neutral
;; See https://github.com/Quantisan/cljs-cookies/blob/master/project.clj for more details

(def cookies (Cookies. js/document))
(def cookie-name "state")

(defn set-cookie [k v & opts]
  "Sets a cookie.
   Options:
   max-age -- The max age in seconds (from now). Use -1 to set a session cookie. If not provided, the default is -1 (i.e. set a session cookie)."
  (when-let [k (and (.isValidName cookies (name k)) (name k))]
    (when (.isValidValue cookies v)
      (let [{:keys [max-age path domain secure?]} (apply hash-map opts)]
        (.set cookies k v max-age path domain secure?)))))

(defn set [state]
  (set-cookie cookie-name state)
  state) ; make sure we return the state.

(defn get-cookie [k]
  "Returns the value for the first cookie with the given key."
  (.get cookies (name k) nil))

(defn get [] (get-cookie cookie-name))

(defn remove-cookie [key]
  "Removes and expires a cookie."
  (.remove cookies (name key)))

(defn delete []
  (remove-cookie cookie-name)
  nil)

(defn empty?
  ([] (empty? cookies))
  ([c] (.isEmpty c)))
