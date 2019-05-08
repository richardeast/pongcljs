(ns pongcljs.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [cljs.pprint :as pprint]
            [pongcljs.styles :as styles]
            [pongcljs.score :as score]
            [pongcljs.game-world :as game-world]
            [pongcljs.opponents.boss :as boss]
            [pongcljs.puck :as puck]
            [pongcljs.player :as player]))

;; The global state is supposed to be bad, so this puts it to the test
(def starting-state
  {:paddle {:width 100 :height 30}
   :score [0 0]
   :puck {:pos nil
          :direction nil}
   :player {:pos nil}
   :boss {:pos nil
          :angle 0.0}
   :hud {:show false}})

(defn get-starting-state
  "Get the starting state of the application, but inject in additional environmental data."
  []
  (->
   (assoc starting-state :puck {:pos (game-world/centre)
                                :direction puck/away})
   (assoc-in [:player :pos] {:x (player/mouse-x-pos)
                             :y (player/mouse-y-pos)})))

(defn toggle-hud
  ""
  [state]
   (assoc-in state [:hud :show]
             (not (get-in state [:hud :show]))))

(defn pprint-2dp
  "Print to two decimal places. Used in the HUD"
  [s]
  (pprint/cl-format nil "~6f" s))

(defn pprint-xy
  "print x y coordinates for an object to two decimal places. Used in the HUD"
  [x1 y1 x2 y2]
  (q/text (str " x:" (pprint-2dp x1)
               ",\n"
               " y:" (pprint-2dp y1)) x2 y2))

(defn draw-mouse-pointer-position
  "Used in HUD"
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
      ;; Add the boss angle
      (pprint-xy boss-x boss-y (+ (:width paddle) boss-x) boss-y)
      (draw-mouse-pointer-position))))

(defn update-game [state]
  ;; threading macro used so the game state gets passed from function to the next
  (-> state
       score/update-score
       boss/update-boss
       player/update-player
       puck/update-puck))

(defn key-pressed
  ""
  [state event]
  ;; TODO make it just h
  (-> state
      (assoc :event event)
      toggle-hud))

(defn draw [state]
  ;; threading macro not needed because these functions all draw to the screen. (Therefore not pure.)
       (game-world/draw-game-world)
       (boss/draw-boss state)
       (puck/draw-puck state)
       (player/draw-player state)
       (score/draw-score state)
       (draw-hud state))

(defn setup []
;;  (q/no-cursor)
  (q/frame-rate 60)
  (q/smooth)
  ;; Return the initial state of the game
  (get-starting-state))

(q/sketch
  :host "pongjs"
  :size [850 600]
  :setup setup
  :update update-game
  :key-pressed key-pressed
  :draw draw
  :middleware [quil.middleware/fun-mode])
