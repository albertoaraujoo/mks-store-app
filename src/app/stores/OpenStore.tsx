"use client";
import { create } from "zustand";

export const useOpenStore = create((set) => ({
  open: false,
  setOpenTrue: () => set({ open: true }),
  setOpenFalse: () => set({ open: false }),
}));
