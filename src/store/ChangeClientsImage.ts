import { create } from "zustand";

type Store = {
  count: number
  inc: () => void
  dec: () => void
  resetInc: () => void
  resetDec: () => void
}

export const useChangeClientsImage = create<Store>((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
  resetInc: () => set((state) => ({ count: state.count = 1 })),
  resetDec: () => set((state) => ({ count: state.count = 3 })),
}))