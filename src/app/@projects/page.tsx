"use client";

import EnterTransition from "@/components/motion/EnterTransition";
import type { Project } from "./components/ProjectCard";
import ProjectCard from "./components/ProjectCard";
import { TooltipProvider } from "@/components/ui/tooltip";
import ProjectDetails from "./components/ProjectDetails";

const projects = [
	{
		title: "CAM Kenderaan",
		longTitle: "Secure Vehicle Telemetry and Geospatial Data Blackbox",
		description:
			"CAM Kenderaan ensures vehicle telemetry security using CAN bus protocols and GPS/IMU sensors. Built for Cyber Security Malaysia, this geospatial blackbox offers real-time, secure, and actionable data tracking.",
		image: "/assets/projects/camkender/1-0.jpg",
		link: "#",
		tags: [
			"pnc",
			"research",
			"geospatial",
			"real_time",
			"iot",
			"compliance",
			"internal",
			"collaborative",
		],
	},
	{
		title: "CAM Muka",
		longTitle: "Real-time Inmates Facial Recognition and People Counting",
		description:
			"CAM Muka transforms security at Penjara Kajang with real-time facial recognition and people counting, integrating seamlessly with MyGov*Net for efficient monitoring and alerts.",
		image: "/assets/projects/cammuka/2-0.jpg",
		link: "#",
		tags: [
			"pnc",
			"real_time",
			"iot",
			"compliance",
			"ai_ml",
			"automation",
			"internal",
		],
	},
	{
		title: "UMPSA IBMS Hub",
		longTitle: "Centralized UMPSA IBMS Navigation and Management System",
		description:
			"UMPSA IBMS Hub centralizes building management, enabling real-time monitoring, third-party authentication, and automated notifications for seamless infrastructure control.",
		image: "/assets/projects/umpsahub/0-0.jpg",
		link: "#",
		tags: [
			"pnc",
			"internal",
			"real_time",
			"automation",
			"geospatial",
			"iot",
			"prototype",
		],
	},
	{
		title: "CERDAS",
		longTitle:
			"Centralized Emergency Response & Disaster Assistance System",
		description:
			"CERDAS improves emergency response with WebRTC video conferencing and MQTT for real-time data updates, streamlining coordination during critical events.",
		image: "/assets/projects/cerdas/1-1.jpg",
		link: "#",
		tags: [
			"pnc",
			"internal",
			"real_time",
			"automation",
			"geospatial",
			"iot",
			"award",
		],
	},
	{
		title: "IoT Pond Monitor",
		longTitle: "Real-time Fish Pond Water Quality Monitoring System",
		description:
			"This system tracks fish pond water quality in real-time, providing data insights and reports to improve aquaculture efficiency.",
		image: "/assets/projects/iotpondmonitor/0-1.jpg",
		link: "#",
		tags: ["pnc", "internal", "real_time", "automation", "iot"],
	},
	{
		title: "Piping Calc. Tools",
		longTitle:
			"ISO 24817-Compliant Piping Material and Repair Calculation Engine",
		description:
			"An ISO-compliant engine for precise piping calculations with real-time workflows, ensuring safety and efficiency.",
		image: "/assets/projects/gapura/1-0.jpg",
		link: "#",
		tags: ["pnc", "internal", "automation", "compliance", "real_time"],
	},
	{
		title: "Fugen Legacy",
		longTitle: "Modern, Responsive Landing Page for Fugen Legacy",
		description:
			"A responsive landing page with SEO optimization, dynamic content editing, and secure hosting for Fugen Legacy.",
		image: "/assets/projects/fugenlegacy/0-0.jpg",
		link: "fugenlegacy.com",
		tags: ["pub", "automation", "cms", "seo", "static"],
	},
	{
		title: "Poly-Dash",
		longTitle:
			"Real-time Polymer Production Rate Classification and Prediction System",
		description:
			"Poly-Dash uses AI to predict polymer production rates in real-time, optimizing performance and efficiency.",
		image: "/assets/projects/polydash/0-0.jpg",
		link: "#",
		tags: ["pnc", "internal", "real_time", "ai_ml"],
	},
	{
		title: "C/D-SOVA",
		longTitle: "CCTV and Drone-based Safety Outfit Verification and Alert",
		description:
			"A safety system leveraging AI and drones to ensure PPE compliance, offering real-time alerts and monitoring.",
		image: "/assets/projects/csova/4-0.jpg",
		link: "#",
		tags: [
			"pnc",
			"internal",
			"real_time",
			"ai_ml",
			"automation",
			"research",
			"award",
		],
	},
	{
		title: "PCASSO",
		longTitle:
			"Pellet Counter and Analysis System for Statistical Observations",
		description:
			"PCASSO analyzes pellets using real-time data and image streaming, providing efficient statistical insights.",
		image: "/assets/projects/pcasso/1-0.jpg",
		link: "#",
		tags: [
			"pnc",
			"internal",
			"real_time",
			"automation",
			"research",
			"ai_ml",
			"award",
		],
	},
	{
		title: "GajahSafe",
		longTitle: "Elephant Intrusion Detection & Deterrence System",
		description:
			"GajahSafe detects and deters elephant intrusions using geospatial tracking and real-time notifications.",
		image: "/assets/projects/gajahsafe/3-0.jpg",
		link: "#",
		tags: [
			"pnc",
			"internal",
			"real_time",
			"automation",
			"geospatial",
			"iot",
			"award",
		],
	},
	{
		title: "SIPFOS",
		longTitle: "SASAQUA Intensive Prawn Farming Observation System",
		description:
			"SIPFOS monitors prawn pond water quality with real-time IoT tracking and notifications, ensuring optimal conditions.",
		image: "/assets/projects/sipfos/2-0.jpg",
		link: "#",
		tags: ["pnc", "internal", "real_time", "automation", "iot"],
	},
	{
		title: "Fugentutor",
		longTitle:
			"Home Tutor Recruitment Platform with Secure Payment Integration",
		description:
			"Fugentutor connects tutors and students with secure payments, detailed profiles, and automated notifications.",
		image: "/assets/projects/fugentutor/0-0.jpg",
		link: "fugentutor.com",
		tags: [
			"pub",
			"real_time",
			"automation",
			"payment_gateway",
			"cms",
			"seo",
		],
	},
	{
		title: "Ai-VIGS",
		longTitle: "AI-based Vegetable Inspection for Growth Stages",
		description:
			"Ai-VIGS tracks hydroponic vegetable growth, offering real-time monitoring and yield prediction.",
		image: "/assets/projects/justgood/0-0.jpg",
		link: "#",
		tags: ["pnc", "internal", "real_time", "automation", "ai_ml"],
	},
	{
		title: "CEISys",
		longTitle:
			"Confined Emergency Intercom System for Instant Communication and Control",
		description:
			"CEISys uses WebRTC for real-time communication and geospatial event tracking during emergencies.",
		image: "/assets/projects/ceisys/0-0.jpg",
		link: "#",
		tags: [
			"pnc",
			"internal",
			"real_time",
			"automation",
			"iot",
			"award",
			"geospatial",
		],
	},
	{
		title: "TopGlove GFIs",
		longTitle: "Glove Former Misalignment Monitoring and Indexing System",
		description:
			"A system to monitor glove former misalignment in real-time, ensuring production quality.",
		image: "/assets/projects/topglove/2-2.jpg",
		link: "#",
		tags: ["pnc", "internal", "real_time", "prototype", "iot"],
	},
] satisfies Project[];

export default function Projects() {
	return (
		<div className="relative w-full h-fit pb-20">
			<EnterTransition className="delay-75" once>
				<h1 className="text-4xl font-extrabold mb-6 uppercase dark:text-white">
					<span className={"text-accent dark:text-primary"}>
						Projects
					</span>
				</h1>
			</EnterTransition>
			<EnterTransition className="delay-150 mb-8" once>
				<p className="leading-7 text-justify">
					Every project is a chance to solve real-world problems and
					bring ideas to life. Here are some of the most exciting and
					impactful projects I’ve worked on, where I got to push
					boundaries, explore new technologies, and deliver meaningful
					solutions.
				</p>
			</EnterTransition>
			<TooltipProvider>
				<div className="grid grid-cols-1 gap-2">
					{projects.map((project, index) => (
						<EnterTransition once key={"project-" + index}>
							<ProjectCard project={project} />
						</EnterTransition>
					))}
				</div>
			</TooltipProvider>
			<EnterTransition
				className="absolute bottom-0 left-0 w-full flex justify-center delay-300"
				once
			>
				<span className="text-xs text-foreground">
					* Most of these projects were built for private networks or
					proprietary use, so public links aren’t available. However,
					I’d be happy to discuss the technical details and challenges
					I tackled!
				</span>
			</EnterTransition>
			<ProjectDetails />
		</div>
	);
}
