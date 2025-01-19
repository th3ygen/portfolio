"use client";

import BoxReveal from "@/components/motion/BoxReveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
	motion,
	useInView,
	useMotionValue,
	useMotionValueEvent,
	useScroll,
	useSpring,
	useTransform,
	useVelocity,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import {
	FaDev,
	FaEnvelope,
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaStackOverflow,
} from "react-icons/fa";

import { Aldrich } from "next/font/google";
import { BsTwitterX } from "react-icons/bs";
import Contacts from "./content/Contacts";

const aldrich = Aldrich({ weight: "400" });

const Pillar: React.FC<{ className?: string }> = ({ className = "" }) => {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref);

	const y = useMotionValue(1.1);
	const { scrollY } = useScroll();
	const scrollVelocity = useVelocity(scrollY);
	const smoothScroll = useSpring(scrollVelocity, {
		damping: 70,
		stiffness: 100,
		mass: 15,
	});
	const scrollTransform = useTransform(
		smoothScroll,
		[-20000, 20000],
		[0.2, 2]
	);

	useMotionValueEvent(scrollTransform, "change", (value) => {
		y.set(value);
	});

	const Shadows: React.FC<{ n: number }> = ({ n }) => {
		return [...Array(n)].map((_, index) => (
			<div
				key={index}
				className={cn(
					`absolute left-0 w-full bg-primary duration-1000 delay-300 -translate-y-20`,
					isInView && "translate-y-0"
				)}
				style={{
					height: `${10 / (index + 1)}px`,
					bottom: `${200 - (index + 1) * 8 - 2}px`,
					opacity: `${1 / (index + 1)}`,
				}}
			></div>
		));
	};

	return (
		<motion.div
			ref={ref}
			className={cn("fixed top-0 left-1/3 w-20 h-full", className)}
			style={{ scaleY: y }}
		>
			<div
				className={cn(
					"absolute -top-[100%] left-0 w-full h-[150vh] -translate-y-[50vh] duration-700 delay-75 ease-in-out",
					className,
					isInView && "top-[0%]"
				)}
			>
				<div className="relative w-full h-[calc(100%_-_200px)] bg-primary"></div>
				<Shadows n={15} />
			</div>
		</motion.div>
	);
};

export const contacts = [
	{
		link: "https://x.com/aideal_syaz",
		icon: <BsTwitterX />,
	},
	{
		link: "https://github.com/th3ygen",
		icon: <FaGithub />,
	},
	{
		link: "https://www.linkedin.com/in/aidilsyaz/",
		icon: <FaLinkedin />,
	},
	{
		link: "https://www.instagram.com/aidil.syaz_/",
		icon: <FaInstagram />,
	},
	{
		link: "mailto:i.dilsyaz1@gmail.com",
		icon: <FaEnvelope />,
	},
	{
		link: "https://stackoverflow.com/users/10222642/aidil",
		icon: <FaStackOverflow />,
	},
	{
		link: "https://dev.to/th3ygen",
		icon: <FaDev />,
	},
];

export default function Hero() {
	const [expYears, setExpYears] = useState(0);

	useEffect(() => {
		const start = new Date("2019-08-01");
		const now = new Date();

		const diff = now.getTime() - start.getTime();
		const years = diff / (1000 * 60 * 60 * 24 * 365);

		setExpYears(Math.floor(years));

		return () => {};
	}, []);

	const handleContact = () => {
		const contactEl = document.getElementById("contact");

		if (contactEl) {
			contactEl.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className="h-fit px-8 lg:pl-20 flex flex-col justify-center items-center md:items-start gap-2 pb-20 lg:pb-0">
			<BoxReveal className="mb-2 md:mb-8">
				<div
					className={cn(
						"text-2xl md:text-4xl text-center md:text-left font-bold text-accent w-full",
						aldrich.className
					)}
				>
					Hello world! I{"'"}m...
				</div>
			</BoxReveal>
			<BoxReveal delay="delay-100">
				<div className="text-5xl md:text-7xl font-bold text-primary drop-shadow-[0_0px_.5px_rgba(0,0,0,1)] hover:scale-125 duration-300">
					MUHD AIDIL
				</div>
			</BoxReveal>
			<BoxReveal delay="delay-300">
				<span className="text-5xl md:text-7xl font-bold [letter-spacing:7px] md:[letter-spacing:12.7px]">
					SYAZWAN
				</span>
			</BoxReveal>
			<BoxReveal className="mt-2" delay="delay-500">
				<div className="text-sm md:text-lg [letter-spacing:.2px]">
					<span className="">or you could call me </span>
					<span className="font-bold text-primary bg-black dark:bg-primary dark:text-black px-1 rounded">
						Dil
					</span>
					{/* <HeroHighlight>Dil</HeroHighlight> */}
					<span className=""> , if you prefer!</span>
				</div>
			</BoxReveal>

			<BoxReveal className="mt-14 md:mt-8 flex flex-col text-center md:text-left">
				<div className="text-2xl text-accent font-bold">
					Full-stack Developer
				</div>
				<div className="italic">
					with {expYears}+ years of experience
				</div>
			</BoxReveal>

			<BoxReveal className="mt-8">
				<Button
					size="lg"
					className="text-black/60 dark:text-background dark:bg-primary"
					onClick={handleContact}
				>
					{"Let's"} work together!
				</Button>
			</BoxReveal>

			<BoxReveal className="mt-4" delay="delay-100">
				<div className="flex gap-2 items-center">
					<Contacts contacts={contacts} />
				</div>
			</BoxReveal>
			<Pillar className="hidden xl:block" />
		</div>
	);
}
