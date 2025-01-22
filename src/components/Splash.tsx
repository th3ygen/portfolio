"use client";

import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { useGlobalStore } from "@/stores/useGlobalStore";
import { AnimatePresence, motion } from "motion/react";

export default function Splash() {
	const { isHeroMounted } = useGlobalStore();

	return (
		<div
			className={cn(
				"fixed left-0 top-0 h-[100vh] w-full flex items-center justify-center pointer-events-none",
				"bg-background z-[9999] duration-1000",
				isHeroMounted && "bg-background/0"
			)}
		>
			<AnimatePresence>
				{!isHeroMounted && (
					<motion.div
						key="splash"
						layoutId="splash"
						className="flex z-[9999]"
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
