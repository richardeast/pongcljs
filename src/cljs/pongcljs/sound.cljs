(ns pongcljs.sound
  (:require [cljs-bach.synthesis :refer [connect-> percussive adsr adshr sine square sawtooth add gain high-pass low-pass white-noise
                                         triangle constant envelope run-with destination current-time
                                         ]]
            [pongcljs.logging :as log]))


(defonce context (cljs-bach.synthesis/audio-context))

(defn note-p1
  ([]
   (log/info "sound")
   (note-p1 440))
  ([freq]
   (connect->
    (sine freq)
    (gain 0.1)
  ;;  (adshr 1 1 1 1 1)
    )))

