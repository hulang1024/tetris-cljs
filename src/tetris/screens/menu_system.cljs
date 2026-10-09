(ns tetris.screens.menu-system)

(defn item [id parent order & data]
  {:id id
   :parent parent
   :data (first data)
   :visible? true
   :order order})

(defn make-menu-system [items hover]
  {:active nil
   :hover hover
   :items items})

(defn find-item [state item-id]
  (first (filter #(= item-id (:id %)) (:items state))))

(defn children [state item-id]
  (->> (:items state)
       (filter #(= (:parent %) item-id))
       (sort #(- (:order %1) (:order %2)))
       (vec)))

(defn menu? [state item]
  (let [item-id (or (:id item) item)]
    (boolean (seq (children state item-id)))))

(defn show-active-menu-items [state]
  (let [items (filterv :visible? (children state (:active state)))]
    (if (:active state)
      (conj items (item :back nil (inc (:order (last items)))))
      items)))

(defn change-hover [state dir]
  (let [items (show-active-menu-items state)
        prev-index (first
                     (keep-indexed
                       (fn [i item]
                         (when (= (:id item) (:hover state)) i))
                       items))
        curr-index (mod (+ prev-index dir) (count items))]
    (assoc state :hover (:id (nth items curr-index)))))

(defn hover-first [state]
  (if-let [items (seq (children state (:active state)))]
    (assoc state :hover (:id (first items)))
    state))

(defn enter-hover-menu [state]
  (-> (assoc state :active (:hover state))
      (hover-first)))

(defn back-to-parent [state]
  (if (:active state)
    (-> (assoc state
               :active (:parent (find-item state (:active state))))
        (hover-first))
    state))
