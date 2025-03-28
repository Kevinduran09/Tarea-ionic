import { create } from 'zustand'

type CartStore = {
    addCart: (product: ProductInterface) => void;
    removeCart: (position: number) => void,
    quantity: () => number,
    clear: () => void
    showToast: boolean,
    hideToast: () => void,
    cart: ProductInterface[]
}
interface ProductInterface {
    id: number,
    title: string,
    description: string,
    price: GLfloat,
    category: string,
    image: string
}
export const useCartStore = create<CartStore>((set, get) => ({
    cart: [],
    quantity: () => get().cart.length,
    showToast: false,
    hideToast: () => set({ showToast: false }),
    addCart: (product: ProductInterface) => set((state) => ({ cart: [...state.cart, product], showToast: true })),
    removeCart: (position: number) => set((state) => ({ cart: state.cart.filter((_, i) => i !== position) })),
    clear: () => set({ cart: [] })

}));