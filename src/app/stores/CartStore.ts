import { create } from "zustand";

type Product = {
  id: number;
  name: string;
  photo: string;
  price: number;
  description?: string | any;
  onBuyClick?: () => void;
};

type CartStore = {
  cart: Product[];
  addToCart: (item: Product) => void;
  removeFromCart: (id: number) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
  removeFromCart: (index) =>
    set((state) => ({ cart: state.cart.filter((_, i) => i !== index) })),
}));
