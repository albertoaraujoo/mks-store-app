"use client";
import create from "zustand";

type OpenStore = {
  open: boolean;
  setOpenTrue: () => void;
  setOpenFalse: () => void;
};

export const useOpenStore = create<OpenStore>((set) => ({
  open: false,
  setOpenTrue: () => set({ open: true }),
  setOpenFalse: () => set({ open: false }),
}));
