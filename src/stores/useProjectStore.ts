import type { Project } from "project";
import { create } from "zustand";

type ProjectStatus = "idle" | "loading" | "success" | "error";

type ProjectStore = {
	project: Project;
	selectedProject: number;
	status: ProjectStatus;
	setProject: (project: Project) => void;
	setStatus: (status: ProjectStatus) => void;
	setSelectedProject: (index: number) => void;
};

export const useProjectStore = create<ProjectStore>((set) => ({
	project: {
		title: "",
		description: "",
		image: "",
		tags: [],
	},
	status: "idle",
	selectedProject: -1,
	setProject: (project) => set({ project }),
	setStatus: (status) => set({ status }),
	setSelectedProject: (index) => set({ selectedProject: index }),
}));
