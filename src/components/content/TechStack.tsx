"use client";

import { cn } from "@/lib/utils";

type TechStackProps = {
	label: string;
	className?: string;
	children: React.ReactNode;
};

export default function TechStack({
	label,
	className = "",
	children,
}: TechStackProps) {
	return (
		<div className={cn("w-full h-fit", className)}>
			<h2 className="text-md font-extrabold border-accent border-b-[1px] text-black">
				{label}
			</h2>
			<div className="grid grid-cols-3 gap-2 pt-2">{children}</div>
		</div>
	);
}
