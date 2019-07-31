(ns pongcljs.camera
  (:refer-clojure :exclude [update]))

(defn update
  [state f] (update-in state [:camera :angle] f))

(defn change-angle
  "Change the current camera angle. f will be inc or dec"
  [state f]
  (let [current-angle (get-in state [:camera :angle])
        max-angle (get-in state [:camera :max-angle])
        min-angle (get-in state [:camera :min-angle])
        current-horrizon (get-in state [:universe :game-world :horizon])
    ;; TODO This stinks. I can do better
        dec-camera-state (if (and (= f dec)
                                  (> current-angle min-angle))
                           (update state dec)
                           ;else
                           state)
        inc-camera-state (if (and (= f inc)
                                  (< current-angle max-angle))
                           (update dec-camera-state inc)
                           ;else
                           dec-camera-state)]
    (-> inc-camera-state
        ;; TODO constrain the movement of the horizon based on min/max camera angle
        (assoc-in [:universe :game-world :horizon]
                  (f current-horrizon)))))
