// useModelAdmin.js
import { create } from 'zustand'

const useModelAdmin = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useModelAdmin;