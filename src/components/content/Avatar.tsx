"use client";

import Image from "next/image";
import AvatarShadeSVG from "./AvatarShadeSVG";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { useGlobalStore } from "@/stores/useGlobalStore";
import type { ToolKit } from "toolkit";
import TechStackItem from "./TechStackItem";
import TechStack from "./TechStack";

const AVATAR_WIDTH = 388;
const AVATAR_HEIGHT = 584;

const AVATAR_SHADE_COLORS = ["#baff0a", "#baff0a6f"];

type AvatarProps = {
	className?: string;
	toolkit: ToolKit;
};

export default function Avatar({ className = "", toolkit }: AvatarProps) {
	const ref = useRef<HTMLDivElement>(null);
	const hiddenRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, {
		once: true,
	});
	const hasFinishedScrolling = useInView(hiddenRef);
	const [isLoaded, setIsLoaded] = useState(false);
	const { isViewingStack, setIsViewingStack } = useGlobalStore();

	const handleOnLoad = () => {
		setIsLoaded(true);
	};

	useEffect(() => {
		window.addEventListener("click", (e) => {
			const target = e.target as HTMLElement;

			if (
				target.closest(".arsenal-toggle") ||
				target.closest(".arsenal-container")
			)
				return;

			if (!isViewingStack) setIsViewingStack(false);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// close the stack when the user scrolls
	useEffect(() => {
		if (!isInView) setIsViewingStack(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isInView]);

	const Tools = ({ which }: { which: keyof ToolKit }) => {
		return toolkit[which].map((tool, index) => (
			<TechStackItem key={`${which}-tool-${index}`} {...tool} />
		));
	};

	return (
		<div ref={ref} className={cn("relative w-full h-full", className)}>
			<div
				className={cn(
					"absolute top-0 -right-[130%] w-[388px] h-[664px] duration-500 delay-200",
					isInView && isLoaded && "right-10",
					isViewingStack && "right-[160%]"
				)}
			>
				<AvatarShadeSVG color={AVATAR_SHADE_COLORS[1]} />
			</div>
			<div
				className={cn(
					"absolute top-0 -right-[130%] w-[388px] h-[664px] duration-500 delay-200",
					isInView && isLoaded && "right-5",
					isViewingStack && "right-[145%]"
				)}
			>
				<AvatarShadeSVG color={AVATAR_SHADE_COLORS[0]} />
			</div>
			<div
				className={cn(
					"arsenal-container absolute bottom-0 right-[45%] w-[620px] h-[624px] pointer-events-none",
					isViewingStack && "pointer-events-auto"
				)}
			>
				<div
					className={cn(
						"absolute top-0 right-0 h-full w-full bg-[#baff0a] pointer-events-none duration-500 delay-200 opacity-100",
						!isViewingStack && "w-0 opacity-0"
					)}
				></div>
				<div
					className={cn(
						"relative w-full h-full text-background flex flex-col gap-6 pt-4 pl-8 pr-36 translate-x-96 opacity-0 duration-500 delay-200",
						isViewingStack && "translate-x-0 opacity-100"
					)}
				>
					<div
						className={cn(
							"relative w-full h-fit duration-75 delay-300 opacity-0 flex flex-col gap-6 overflow-y-scroll no-scrollbar pb-20",
							isViewingStack && "opacity-100"
						)}
					>
						<div className="fixed bottom-0 left-0 flex justify-center items-end w-full h-40 pointer-events-none">
							<div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-primary"></div>
							<div className="relative z-10 pb-2 font-bold animate-bounce">
								{(hasFinishedScrolling &&
									"Excluding micro libs, that's it (for now)") ||
									"Scroll down for more"}
							</div>
						</div>
						<TechStack label="Frontend" className="pt-8">
							<Tools which="frontend" />
						</TechStack>
						<TechStack label="Backend">
							<Tools which="backend" />
						</TechStack>
						<TechStack label="Real-time Systems & IoT">
							<Tools which="realtimeSystems" />
						</TechStack>
						<TechStack label="Data Analytics & AI">
							<Tools which="dataAnalytics" />
						</TechStack>
						<TechStack label="Devops & Infrastructure">
							<Tools which="devOps" />
						</TechStack>
						<TechStack label="Tools">
							<Tools which="tools" />
						</TechStack>
						<TechStack label="Web Security">
							<Tools which="webSecurity" />
						</TechStack>
						<TechStack label="Misc">
							<Tools which="misc" />
						</TechStack>

						{/* hidden footer */}
						<div ref={hiddenRef} className="w-full"></div>
					</div>
				</div>
			</div>
			<Image
				className={cn(
					"absolute top-0 -right-[130%] duration-500 delay-150",
					isInView && isLoaded && "right-0",
					isViewingStack && "-right-20"
				)}
				src="/assets/me-toon-2.png"
				alt="avatar"
				width={AVATAR_WIDTH}
				height={AVATAR_HEIGHT}
				onLoad={handleOnLoad}
			/>
		</div>
	);
}
