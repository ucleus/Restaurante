import { create } from 'zustand';

interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
}

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  updateQty: (id: number, qty: number) => void;
  clear: () => void;
  getTotal: () => number;
  getTax: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (id) => set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
  updateQty: (id, qty) =>
    set((state) => ({ items: state.items.map((i) => (i.id === id ? { ...i, qty } : i)) })),
  clear: () => set({ items: [] }),
  getTotal: () => get().items.reduce((sum, i) => sum + i.price * i.qty, 0),
  getTax: () => get().getTotal() * 0.05
}));
