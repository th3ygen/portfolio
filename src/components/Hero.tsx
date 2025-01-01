"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
	FaDev,
	FaEnvelope,
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaStackOverflow,
	FaTwitter,
} from "react-icons/fa";
import Link from "next/link";
import BoxReveal from "@/components/motion/BoxReveal";
import { cn } from "@/lib/utils";
import {
	motion,
	useInView,
	useVelocity,
	useScroll,
	useMotionValue,
	useSpring,
	useTransform,
	useMotionValueEvent,
} from "motion/react";

import { Aldrich } from "next/font/google";

const aldrich = Aldrich({ weight: "400" });

const ContactButton: React.FC<{ link: string; children: React.ReactNode }> = ({
	link,
	children,
}) => {
	return (
		<Link
			href={link}
			className="text-xl p-1 dark:text-primary transition duration-300 hover:scale-150"
		>
			{children}
		</Link>
	);
};

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
	const scrollTransform = useTransform(smoothScroll, [-20000, 20000], [0.2, 2]);

	useMotionValueEvent(scrollTransform, "change", (value) => {
		y.set(value);
	});

	return (
		<motion.div
			ref={ref}
			className={cn("fixed top-0 left-1/3 w-20 h-full z-50", className)}
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
				{[...Array(15)].map((_, index) => (
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
				))}
			</div>
		</motion.div>
	);
};

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

	return (
		<div className="h-fit pl-20">
			<BoxReveal className="mb-8">
				<div className={cn("text-4xl font-bold text-accent", aldrich.className)}>
					Hello world! I{"'"}m...
				</div>
			</BoxReveal>
			<BoxReveal delay="delay-100">
				<div className="text-7xl font-bold text-primary drop-shadow-[0_0px_.5px_rgba(0,0,0,1)] hover:scale-125 duration-300">
					MUHD. AIDIL{" "}
				</div>
			</BoxReveal>
			<BoxReveal delay="delay-300">
				<span className="text-7xl font-bold [letter-spacing:12.7px]">
					SYAZWAN
				</span>
			</BoxReveal>
			<BoxReveal className="mt-2" delay="delay-500">
				<div className="text-lg [letter-spacing:.2px]">
					<span className="">or you could call me </span>
					<span className="font-bold text-primary bg-black dark:bg-primary dark:text-black px-1 rounded">
						Dil
					</span>
					{/* <HeroHighlight>Dil</HeroHighlight> */}
					<span className=""> , if you prefer!</span>
				</div>
			</BoxReveal>

			<BoxReveal className="mt-8 flex flex-col">
				<div className="text-2xl text-accent font-bold">Full-stack Developer</div>
				<div className="italic">
					with {expYears}+ years of experience
				</div>
			</BoxReveal>

			<BoxReveal className="mt-8">
				<Button variant="outline" size="lg" className="bg-secondary/20">
					{"Let's"} work together!
				</Button>
			</BoxReveal>

			<BoxReveal className="mt-4" delay="delay-100">
				<div className="flex gap-2 items-center">
					<ContactButton link="https://twitter.com/muhd_aidil">
						<FaTwitter />
					</ContactButton>
					<ContactButton link="https://twitter.com/muhd_aidil">
						<FaGithub />
					</ContactButton>
					<ContactButton link="https://twitter.com/muhd_aidil">
						<FaLinkedin />
					</ContactButton>
					<ContactButton link="https://twitter.com/muhd_aidil">
						<FaInstagram />
					</ContactButton>
					<ContactButton link="https://twitter.com/muhd_aidil">
						<FaEnvelope />
					</ContactButton>
					<ContactButton link="https://twitter.com/muhd_aidil">
						<FaStackOverflow />
					</ContactButton>
					<ContactButton link="https://twitter.com/muhd_aidil">
						<FaDev />
					</ContactButton>
				</div>
			</BoxReveal>
			<Pillar />
		</div>
	);
}
