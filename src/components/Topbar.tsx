"use client";

import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { Button } from "./ui/button";
import Logo from "./Logo";
import { useTheme } from "next-themes";
import { useScroll, useMotionValueEvent } from "motion/react";
import { cn } from "@/lib/utils";

type TopbarProps = {
	hideTreshold?: number;
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

const ThemeToggle: React.FC = () => {
	const { theme, setTheme } = useTheme();
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	if (!isMounted) return <Button className="px-6"></Button>;

	return (
		<Button onClick={toggleTheme}>
			{theme === "dark" ? <FaMoon /> : <FaSun />}
		</Button>
	);
};

const VerticalNav = ({ show }: { show: boolean }) => {
	return (
		<nav className="flex flex-col absolute top-12 right-0 pt-4 text-end -z-10">
			{navs.map((nav, index) => (
				<a
					key={`vertical-nav-${index}`}
					onClick={() => scrollTo(nav.target)}
					className={cn(
						"py-4 w-28 cursor-pointer transform transition-all duration-300 opacity-0 -translate-y-10",
						show && "translate-y-0 opacity-100"
					)}
				>
					{nav.label}
				</a>
			))}
		</nav>
	);
};

const Topbar: React.FC = ({ hideTreshold = 800 }: TopbarProps) => {
	const { scrollY } = useScroll();
	const [isHidden, setIsHidden] = useState(false);

	useMotionValueEvent(scrollY, "change", (latest) => {
		setIsHidden(latest > hideTreshold);
	});

	return (
		<div className="fixed top-0 left-0 w-full flex justify-between items-center p-6 px-14 bg-background z-20">
			<Logo />
			<div className="flex gap-8 items-center">
				<nav
					className={cn(
						"transform flex gap-8 transition-transform duration-300",
						isHidden && "-translate-y-20"
					)}
				>
					{navs.map((nav, index) => (
						<a
							className="cursor-pointer"
							key={`horizontal-nav-${index}`}
							onClick={() => scrollTo(nav.target)}
						>
							{nav.label}
						</a>
					))}
				</nav>
				<div className="relative flex flex-col items-end">
					<ThemeToggle />
					<VerticalNav show={isHidden} />
				</div>
			</div>
		</div>
	);
};

export default Topbar;
