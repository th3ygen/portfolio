"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Project, ProjectTag, ProjectTagName } from "project";
import { CiGlobe } from "react-icons/ci";
import {
	FaAward,
	FaBrain,
	FaCog,
	FaCreditCard,
	FaFileCode,
	FaMapMarkedAlt,
	FaSearch,
	FaShieldAlt,
} from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoCloud } from "react-icons/io5";
import {
	MdBuild,
	MdBusiness,
	MdDeleteForever,
	MdOutlineAutorenew,
	MdScience,
	MdTimer,
} from "react-icons/md";
import { RiLock2Line } from "react-icons/ri";
import { Tooltip } from "react-tooltip";

export const tags: Record<string, ProjectTag> = {
	pnc: {
		name: "Classified",
		color: "text-red-500",
		icon: <RiLock2Line size={18} />,
		tooltip: "Private & Confidential",
	},
	pub: {
		name: "Global",
		color: "text-green-500",
		icon: <CiGlobe size={18} />,
		tooltip: "This project is publicly accessible",
	},
	internal: {
		name: "In-House",
		color: "text-yellow-500",
		icon: <MdBusiness size={18} />,
		tooltip: "Used internally within an organization or company",
	},
	research: {
		name: "Research",
		color: "text-blue-500",
		icon: <MdScience size={18} />,
		tooltip: "Projects related to research and academic exploration",
	},
	iot: {
		name: "IoT",
		color: "text-indigo-500",
		icon: <IoCloud size={18} />,
		tooltip: "Projects involving Internet of Things (IoT) technologies",
	},
	ai_ml: {
		name: "AI/ML",
		color: "text-purple-500",
		icon: <FaBrain size={18} />,
		tooltip:
			"Projects utilizing Artificial Intelligence or Machine Learning",
	},
	geospatial: {
		name: "Geo-Enabled",
		color: "text-teal-500",
		icon: <FaMapMarkedAlt size={18} />,
		tooltip: "Projects with geospatial or map-based features",
	},
	real_time: {
		name: "Real-time",
		color: "text-orange-500",
		icon: <MdTimer size={18} />,
		tooltip:
			"Projects featuring real-time data processing and visualization",
	},
	automation: {
		name: "Automation",
		color: "text-pink-500",
		icon: <MdOutlineAutorenew size={18} />,
		tooltip: "Projects with automated workflows or processes",
	},
	compliance: {
		name: "Compliance",
		color: "text-cyan-500",
		icon: <FaShieldAlt size={18} />,
		tooltip: "Focused on regulatory or safety compliance",
	},
	award: {
		name: "Award-Winning",
		color: "text-yellow-600",
		icon: <FaAward size={18} />,
		tooltip: "This project has received awards or recognition",
	},
	collaborative: {
		name: "Collab",
		color: "text-gray-600",
		icon: <HiOutlineUserGroup size={18} />,
		tooltip: "Developed in collaboration with other teams or organizations",
	},
	prototype: {
		name: "Prototype",
		color: "text-violet-400",
		icon: <MdBuild size={18} />,
		tooltip: "A proof-of-concept or experimental project",
	},
	payment_gateway: {
		name: "Payments",
		color: "text-green-600",
		icon: <FaCreditCard size={18} />,
		tooltip:
			"Projects with integrated payment gateways for online transactions",
	},
	seo: {
		name: "SEO",
		color: "text-yellow-500",
		icon: <FaSearch size={18} />,
		tooltip:
			"Projects with built-in SEO optimizations for better search rankings",
	},
	cms: {
		name: "CMS",
		color: "text-teal-500",
		icon: <FaCog size={18} />,
		tooltip:
			"Static site integrated with a Content Management System (CMS)",
	},
	no_backend: {
		name: "No-Backend",
		color: "text-red-700",
		icon: <MdDeleteForever size={18} />,
		tooltip: "Site without any server-side logic, purely static",
	},
	static: {
		name: "Static",
		color: "text-blue-400",
		icon: <FaFileCode size={18} />,
		tooltip: "A static site with pre-rendered content",
	},
};

export const order: ProjectTagName[] = [
	"award",
	"pnc",
	"pub",
	"ai_ml",
	"internal",
	"research",
	"iot",
	"real_time",
	"geospatial",
	"payment_gateway",
	"automation",
	"compliance",
	"collaborative",
	"prototype",
	"seo",
	"cms",
	"no_backend",
	"static",
];

type ProjectTagsProps = {
	project: Project;
};

export default function ProjectTags({ project }: ProjectTagsProps) {
	if (!project.tags || project.tags.length === 0) return null;

	const id = project.title.replaceAll(" ", "-");

	return order.map((tagId) => {
		if (!project.tags!.includes(tagId)) return null;

		const tag = tags[tagId];
		return (
			<div key={id + "-tag-" + tag.name}>
				<Badge
					id={`${id}-tag-${tagId}`}
					className={cn(
						"w-fit p-1 rounded-lg border-accent",
						tag.color
					)}
					variant="outline"
				>
					<span>{tag.icon}</span>
				</Badge>
				<Tooltip
					anchorSelect={`#${id}-tag-${tagId}`}
					className="relative z-[999] text-wrap max-w-40 lg:max-w-full border-2 border-accent/20 bg-background text-accent dark:bg-secondary dark:text-primary !px-2 !py-1 !text-xs"
				>
					{tag.tooltip}
				</Tooltip>
			</div>
		);
	});
}
