import { cn } from "@/lib/utils";
import { useInView } from "motion/react";
import { useRef, useState } from "react";

type BoxRevealProps = {
	className?: string;
	children: React.ReactNode;
	delay?:
		| "delay-0"
		| "delay-75"
		| "delay-100"
		| "delay-150"
		| "delay-200"
		| "delay-300"
		| "delay-500"
		| "delay-700"
		| "delay-1000";
	duration?: number;
};

export default function BoxReveal({
	className = "",
	children,
	delay = "delay-0",
}: BoxRevealProps) {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref);
	const [animationSeq, setAnimationSeq] = useState<number>(0);

	return (
		<div className={cn("relative flex w-fit")}>
			<div
				ref={ref}
				className={cn(
					"absolute top-0 left-0 h-full w-full bg-primary translate-y-52 opacity-0 blur-[100px] transition-all [transition-timing-function:cubic-bezier(0.785,0.135,0.150,0.860)] z-10 pointer-events-none",
					`duration-1000 ${delay}`,
					isInView && "opacity-100 translate-y-0 blur-[0px]",
					animationSeq > 0 && "w-0"
				)}
				onTransitionEnd={() => {
					setAnimationSeq((prev) => prev + 1);
				}}
			/>
			<div
				className={cn(
					"relative opacity-0 duration-0 pointer-events-none",
					className,
					animationSeq > 0 && "opacity-100 pointer-events-auto"
				)}
			>
				{children}
			</div>
		</div>
	);
}
