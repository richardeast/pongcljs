(ns pongcljs.logging
  "namespace for logging function calls and errors")

;; TODO make Clojure and ClojureScript neutral
;; TODO investigate both shodan - A ClojureScript library providing wrappers for the JavaScript logging API.  https://github.com/noprompt/shodan
;; TODO and clairvoyant Flexible tracing for ClojureScript https://github.com/spellhouse/clairvoyant
;; TODO make it flexible enough to log to different locations such a file/hud/console. Initially it will be assumed console
;; TODO I want to add how useful logging to hud will be.
;; TODO will want to log first time a function is called, but not later calls

;; Shodan example functions
;; (logging/log "You move like an insect."
;;              "You think like an insect."
;;              "You are an insect.")

;; (logging/debug "I have no choice but to destroy this starship.")
;; (logging/info "Matters on Deck 5 also require your attention.")
;; (logging/warn "I will not abide disobedience.")
;; (logging/error "It is hopeless.")

(defn info
  "Print simple message to..."
  [text]
  (enable-console-print!) ;; Doing this every time function is called is a smell
  (prn text))
