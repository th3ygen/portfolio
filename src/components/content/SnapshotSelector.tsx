import { cn } from "@/lib/utils";
import Image from "next/image";
import type { CareerSnapshot } from "career";

type SnapshotSelectorProps = CareerSnapshot;

export default function SnapshotSelector({
	role,
	company,
	logo,
	height = 80,
	width = 80,
	className = "",
	active = false,
	end,
	onClick,
}: SnapshotSelectorProps) {
	const year = (end || new Date()).getFullYear();

	return (
		<div
			className={cn(
				"relative flex h-[100px] w-full justify-center cursor-pointer border-r-2 duration-300 border-accent hover:bg-secondary/10",
				active &&
					"bg-secondary/15 border-r-8 border-primary hover:border-primary hover:bg-secondary/20"
			)}
			onClick={onClick}
		>
			<div
				className={cn(
					"absolute top-0 right-0 text-primary h-full flex items-center",
					active && ""
				)}
			>
				<div
					className={cn(
						"-rotate-90 text-xs translate-x-2 duration-1000 tracking-[4px]",
						active && "translate-x-0"
					)}
				>
					{year}
				</div>
			</div>
			<Image
				src={logo}
				alt={company + role + "-logo"}
				height={height}
				width={width}
				className={cn("object-contain", className)}
			/>
		</div>
	);
}
