"use client";

import EnterTransition from "@/components/motion/EnterTransition";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useGlobalStore } from "@/stores/useGlobalStore";
import { Black_Ops_One } from "next/font/google";
import Link from "next/link";
import type { ToolKit } from "toolkit";

const blackOps = Black_Ops_One({ weight: "400", subsets: ["latin"] });

type AboutMeProps = {
	className?: string;
	toolkit: ToolKit;
};

export default function AboutMe({ className = "", toolkit }: AboutMeProps) {
	const { setIsViewingStack } = useGlobalStore();

	const Tools = ({ which }: { which: keyof ToolKit }) => {
		return toolkit[which].map((tool, index) => (
			<div key={`${which}-tool-${index}`}>
				<Link
					href={tool.link || "#"}
					className="flex gap-2 text-sm"
					target="_blank"
				>
					{tool.icon}
					{tool.name}
				</Link>
			</div>
		));
	};

	const handleViewStack = () => {
		setIsViewingStack(true);
	};

	return (
		<div className={className}>
			<div className="pb-10">
				<EnterTransition once>
					<h1 className="text-center lg:text-left mb-4 uppercase dark:text-white">
						<span className="font-extrabold text-5xl">
							Meet the
						</span>
						<span
							className={cn(
								"text-accent dark:text-primary text-[54px] pl-4",
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
			<div className="flex flex-col gap-6 w-fit">
				<EnterTransition className="delay-200" once>
					Fueled by <span>coffee ☕</span> and powered by a strong
					CPU, here’s my toolkit:
				</EnterTransition>

				<EnterTransition
					className="grid grid-cols-2 gap-8 delay-300"
					once
				>
					<div className="grid grid-cols-2 w-full col-span-2 gap-4">
						<Tools which="col1" />
						<Tools which="col2" />
					</div>

					<div className="hidden lg:block col-span-2">
						<Button
							variant="outline"
							className="arsenal-toggle bg-secondary/20"
							onClick={handleViewStack}
						>
							Unveil my full arsenal
						</Button>
					</div>
				</EnterTransition>
			</div>
		</div>
	);
}
