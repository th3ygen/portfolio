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
import { useRef } from "react";
import {
	motion,
	useMotionValue,
	useMotionValueEvent,
	useScroll,
	useTransform,
} from "motion/react";
import { cubicBezier } from "motion";
import { FaMedal } from "react-icons/fa";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";

export type ProjectShowcase = {
	image: string;
	description: string;
};

export type ProjectTag = {
	name: string;
	color: string;
	icon: React.ReactNode;
	tooltip: string;
};

export type Project = {
	title: string;
	longTitle?: string;
	description: string;
	image: string;
	link?: string;
	showcase?: ProjectShowcase[];
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

export default function ProjectCard({
	className = "",
	project,
}: ProjectCardProps) {
	const ref = useRef<HTMLDivElement>(null);

	const { scrollY } = useScroll();
	const proximity = useMotionValue(0);

	useMotionValueEvent(scrollY, "change", () => {
		const y = ref.current?.getBoundingClientRect().top;
		const diff =
			y! - window.innerHeight / 2 + ref.current!.offsetHeight / 2;

		proximity.set(Math.abs(diff));
	});

	const scale = useTransform(proximity, [400, 0, 100], [0.95, 1.05, 0.95], {
		ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
		clamp: true,
	});

	const placeTags = () => {
		return tagsOrder.map((tagId) => {
			if (!project.tags!.includes(tagId)) return null;

			const tag = projectTags[tagId];
			return (
				<Tooltip key={project.title + "-tag-" + tag.name} delayDuration={0}>
					<TooltipTrigger>
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
					<TooltipContent className="bg-accent">{tag.tooltip}</TooltipContent>
				</Tooltip>
			);
		});
	};

	return (
		<motion.div
			ref={ref}
			className={cn(
				"relative rounded-lg hover:shadow-md bg-secondary/10 dark:bg-secondary/20 duration-300 shadow-gray-800 border-secondary/20 dark:border-secondary/40 border-[1px] h-fit overflow-hidden group flex",
				className
			)}
			style={{ scale }}
		>
			<div className="relative w-full h-full grid grid-cols-3">
				{project.tags && project.tags.includes("award") && (
					<div className="absolute top-0 right-0">
						<FaMedal className="text-4xl text-yellow-400" />
					</div>
				)}
				<div className="relative col-span-1">
					<div className="absolute top-0 left-0 flex justify-center items-center w-full h-full z-10 bg-secondary/20 group-hover:bg-secondary/10 duration-300"></div>
					<div className="absolute top-0 left-0 w-full h-full flex flex-col">
						<div className="relative w-full h-full overflow-hidden">
							<Image
								src={project.image}
								alt={project.title}
								className="w-full h-full object-cover rounded-sm scale-125 group-hover:scale-100 duration-1000"
								height={200}
								width={300}
							/>
						</div>
					</div>
				</div>
				<div className="col-span-2 px-6 py-4 flex flex-col justify-between">
					<div>
						<div className="text-2xl font-bold text-white">
							{project.title}
						</div>
						<div className="mb-4 text-md text-primary">
							{project.longTitle}
						</div>
						<div className="text-md text-justify">
							{project.description}
						</div>
					</div>
					<div className="flex gap-2 items-end justify-between pt-6">
						<div className="flex gap-2 flex-wrap">
							{project.tags && placeTags()}
						</div>
						<div>
							<Button>View details</Button>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
