(ns pongcljs.state.populate
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [pongcljs.game-world :as game-world]
            [pongcljs.messages :as messages]
            [pongcljs.puck :as puck]
;;   [pongcljs.universe :as universe]
   ))

(defn populate-starting-state-with-defaults
  ""
  [state]
  ;; TODO Give some meaning to these numbers
  ;; TODO remove the need for the q namespace. Base it on the :screen :size instead
  ;;      the advantage of this is that this state is independent of quil, so is one less barrier to moving it to another framework.
  (->
   state
   (assoc-in [:boss :pos] (let [h (/ (q/height) 5.5)
                                w (- (/ (q/width) 2)
                                     (/ (get-in state [:paddle :width]) 2))]
                            {:x w
                             :y h}))
   (assoc-in [:game-world :horizon] (/ (q/height) 6))
   (assoc-in [:messages :languages] messages/text)
   (assoc-in [:player :pos] (let [h (- (q/height) 100)
                                  w (/ (q/width) 2)]
                              {:x w
                               :y h}))
   (assoc-in [:puck :direction] puck/away)
   (assoc-in [:puck :pos] (game-world/centre))
   ;; (save)
   ))
