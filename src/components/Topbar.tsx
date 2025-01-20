"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import { useScroll, useMotionValueEvent } from "motion/react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

type TopbarProps = {
	hideTreshold?: number;
	className?: string
};

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

const scrollTo = (target: string) => {
	const el = document.getElementById(target);

	/* about section offset workaround */
	if (target === "about") {
		window.scrollTo({ top: 0, behavior: "smooth" });
		return;
	}

	if (el) {
		el.scrollIntoView({ behavior: "smooth" });
	}
};

const VerticalNav = ({ show }: { show: boolean }) => {
	const navItems = () => {
		return navs.map((nav, index) => (
			<a
				key={`vertical-nav-${index}`}
				onClick={() => scrollTo(nav.target)}
				className={cn("py-4 w-28 cursor-pointer")}
			>
				{nav.label}
			</a>
		));
	};

	return (
		<>
			<nav
				className={cn(
					"flex flex-col absolute top-8 right-0 pt-4 text-end transform transition-all duration-300 opacity-0 -translate-y-10 -z-10",
					show && "translate-y-0 opacity-100"
				)}
			>
				{navItems()}
				<Link href="/docs/cv.pdf" target="_blank" className="text-md py-4">
					CV
				</Link>
			</nav>
			<div
				className={cn(
					"fixed right-14 bottom-0 h-full flex items-end pointer-events-none py-10 opacity-0 translate-y-10 duration-500",
					show && "opacity-60 translate-y-0"
				)}
			>
				<div className="[writing-mode:vertical-lr] -scale-100 border-l-[1px] pt-2 border-primary h-3/5 tracking-[8px] font-light">
					Muhd. Aidil Syazwan Hamdan
				</div>
			</div>
		</>
	);
};

const Topbar: React.FC<TopbarProps> = ({ hideTreshold = 800, className = "" }) => {
	const { scrollY } = useScroll();
	const [isHidden, setIsHidden] = useState(false);

	useMotionValueEvent(scrollY, "change", (latest) => {
		setIsHidden(latest > hideTreshold);
	});

	const Navs: React.FC = () => {
		return navs.map((nav, index) => (
			<a
				className="cursor-pointer"
				key={`horizontal-nav-${index}`}
				onClick={() => scrollTo(nav.target)}
			>
				{nav.label}
			</a>
		));
	};

	return (
		<div
			className={cn(
				"fixed top-0 left-0 w-full flex justify-between items-center p-6 px-14 z-40",
				className
			)}
		>
			<div
				className={cn(
					"absolute left-0 top-0 w-full h-full bg-background duration-300 -translate-y-0 opacity-100 pointer-events-none",
					isHidden && "-translate-y-12 opacity-0"
				)}
			></div>
			<Logo />
			<div className="flex gap-8 items-center">
				<nav
					className={cn(
						"transform flex gap-8 transition-transform duration-300",
						isHidden && "-translate-y-20"
					)}
				>
					<Navs />
					<Link
						href="/docs/cv.pdf"
						target="_blank"
						className="text-md"
					>
						CV
					</Link>
				</nav>
				<div className="relative flex flex-col">
					<ThemeToggle />
					<VerticalNav show={isHidden} />
				</div>
			</div>
		</div>
	);
};

export default Topbar;
