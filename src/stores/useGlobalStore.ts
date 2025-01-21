import { create } from "zustand";

type GlobalStore = {
	isHeroMounted: boolean;
	setIsHeroMounted: (value: boolean) => void;
	isViewingStack: boolean;
	setIsViewingStack: (value: boolean) => void;
	isViewingProject: boolean;
	setIsViewingProject: (value: boolean) => void;
};

export const useGlobalStore = create<GlobalStore>((set) => ({
	isHeroMounted: false,
	setIsHeroMounted: (value) => set({ isHeroMounted: value }),
	isViewingStack: false,
	setIsViewingStack: (value) => set({ isViewingStack: value }),
	isViewingProject: false,
	setIsViewingProject: (value) => set({ isViewingProject: value }),
}));
