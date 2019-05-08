(ns pongcljs.hud
  "HUD - Head Up Display.
  Used for showing details about the game and state to help coding/debugging."
  (:require [quil.core :as q :include-macros true]
            [cljs.pprint :as pprint]))

(defn toggle-hud
  [state]
   (assoc-in state [:hud :show]
             (not (get-in state [:hud :show]))))

(defn pprint-2dp
  "Print to two decimal places."
  [s]
  (pprint/cl-format nil "~6f" s))

(defn pprint-xy
  "print x y coordinates for an object to two decimal places."
  [x1 y1 x2 y2]
  (q/text (str " x:" (pprint-2dp x1)
               ",\n"
               " y:" (pprint-2dp y1)) x2 y2))

(defn draw-mouse-pointer-position
  []
  (q/text-size 15)
  (pprint-xy (q/mouse-x) (q/mouse-y) (+ 5 (q/mouse-x)) (+ 15 (q/mouse-y)))
  (q/stroke 235 135 0)
  (q/line 0 (q/mouse-y) (q/width) (q/mouse-y))
  (q/stroke 0 235 135)
  (q/line (q/mouse-x) 0 (q/mouse-x) (q/height)))

(defn draw-hud
  "Head-up Display"
  [state]
  ;; TODO put the details of the hud values, next to their objects
  (when (true? (get-in state [:hud :show]))
    (let [{paddle :paddle
           puck :puck
           score :score
           player :player
           boss :boss
           event :event} state
          {puck-x :x puck-y :y} (:pos puck)
          {player-x :x player-y :y} (:pos player)
          {boss-x :x boss-y :y} (:pos boss)]
      ;; TODO comp pprint with-out-str q/text and make cljs.pprint work with java
      (q/text-size 20)
      ;; (q/text (with-out-str (pprint/pprint state)) 30 30)
      (q/text (str ":paddle " paddle ",\n"
                   ;; ":puck " puck ",\n"
                   ;; ":player " player ",\n"
                   ;; ":boss " boss ",\n"
                   ":event " event)
              30 30)
      (q/text-size 15)
      (pprint-xy puck-x puck-y (+ 25 puck-x) puck-y)
      (pprint-xy player-x player-y (+ (:width paddle) player-x) player-y)
      ;; TODO Add the boss angle
      (pprint-xy boss-x boss-y (+ (:width paddle) boss-x) boss-y)
      (draw-mouse-pointer-position))))
