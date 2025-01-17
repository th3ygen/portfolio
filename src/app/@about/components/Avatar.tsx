"use client";

import Image from "next/image";
import AvatarShadeSVG from "./AvatarShadeSVG";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { useGlobalStore } from "@/stores/useGlobalStore";
import { RiJavascriptLine, RiNextjsLine, RiNodejsLine, RiPagesLine, RiReactjsLine } from "react-icons/ri";
import { SiArduino, SiBluetooth, SiChakraui, SiCss3, SiDatabricks, SiDocker, SiExoscale, SiExpress, SiEyeem, SiFramer, SiGit, SiGithub, SiGithubactions, SiGitlab, SiGraphql, SiGriddotai, SiGridsome, SiHtml5, SiHtmlacademy, SiHttpie, SiInsomnia, SiIota, SiJsonwebtokens, SiLeaflet, SiMapbox, SiMongodb, SiMqtt, SiNginx, SiPlangrid, SiPm2, SiPostgresql, SiPostman, SiPrisma, SiRaspberrypi, SiRedux, SiRsocket, SiSecurityscorecard, SiShadcnui, SiSocketdotio, SiSst, SiStripe, SiSwr, SiTailwindcss, SiTelegram, SiTensorflow, SiThingiverse, SiTimescale, SiTrello, SiTypescript, SiVercel, SiViadeo, SiWebrtc, SiZod } from "react-icons/si";
import { GiBearFace, GiFarmer } from "react-icons/gi";
import { ImEvil, ImEvil2 } from "react-icons/im";
import { BsShieldLock, BsShieldLockFill } from "react-icons/bs";
import { TbBinary, TbBrandTypescript } from "react-icons/tb";
import { FaAws, FaCar, FaChartArea, FaDatabase, FaEnvelope, FaEye, FaFileExcel, FaFilePdf, FaGlobe, FaLock, FaNode, FaPlug, FaRegIdCard, FaStream, FaTable, FaTablet, FaTabletAlt, FaUsers, FaVideo } from "react-icons/fa";

type TechStackItemProps = {
	icon: React.ReactNode;
	name: string;
};

const TechStackItem: React.FC<TechStackItemProps> = ({ icon, name }) => {
	return (
		<div className="flex items-center gap-2 text-xs">
			{icon}
			<span>{name}</span>
		</div>
	);
};

type TechStackProps = {
	label: string;
	className?: string;
	children: React.ReactNode;
};

const TechStack: React.FC<TechStackProps> = ({
	label,
	className = "",
	children,
}) => {
	return (
		<div className={cn("w-full h-fit", className)}>
			<h2 className="text-md font-bold border-accent border-b-[1px]">
				{label}
			</h2>
			<div className="grid grid-cols-3 gap-2 pt-2">{children}</div>
		</div>
	);
};

const frontendTools = [
	{
		name: "Next.js",
		icon: <RiNextjsLine size="24" />,
	},
	{
		name: "React",
		icon: <RiReactjsLine size="24" />,
	},
	{
		name: "React Native",
		icon: <RiReactjsLine size="24" />,
	},
	{
		name: "JavaScript (ES6+)",
		icon: <RiJavascriptLine size="24" />,
	},
	{
		name: "TypeScript",
		icon: <TbBrandTypescript size="24" />,
	},
	{
		name: "Zod",
		icon: <SiZod size="24" />,
	},
	{
		name: "Zustand",
		icon: <GiBearFace size="24" />,
	},
	{
		name: "Redux",
		icon: <SiRedux size="24" />,
	},
	{
		name: "Tailwind CSS",
		icon: <SiTailwindcss size="24" />,
	},
	{
		name: "Chakra UI",
		icon: <SiChakraui size="24" />,
	},
	{
		name: "shadcn",
		icon: <SiShadcnui size="24" />,
	},
	{
		name: "Framer motion",
		icon: <SiFramer size="24" />,
	},
	{
		name: "SWR",
		icon: <SiSwr size="24" />,
	},
	{
		name: "HTML",
		icon: <SiHtml5 size="24" />,
	},
	{
		name: "HTML5",
		icon: <SiHtml5 size="24" />,
	},
	{
		name: "CSS",
		icon: <SiCss3 size="24" />,
	},
	{
		name: "CSS3/SCSS",
		icon: <SiCss3 size="24" />,
	},
];

const backendTools = [
	{
		name: "Node.js",
		icon: <RiNodejsLine size="24" />,
	},
	{
		name: "Express",
		icon: <SiExpress size="24" />,
	},
	{
		name: "Typescript",
		icon: <TbBrandTypescript size="24" />,
	},
	{
		name: "Javascript (ES6+)",
		icon: <RiJavascriptLine size="24" />,
	},
	{
		name: "Zod",
		icon: <SiZod size="24" />,
	},
	{
		name: "Next.js API",
		icon: <RiNextjsLine size="24" />,
	},
	{
		name: "Server Action",
		icon: <RiNextjsLine size="24" />,
	},
	{
		name: "Prisma (ORM)",
		icon: <SiPrisma size="24" />,
	},
	{
		name: "GraphQL",
		icon: <SiGraphql size="24" />,
	},
	{
		name: "PostgreSQL",
		icon: <SiPostgresql size="24" />,
	},
	{
		name: "MongoDB",
		icon: <SiMongodb size="24" />,
	},
	{
		name: "Tensorflow.js",
		icon: <SiTensorflow size="24" />,
	},
	{
		name: "FormulaJS",
		icon: <FaTable size="24" />,
	},
	{
		name: "HyperFormula",
		icon: <FaFileExcel size="24" />,
	},
	{
		name: "NextAuth",
		icon: <RiNextjsLine size="24" />,
	},
	{
		name: "Nodemailer",
		icon: <FaEnvelope size="24" />,
	},
];

const realtimeSystems = [
	{
		name: "WebSocket",
		icon: <FaPlug size="24" />,
	},
	{
		name: "Socket.io",
		icon: <SiSocketdotio size="24" />,
	},
	{
		name: "MQTT",
		icon: <SiMqtt size="24" />,
	},
	{
		name: "WebRTC",
		icon: <SiWebrtc size="24" />,
	},
	{
		name: "CAN Bus",
		icon: <FaCar size="24" />,
	},
	{
		name: "Bluetooth Low Energy (BLE)",
		icon: <SiBluetooth size="24" />,
	},
	{
		name: "ThingsBoard",
		icon: <SiDatabricks size="24" />,
	},
	{
		name: "Arduino (C++)",
		icon: <SiArduino size="24" />,
	},
	{
		name: "Raspberry Pi",
		icon: <SiRaspberrypi size="24" />,
	},
	{
		name: "RTMP/RTSP",
		icon: <FaVideo size="24" />,
	},
];

const dataAnalytics = [
	{
		name: "Tensorflow.js",
		icon: <SiTensorflow size="24" />,
	},
	{
		name: "Recharts",
		icon: <FaChartArea size="24" />,
	},
	{
		name: "Chart.js",
		icon: <FaChartArea size="24" />,
	},
	{
		name: "Data Visualization",
		icon: <FaChartArea size="24" />,
	},
	{
		name: "Predictive Analysis",
		icon: <FaChartArea size="24" />,
	},
	{
		name: "Real-time Monitoring",
		icon: <FaEye size="24" />,
	},
];

const devopsInfra = [
	{
		name: "PM2",
		icon: <SiPm2 size="24" />,
	},
	{
		name: "Nginx",
		icon: <SiNginx size="24" />,
	},
	{
		name: "AWS (EC2, S3, RDS)",
		icon: <FaAws size="24" />,
	},
	{
		name: "Docker",
		icon: <SiDocker size="24" />,
	},
	{
		name: "Github Actions",
		icon: <SiGithubactions size="24" />,
	},
	{
		name: "Vercel",
		icon: <SiVercel size="24" />,
	},
];

const tools = [
	{
		name: "Git",
		icon: <SiGit size="24" />,
	},
	{
		name: "GitHub",
		icon: <SiGithub size="24" />,
	},
	{
		name: "GitLab",
		icon: <SiGitlab size="24" />,
	},
	{
		name: "Postman",
		icon: <SiPostman size="24" />,
	},
	{
		name: "Insomnia",
		icon: <SiInsomnia size="24" />,
	},
	{
		name: "Trello",
		icon: <SiTrello size="24" />,
	},
	{
		name: "Mapbox GL API",
		icon: <SiMapbox size="24" />,
	},
	{
		name: "Leaflet",
		icon: <SiLeaflet size="24" />,
	},
	{
		name: "Telegram Bot API",
		icon: <SiTelegram size="24" />,
	},
];

const webSecurity = [
	{
		name: "SSL",
		icon: <FaGlobe size="24" />,
	},
	{
		name: "CORS",
		icon: <BsShieldLockFill size="24" />,
	},
	{
		name: "CSRF",
		icon: <ImEvil size="24" />,
	},
	{
		name: "XSS",
		icon: <ImEvil size="24" />,
	},
	{
		name: "Cryptography",
		icon: <TbBinary size="24" />,
	},
	{
		name: "OAuth",
		icon: <FaLock size="24" />,
	},
	{
		name: "JWT",
		icon: <SiJsonwebtokens size="24" />,
	},
	{
		name: "RBAC",
		icon: <FaUsers size="24" />,
	},
];

const misc = [
	{
		name: "Stripe",
		icon: <SiStripe size="24" />,
	},
	{
		name: "Dynamic PDF/CSV Generation",
		icon: <FaDatabase size="24" />,
	},
	{
		name: "Static Content Management",
		icon: <RiPagesLine size="24" />,
	},
	{
		name: "IoT Data Logging",
		icon: <FaDatabase size="24" />,
	},
];

type AvatarProps = {
	className?: string;
};

export default function Avatar({ className = "" }: AvatarProps) {
	const ref = useRef<HTMLDivElement>(null);
	const hiddenRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, {
		once: true
	});
	const hasFinishedScrolling = useInView(hiddenRef);
	const [isLoaded, setIsLoaded] = useState(false);
	const { isViewingStack, setIsViewingStack } = useGlobalStore();

	const handleOnLoad = () => {
		setIsLoaded(true);
	};

	useEffect(() => {
		window.addEventListener("click", (e) => {
			const target = e.target as HTMLElement;

			if (
				target.closest(".arsenal-toggle") ||
				target.closest(".arsenal-container")
			)
				return;

			if (!isViewingStack) setIsViewingStack(false);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// close the stack when the user scrolls
	useEffect(() => {
		if (!isInView) setIsViewingStack(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isInView]);

	return (
		<div ref={ref} className={cn("relative w-full h-full", className)}>
			<div
				className={cn(
					"absolute top-0 -right-[130%] w-[388px] h-[664px] duration-500 delay-200",
					isInView && isLoaded && "right-10",
					isViewingStack && "right-[160%]"
				)}
			>
				<AvatarShadeSVG color="#baff0a6f" />
			</div>
			<div
				className={cn(
					"absolute top-0 -right-[130%] w-[388px] h-[664px] duration-500 delay-200",
					isInView && isLoaded && "right-5",
					isViewingStack && "right-[145%]"
				)}
			>
				<AvatarShadeSVG color="#baff0a" />
			</div>
			<div
				className={cn(
					"arsenal-container absolute bottom-0 right-[45%] w-[620px] h-[624px] pointer-events-none",
					isViewingStack && "pointer-events-auto"
				)}
			>
				<div
					className={cn(
						"absolute top-0 right-0 h-full w-full bg-[#baff0a] pointer-events-none duration-500 delay-200 opacity-100",
						!isViewingStack && "w-0 opacity-0"
					)}
				></div>
				<div
					className={cn(
						"relative w-full h-full text-background flex flex-col gap-6 pt-4 pl-8 pr-36 translate-x-96 opacity-0 duration-500 delay-200",
						isViewingStack && "translate-x-0 opacity-100"
					)}
				>
					<div
						className={cn(
							"relative w-full h-fit duration-75 delay-300 opacity-0 flex flex-col gap-6 overflow-y-scroll no-scrollbar pb-20",
							isViewingStack && "opacity-100"
						)}
					>
						<div className="fixed bottom-0 left-0 flex justify-center items-end w-full h-40 pointer-events-none">
							<div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-primary"></div>
							<div className="relative z-10 pb-2 font-bold animate-bounce">
								{(hasFinishedScrolling &&
									"Excluding micro libs, that's it (for now)") ||
									"Scroll down for more"}
							</div>
						</div>
						<TechStack label="Frontend" className="pt-8">
							{frontendTools.map((tool, index) => (
								<TechStackItem key={index} {...tool} />
							))}
						</TechStack>
						<TechStack label="Backend">
							{backendTools.map((tool, index) => (
								<TechStackItem key={index} {...tool} />
							))}
						</TechStack>
						<TechStack label="Real-time Systems & IoT">
							{realtimeSystems.map((tool, index) => (
								<TechStackItem key={index} {...tool} />
							))}
						</TechStack>
						<TechStack label="Data Analytics & AI">
							{dataAnalytics.map((tool, index) => (
								<TechStackItem key={index} {...tool} />
							))}
						</TechStack>
						<TechStack label="Devops & Infrastructure">
							{devopsInfra.map((tool, index) => (
								<TechStackItem key={index} {...tool} />
							))}
						</TechStack>
						<TechStack label="Tools">
							{tools.map((tool, index) => (
								<TechStackItem key={index} {...tool} />
							))}
						</TechStack>
						<TechStack label="Web Security">
							{webSecurity.map((tool, index) => (
								<TechStackItem key={index} {...tool} />
							))}
						</TechStack>
						<TechStack label="Misc">
							{misc.map((tool, index) => (
								<TechStackItem key={index} {...tool} />
							))}
						</TechStack>

						{/* hidden footer */}
						<div ref={hiddenRef} className="w-full"></div>
					</div>
				</div>
			</div>
			<Image
				className={cn(
					"absolute top-0 -right-[130%] duration-500 delay-150",
					isInView && isLoaded && "right-0",
					isViewingStack && "-right-20"
				)}
				src="/assets/me-toon-2.png"
				alt="avatar"
				width={388}
				height={584}
				onLoad={handleOnLoad}
			/>
		</div>
	);
}
