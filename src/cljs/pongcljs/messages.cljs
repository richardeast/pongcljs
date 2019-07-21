(ns pongcljs.messages
  "helpful information for the user"
  (:require [quil.core :as q :include-macros true]
            [pongcljs.hex-rgb :as hex]
            [pongcljs.styles :as styles]))

;; TODO Positioning on the message should be relative to the game world.
;; if the shape of q/height and q/width changes, then this should adjust.
(def text [{:lang :eng
            :messages {:welcome {:text "click to start"
                                 :rect [120 500 150 60]
                                 :pos [140 540]}
                       :welcome2 {:text "h toggle help"
                                  :rect [120 500 170 60]
                                  :pos [140 540]}
                       :help {:text (apply str
                                           (interpose "\n"
                                                     ["h - toggle help"
                                                      "c - random style"
                                                      "H - toggle Headsup Display"
                                                      "click to pause"
                                                      "Up/down key, change angle"]))
                             :rect [30 450 300 150]
                             :pos [50 490]}}}])

(defn toggle-help
  "you must return the updated state"
  [state]
  (let [{m :messages} state
        current-message (:active-state m)]
      (cond
        (nil? current-message) (assoc-in state [:messages :active-state] :help)
        :else
        (assoc-in state [:messages :active-state] nil))))

(defn color
  "Helper function to get a color from the styles table"
  [f h]
  (styles/style->color (:style h) f))

(defn draw-rect
  "Helper function to draw the rectangle around the message"
  [[a b c d]]
  (q/rect a b c d))

(defn draw
  "I draw to screen anything that needs showing to aid the player"
  [{m :messages}]
  (let [current-message (:active-state m)]
    ;;show message when current message is populated / not nil.
    (when current-message
      (let [text-zize (:text-size m)
            c1 (color first m)
            c2 (color second m)
            c3 (color #(nth % 2) m)
            c4 (color #(nth % 3) m)
            back-trans (:background-transparency m)
            msg (get-in m [:languages 0 :messages current-message]) ;; TODO change based on language
            msg-pos (:pos msg) ; position of the text to display
            msg-rect (:rect msg) ; Rectangle co-ordinates to go around the message
            msg-text (:text msg)]
        (q/text-size text-zize)
        (hex/stroke c1)
        (hex/fill c4 back-trans)
        (draw-rect msg-rect)
        (hex/fill c2)
        (q/text msg-text (first msg-pos) (last msg-pos))))))
