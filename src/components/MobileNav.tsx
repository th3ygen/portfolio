import { cn } from "@/lib/utils";
import Logo from "./Logo";
import EnterTransition from "./motion/EnterTransition";
import Link from "next/link";

const navs: Array<{ label: string; target: string }> = [
	{
		label: "About",
		target: "about",
	},
	{
		label: "Experiences",
		target: "experiences",
	},
	{
		label: "Projects",
		target: "projects",
	},
	{
		label: "Contact",
		target: "contact",
	},
];

type MobileNavProps = {
	className?: string;
};

export default function MobileNav({ className = "" }: MobileNavProps) {
	return (
		<div
			className={cn(
				"absolute left-0 top-0 w-full h-fit flex flex-col items-center pt-8 justify-center",
				className
			)}
		>
			<EnterTransition direction="down" once className="delay-150">
				<Logo />
			</EnterTransition>

			<EnterTransition direction="down" once className="delay-200">
				<nav className="w-full flex gap-4 mt-6">
					{navs.map((nav, index) => (
						<Link key={index} href={`#${nav.target}`}>
							{nav.label}
						</Link>
					))}
				</nav>
			</EnterTransition>
		</div>
	);
}
