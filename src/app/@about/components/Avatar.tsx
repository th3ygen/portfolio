"use client";

import Image from "next/image";
import AvatarShadeSVG from "./AvatarShadeSVG";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { useInView } from "motion/react";

type AvatarProps = {
	className?: string;
};

export default function Avatar({ className = "" }: AvatarProps) {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once: true });
	const [isLoaded, setIsLoaded] = useState(false);

	const handleOnLoad = () => {
		setIsLoaded(true);
	};

	return (
		<div ref={ref} className={cn("relative w-full h-full", className)}>
			<div
				className={cn(
					"absolute top-0 -right-[130%] w-[388px] h-[664px] duration-500 delay-300",
					isInView && isLoaded && "right-10"
				)}
			>
				<AvatarShadeSVG color="#baff0a6f" />
			</div>
			<div
				className={cn(
					"absolute top-0 -right-[130%] w-[388px] h-[664px] duration-500 delay-200",
					isInView && isLoaded && "right-5"
				)}
			>
				<AvatarShadeSVG color="#baff0a" />
			</div>
			<Image
				className={cn(
					"absolute top-0 -right-[130%] duration-500 delay-150",
					isInView && isLoaded && "right-0"
				)}
				src="/assets/me-toon-2.png"
				alt="avatar"
				width={388}
				height={584}
				onLoad={handleOnLoad}
			/>
		</div>
	);
}
