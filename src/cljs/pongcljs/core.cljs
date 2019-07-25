(ns pongcljs.core
  "This is the heart of the game. Everything is called from here."
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [pongcljs.hud :as hud]
            [pongcljs.logging :as log]
            [pongcljs.messages :as messages]
            [pongcljs.state.core :as state]
            [pongcljs.score :as score]
            ;;TODO We should only require here universe
            [pongcljs.universe.core :as universe]
            [pongcljs.universe.game-world :as game-world]
            [pongcljs.universe.puck :as puck]))

;;; ToDos
;; TODO - https://js.org/ - host the running project
;; TODO What namespaces can I remove. game-world
;; TODO Save game - and pick up from saved game, because then I can be more like Bret Victor, as I can keep the game running as I make changes.
;; TODO - see  https://photofunia.com/effects/retro-wave for some style ideas

;; TODO - 5.17: Introduction to Matter.js - The Nature of Code https://www.youtube.com/watch?v=urR596FsU68

(defn update-camera
  ""
  [state f]
  (let [current-angle (get-in state [:camera :angle])]
    (assoc-in state [:camera :angle]
              (f current-angle))))

(defn change-camera-angle
  "Change the current camera angle. f will be inc or dec"
  [state f]
  (let [current-angle (get-in state [:camera :angle])
        max-angle (get-in state [:camera :max-angle])
        min-angle (get-in state [:camera :min-angle])
        current-horrizon (get-in state [:universe :game-world :horizon])
        dec-camera-state (if (and (= f dec)
                                  (> current-angle min-angle))
                           (update-camera state dec)
                           ;else
                           state)
        inc-camera-state (if (and (= f inc)
                                  (< current-angle max-angle))
                           (update-camera dec-camera-state inc)
                           ;else
                           dec-camera-state)]
    (-> inc-camera-state
        ;; TODO constrain the movement of the horizon based on min/max camera angle
        (assoc-in [:universe :game-world :horizon]
                  (f current-horrizon))
        (puck/change-camera-angle f))))

(defn update-game [state]
  ;; this maybe better expressed with (When (not (:paused)))
  (cond
    (:paused state) state
    :else (universe/update state)))

(defn key-pressed?
  "has a key been pressed?"
  [k event] (= k (:key event)))

(defn key-pressed
  "This function needs to return the state"
  [state event]
  ;; TODO Bug - key-pressed works in Firefox, but not in Chrome
  (let [updated-state (assoc state :event event)]
    (condp key-pressed? event
      :c (universe/change-colors updated-state)
      :H (hud/toggle-hud updated-state) ; toggle hud if H key pressed
      :h (messages/toggle-help updated-state) ; toggle help if h key pressed
      :down (change-camera-angle updated-state inc)
      :up (change-camera-angle updated-state dec)
      ;; TODO add more keys. Such as:
      ;; cheat/god mode
      ;; save game
      ;; quit/new game/menu
      ;; high-scores
      ;; actions to spice up the game.
      updated-state)))

(defn mouse-wheel-rotate
  [state m]
  (assoc state :mouse-wheel m)
  (cond (= 1 m) (change-camera-angle state inc)
        :else (change-camera-angle state dec)))

(defn mouse-clicked
  "-> new-state"
  [state event]
  (let [paused? (:paused state)
        active-state (get-in state [:messages :active-state])]
    (cond
      (and paused?
           (= :left (:button event))
           (= :welcome active-state)) (-> state
                                       (assoc-in [:paused] false)
                                       (assoc-in [:messages :active-state] :welcome2))
      (and paused?
           (= :left (:button event))) (assoc-in state [:paused] false)
      (and (not paused?)
           (= :left (:button event))) (assoc-in state [:paused] true)
      :else
      state)))

(defn draw-functions
  "Returns of vector of the functions to draw everything, in the right order to draw them."
  [state]
  (flatten [(universe/order-of-draw-functions state)
            score/draw
            messages/draw
            hud/draw]))

(defn draw [state]
  ;; Show cursor when game paused.
  (if (:paused state)
    (q/cursor)
    (q/no-cursor))
  ;; threading macro not needed because these functions all draw to the screen. (Therefore not pure.)
  (doseq [f (draw-functions state)]
    (f state)))

(defn setup []
  (let [state (state/get-starting-state)]
    (q/smooth)
    (q/frame-rate (:frame-rate state))
    ;; Return the initial state of the game
    state))

(def size
  ;; "Returns vector
  ;;  :size - A vector of width and height for the sketch or :fullscreen. Defaults to [500 300].
  ;;  If you're using :fullscreen you may want to enable present mode using :features [:present].
  ;;  :fullscreen size works only in Clojure.
  ;;  In ClojureScript all sketches support fullscreen when you press F11."
  (get-in state/starting-state [:screen :size]) )

(q/sketch
  :host "pongjs"
  :size  size
  :setup setup
  :update update-game
  :key-pressed key-pressed
  :mouse-clicked mouse-clicked
  :mouse-wheel mouse-wheel-rotate ; Called every time mouse wheel is rotated.
  :draw draw
  :middleware [quil.middleware/fun-mode])
