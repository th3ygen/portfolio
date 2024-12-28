import { create } from "zustand";

type GlobalStore = {
	isViewingStack: boolean;
	setIsViewingStack: (value: boolean) => void;
};

export const useGlobalStore = create<GlobalStore>((set) => ({
	isViewingStack: false,
	setIsViewingStack: (value) => set({ isViewingStack: value }),
}));
