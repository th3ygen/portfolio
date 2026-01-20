"use client";

import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { useGlobalStore } from "@/stores/useGlobalStore";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Splash() {
	const { isHeroMounted } = useGlobalStore();

	const [shouldAnimate, setShouldAnimate] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setShouldAnimate(true);
		}, 250);
	}, []);

	return (
		<div
			className={cn(
				"fixed left-0 top-0 h-[100vh] w-full flex items-center justify-center pointer-events-none",
				"bg-background z-[9999] duration-1000 delay-100",
				isHeroMounted && "bg-background/0",
			)}
		>
			<AnimatePresence>
				{!isHeroMounted && (
					<motion.div
						key="splash"
						layoutId="splash"
						className={cn(
							"flex z-[9999] scale-[3] ease-in-out",
							shouldAnimate && "scale-100",
						)}
						transition={{
							duration: 1,
							ease: [0.785, 0.135, 0.15, 0.86],
						}}
					>
						<Logo />
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
