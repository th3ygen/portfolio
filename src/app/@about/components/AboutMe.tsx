"use client";

import { cn } from "@/lib/utils";
import { Black_Ops_One } from "next/font/google";
import {
	RiNextjsLine,
	RiReactjsLine,
	RiJavascriptLine,
	RiNodejsLine,
	RiExternalLinkLine,
} from "react-icons/ri";
import {
	TbBrandTypescript,
	TbBrandPrisma,
	TbBrandMongodb,
} from "react-icons/tb";
import { DiPostgresql } from "react-icons/di";
import Link from "next/link";
import EnterTransition from "@/components/motion/EnterTransition";
import { useGlobalStore } from "@/stores/useGlobalStore";

const blackOps = Black_Ops_One({ weight: "400" });

type AboutMeProps = {
	className?: string;
};

// frontend tools are Next.js, React, React Native, Javascript (ES6+), TypeScript
// backend tools are Node.js, Express, Prisma, PostgreSQL, MongoDB
type Tool = {
	name: string;
	icon: React.ReactNode;
	link: string;
};

const tools: Record<"frontend" | "backend", Tool[]> = {
	frontend: [
		{
			name: "Next.js",
			icon: <RiNextjsLine size="24" />,
			link: "https://nextjs.org/",
		},
		{
			name: "React",
			icon: <RiReactjsLine size="24" />,
			link: "https://reactjs.org/",
		},
		{
			name: "JavaScript (ES6+)",
			icon: <RiJavascriptLine size="24" />,
			link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
		},
		{
			name: "TypeScript",
			icon: <TbBrandTypescript size="24" />,
			link: "https://www.typescriptlang.org/",
		},
	],
	backend: [
		{
			name: "Node.js",
			icon: <RiNodejsLine size="24" />,
			link: "https://nodejs.org/",
		},
		{
			name: "Prisma",
			icon: <TbBrandPrisma size="24" />,
			link: "https://www.prisma.io/",
		},
		{
			name: "PostgreSQL",
			icon: <DiPostgresql size="24" />,
			link: "https://www.postgresql.org/",
		},
		{
			name: "MongoDB",
			icon: <TbBrandMongodb size="24" />,
			link: "https://www.mongodb.com/",
		},
	],
};

export default function AboutMe({ className = "" }: AboutMeProps) {
	const { setIsViewingStack } = useGlobalStore();

	return (
		<div className={className}>
			<div className="pb-10">
				<EnterTransition once>
					<h1 className="text-5xl font-extrabold mb-6 uppercase dark:text-white">
						Meet the{" "}
						<span
							className={cn(
								"text-accent dark:text-primary pl-4 text-6xl",
								blackOps.className
							)}
						>
							DEV
						</span>
					</h1>
				</EnterTransition>
				<EnterTransition className="delay-100" once>
					<p className="text-justify leading-7">
						Hi, I’m a <b>Full-Stack Developer</b> with over 5 years
						of experience turning ideas into powerful web
						applications. I specialize in building fast,
						user-focused solutions using Next.js, React, TypeScript,
						and Node.js. Whether it’s{" "}
						<span className="font-bold text-secondary">
							integrating AI, real-time features, or IoT, I’m
							passionate about blending technology and creativity
							to deliver impactful results.
						</span>
					</p>
				</EnterTransition>
			</div>
			<div className="flex flex-col gap-10 w-fit">
				<EnterTransition className="delay-200" once>
					Fueled by <span>coffee ☕</span> and powered by a strong
					CPU, here’s my toolkit:
				</EnterTransition>

				<EnterTransition
					className="grid grid-cols-2 gap-4 delay-300"
					once
				>
					<div className="flex flex-col gap-4">
						{tools.frontend.map((tool, index) => (
							<div key={"frontend-tool-" + index}>
								<Link
									href={tool.link}
									className="flex gap-2 text-sm"
									target="_blank"
								>
									{tool.icon}
									{tool.name}
								</Link>
							</div>
						))}
					</div>

					<div className="flex flex-col gap-4">
						{tools.backend.map((tool, index) => (
							<div key={"backend-tool-" + index}>
								<Link
									href={tool.link}
									className="flex gap-2 text-sm"
									target="_blank"
								>
									{tool.icon}
									{tool.name}
								</Link>
							</div>
						))}
					</div>

					<div className="col-span-2">
						<div
							className="arsenal-toggle underline text-accent flex items-center gap-2 cursor-pointer"
							onClick={() => {
								setIsViewingStack(true);
							}}
						>
							<div>Unveil my full arsenal</div>
							<RiExternalLinkLine />
						</div>
					</div>
				</EnterTransition>
			</div>
		</div>
	);
}
