import { Project } from "@/app/@projects/components/ProjectCard";
import { create } from "zustand";

type ProjectStore = {
	project: Project;
	setProject: (project: Project) => void;
};

export const useProjectStore = create<ProjectStore>((set) => ({
	project: {
		title: "",
		description: "",
		image: "",
		tags: [],
	},
	setProject: (project) => set({ project }),
}));
