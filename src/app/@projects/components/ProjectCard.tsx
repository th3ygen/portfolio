"use client";

import { cn } from "@/lib/utils";
import { RiLock2Line } from "react-icons/ri";
import { CiGlobe } from "react-icons/ci";
import {
	MdBusiness,
	MdScience,
	MdTimer,
	MdOutlineAutorenew,
	MdBuild,
} from "react-icons/md";
import { FaBrain, FaMapMarkedAlt, FaAward, FaShieldAlt } from "react-icons/fa";
import { IoCloud } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FaCreditCard } from "react-icons/fa";
import { FaSearch, FaCog, FaFileCode } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FaMedal } from "react-icons/fa";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { useGlobalStore } from "@/stores/useGlobalStore";
import { useProjectStore } from "@/stores/useProjectStore";
import { useInView } from "motion/react";
import { useRef } from "react";

export type Photo = {
	path: string;
	caption: string;
	category: "ui" | "camera";
};

export type ProjectTag = {
	name: string;
	color: string;
	icon: React.ReactNode;
	tooltip: string;
};

export type Client = {
	name: string;
	shortName: string;
	logo: {
		src: string;
		width: number;
		height: number;
	};
	link: string;
};

export type ProjectAward = {
	title: string;
	medal?: "gold" | "silver" | "bronze";
};

export type Project = {
	title: string;
	longTitle?: string;
	description: string;
	longDescription?: string[];
	clients?: Client[];
	role?: string;
	highlights?: string;
	technologies?: string;
	awards?: ProjectAward[];
	image: string;
	link?: string;
	gallery?: Photo[];
	tags?: Array<ProjectTagName>;
};

type ProjectCardProps = {
	className?: string;
	project: Project;
};

type ProjectTagName =
	| "pnc"
	| "pub"
	| "internal"
	| "research"
	| "iot"
	| "ai_ml"
	| "payment_gateway"
	| "geospatial"
	| "real_time"
	| "automation"
	| "compliance"
	| "award"
	| "collaborative"
	| "prototype"
	| "seo"
	| "cms"
	| "no_backend"
	| "static";

export const tagsOrder: ProjectTagName[] = [
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

export const projectTags: Record<string, ProjectTag> = {
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

export const placeTags = (p: Project) => {
	return tagsOrder.map((tagId) => {
		if (!p.tags!.includes(tagId)) return null;

		const tag = projectTags[tagId];
		return (
			<Tooltip key={p.title + "-tag-" + tag.name} delayDuration={0}>
				<TooltipTrigger className="cursor-auto">
					<Badge
						className={cn(
							"bg-transparent border-accent p-[6px]",
							tag.color
						)}
						variant="outline"
					>
						{tag.icon}
					</Badge>
				</TooltipTrigger>
				<TooltipContent className="relative z-[999] border-2 border-accent/20 bg-background text-secondary dark:bg-secondary dark:text-primary">
					{tag.tooltip}
				</TooltipContent>
			</Tooltip>
		);
	});
};

export function Awards({
	title: projectTitle,
	awards,
	isInView,
}: Project & { isInView: boolean }) {
	if (!awards || awards.length === 0) return null;

	const awardIcons = {
		gold: <FaMedal className="text-2xl text-yellow-300" size={40} />,
		silver: <FaMedal className="text-2xl text-gray-300" size={40} />,
		bronze: <FaMedal className="text-2xl text-yellow-600" size={40} />,
	};

	const medals = awards.map((award, index) => {
		const { title, medal } = award;
		return (
			<div
				key={projectTitle + "-award-" + title + index}
				className={cn(
					"opacity-0 -translate-y-5 duration-500 delay-300",
					isInView && "opacity-100 translate-y-0"
				)}
			>
				<Tooltip delayDuration={0}>
					<TooltipTrigger className="cursor-auto">
						{awardIcons[medal!]}
					</TooltipTrigger>
					<TooltipContent className="relative z-[999] dark:bg-secondary text-primary capitalize">
						<span>{`${medal} @${title}`}</span>
					</TooltipContent>
				</Tooltip>
			</div>
		);
	});

	return <div className="absolute top-0 right-0 flex gap-2">{medals}</div>;
}

export default function ProjectCard({
	className = "",
	project,
}: ProjectCardProps) {
	const ref = useRef<HTMLDivElement>(null);
	const { setIsViewingProject } = useGlobalStore();
	const { setProject } = useProjectStore();
	const isInView = useInView(ref, {
		once: true,
		amount: "all"
	});

	const handleViewDetails = () => {
		setIsViewingProject(true);
		setProject(project);
	};

	return (
		<div
			ref={ref}
			className={cn(
				"relative rounded-lg hover:shadow-md bg-secondary/10 dark:bg-secondary/10 duration-300 shadow-gray-800 border-secondary/20 dark:border-secondary/40 border-[1px] h-fit overflow-hidden flex",
				className
			)}
		>
			<div className="relative w-full h-full grid grid-cols-3">
				<Awards {...project} isInView={isInView} />
				<div className="relative col-span-1 group">
					<div className="absolute top-0 left-0 flex justify-center items-center w-full h-full z-10 bg-black/10 dark:bg-black/40 group-hover:bg-black/20 duration-300"></div>
					<div className="absolute top-0 left-0 w-full h-full flex flex-col">
						<div className="relative w-full h-full overflow-hidden">
							<Image
								src={project.image}
								alt={project.title}
								className="w-full h-full object-cover rounded-sm scale-110 group-hover:scale-100 duration-1000"
								height={200}
								width={300}
							/>
						</div>
					</div>
				</div>
				<div className="min-h-[250px] col-span-2 px-6 py-4 flex flex-col justify-between">
					<div>
						<div className="text-2xl font-bold dark:text-white">
							{project.title}
						</div>
						<div className="mb-4 text-md text-secondary dark:text-primary">
							{project.longTitle}
						</div>
						<div className="text-md text-justify">
							{project.description}
						</div>
					</div>
					<div className="flex gap-2 items-end justify-between pt-6">
						<div className="flex gap-2 flex-wrap">
							{project.tags && placeTags(project)}
						</div>
						<div className="w-fit">
							<Button onClick={handleViewDetails}>
								View details
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
