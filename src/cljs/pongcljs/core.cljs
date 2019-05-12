(ns pongcljs.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [pongcljs.game-world :as game-world]
            [pongcljs.hud :as hud]
            [pongcljs.opponents.boss :as boss]
            [pongcljs.player :as player]
            [pongcljs.puck :as puck]
            [pongcljs.styles :as styles]
            [pongcljs.score :as score]))

;; "There's a simple rule that everybody follows - put all your app-state in one place" - David Nolen https://clojurescriptpodcast.com/ S1E1
;; TODO This is going to get bigger. Bigger than a screen and it needs to be pulled out of this namespace
(def starting-state
  {:boss {:pos nil
          :angle 0.0}
   :hud {:show true}
   :paddle {:width 100 :height 30}
   :player {:pos nil}
   :puck {:pos nil
          :direction nil
          :height 25
          :width 50
          :depth 5}
   :score [0 0]
   :style :algave-glitch})

(defn get-starting-state
  "Get the starting state of the application, but inject in additional environmental data."
  []
  (->
   (assoc-in starting-state [:puck :pos] (game-world/centre))
   (assoc-in [:puck :direction] puck/away)
   (assoc-in [:player :pos] {:x (player/mouse-x-pos)  ;; TODO think about this. Should this be q/mouse-x
                             :y (q/mouse-y) })))

(defn update-game [state]
  ;; threading macro used so the game state gets passed from function to the next
  (-> state
       score/update-score
       boss/update-boss
       player/update-player
       puck/update-puck))

(defn key-pressed?
  "has a key been pressed?"
  [k event] (= k (:key event)))

(defn key-pressed
  "This function needs to return the state"
  [state event]
  (let [updated-state (assoc state :event event)]
    (cond
      (key-pressed? :h event) (hud/toggle-hud updated-state) ;; toggle hud if h key pressed
      (key-pressed? :c event) (assoc-in updated-state [:style]
                                        (styles/random-style)) ;; pick new colour
      ;; TODO add more keys. Such as:
      ;; cheat/god mode
      ;; play/pause (this could be space which maybe is (keyword " "))
      ;; quit/new game/menu
      ;; help
      ;; actions to spice up the game.
      :else updated-state)))

(defn draw [state]
  ;; threading macro not needed because these functions all draw to the screen. (Therefore not pure.)
  (game-world/draw-game-world state)
  (boss/draw-boss state)
  (puck/draw-puck state)
  (player/draw-player state)
  (score/draw-score state)
  (hud/draw-hud state))

(defn setup []
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
