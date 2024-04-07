// useModelCalender.js
import { create } from 'zustand'

const useModelCalender = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useModelCalender;