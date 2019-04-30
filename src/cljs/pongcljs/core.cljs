(ns pongcljs.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [pongcljs.hex-rgb :as hex]
            [pongcljs.styles :as styles]
            [pongcljs.game-world :as game-world]
            [pongcljs.opponents.boss :as boss]
            [pongcljs.puck :as puck]
            [pongcljs.player :as player]))

(defn draw [state]
  ;; threading macro not needed because these functions all draw to the screen. (Therefore not pure.)
  (q/no-cursor)
  (game-world/draw-game-world)
  (boss/draw-boss state)
  (puck/draw-puck state)
  (player/draw-player state))

(defn update-game [state]
  ;; threading macro used so the game state gets passed from function to the next
  (-> state
      boss/update-boss
      puck/update-puck))

(defn setup []
  (q/frame-rate 60)
  (q/smooth)
  ;; The initial state
  {:paddle-width 100
   :paddle-height 30
   :puck (game-world/centre)
   :boss {:x 0
          :y 0
          :angle 0.0}})

(q/sketch
  :host "pongjs"
  :size [850 600]
  :setup setup
  :update update-game
  :draw draw
  :middleware [quil.middleware/fun-mode])
