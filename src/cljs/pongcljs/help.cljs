(ns pongcljs.help
  "helpful information for the user"
  (:require [quil.core :as q :include-macros true]
            [pongcljs.hex-rgb :as hex]
            [pongcljs.styles :as styles]))

;; TODO Positioning on the message should be relative to the game world.
;; if the shape of q/height and q/width changes, then this should adjust.
(def text {:active-state :welcome
           :lang :eng
           :style :bright-bokeh
           :text-size 20
           :background-transparency 100
           :languages
           [{:lang :eng
             :messages
             {:welcome {:text "click to start"
                        :rect [120 500 150 60]
                        :pos [140 540]}
              :welcome2 {:text "h for help"
                         :rect [120 500 120 60]
                         :pos [140 540]}
              :help {:text (apply str
                                  (interpose "\n"
                                             ["h - toggle help"
                                              "c - random style"
                                              "H - toggle Headsup Display"]))
                     :rect [120 500 300 120]
                     :pos [140 540]}}}]})

(defn toggle-help
  "you must return the updated state"
  [state]
  (let [{h :help} state
        current-message (:active-state h)]
      (cond
        (nil? current-message) (assoc-in state [:help :active-state] :help)
        :else
        (assoc-in state [:help :active-state] nil))))

(defn color
  "Helper function to get a color from the styles table"
  [f h]
  (styles/style->color (:style h) f))

(defn draw-rect
  "Helper function to draw the rectangle around the message"
  [[a b c d]]
  (q/rect a b c d))

(defn draw-help
  "I draw to screen anything that needs showing to aid the player"
  [{h :help}]
  (let [current-message (:active-state h)]
    ;;show message when current message is populated / not nil.
    (when current-message
      (let [text-zize (:text-size h)
            c1 (color first h)
            c2 (color second h)
            c3 (color #(nth % 2) h)
            c4 (color last h)
            back-trans (:background-transparency h)
            msg (get-in h [:languages 0 :messages current-message]) ;; TODO change based on language
            msg-pos (:pos msg) ; position of the text to display
            msg-rect (:rect msg) ; Rectangle co-ordinates to go around the message
            msg-text (:text msg)]
        (q/text-size text-zize)
        (hex/stroke c1)
        (hex/fill c4 back-trans)
        (draw-rect msg-rect)
        (hex/fill c2)
        (q/text msg-text (first msg-pos) (last msg-pos))))))
