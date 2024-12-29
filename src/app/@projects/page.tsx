import EnterTransition from "@/components/motion/EnterTransition";
import type { Project } from "./components/ProjectCard";
import ProjectCard from "./components/ProjectCard";

const projects = [
	{
		title: "CAM Kenderaan",
		longTitle: "Secure Vehicle Telemetry and Geospatial Data Blackbox",
		description:
			"Ever wondered how vehicles stay secure while on the move? CAM Kenderaan is the ultimate solution, built to keep track of vehicle telemetry with the precision of CAN bus protocols and GPS/IMU sensors. Working with Cyber Security Malaysia, I crafted a secure, geospatial blackbox for real-time data integrity. From decoding CAN bus signals to generating dynamic PDFs, this project is all about making sure data doesn’t just flow—it’s safe, actionable, and useful.",
		image: "",
		link: "#",
	},
	{
		title: "CAM Muka",
		longTitle: "Real-time Inmates Facial Recognition and People Counting",
		description:
			"Transforming security monitoring at Penjara Kajang, CAM Muka uses cutting-edge facial recognition and real-time people counting to enhance security protocols. Working with Cyber Security Malaysia and others, I designed a powerful tool that streams facial data, tracks individuals, and seamlessly integrates with MyGov*Net. Real-time alerts and data analytics ensure a smooth, efficient system to monitor and report on facility activity.",
		image: "",
		link: "#",
	},
	{
		title: "UMPSA IBMS Hub",
		longTitle: "Centralized UMPSA IBMS Navigation and Management System",
		description:
			"Imagine managing an entire building's system at the click of a button. The UMPSA IBMS Hub does just that, centralizing building management systems to make it easier to monitor and maintain infrastructure. As a full-stack developer, I developed real-time monitoring features, third-party authentication, and integrated Telegram/WhatsApp notifications for seamless, automated communication between systems and staff. Efficiency at its finest!",
		image: "",
		link: "#",
	},
	{
		title: "CERDAS",
		longTitle:
			"Centralized Emergency Response & Disaster Assistance System",
		description:
			"When emergencies happen, response time is critical. CERDAS is a life-saving system built to manage and respond to disasters in real time. I led the charge on integrating WebRTC video conferencing for instant communication, while also using MQTT to provide real-time data updates. The result? A platform that centralizes emergency efforts, making coordination smoother, faster, and more effective.",
		image: "",
		link: "#",
	},
	{
		title: "IoT Pond Monitor",
		longTitle: "Real-time Fish Pond Water Quality Monitoring System",
		description:
			"Monitoring water quality in fish ponds just got easier with this real-time system developed for the Department of Fisheries. With Recharts for intuitive data visualizations, I built an application that brings water quality insights straight to the user, turning data into decisions. From managing static content to generating CSV reports on demand, this platform makes fish farming more data-driven and efficient.",
		image: "",
		link: "#",
	},
	{
		title: "Piping Calc. Tools",
		longTitle:
			"ISO 24817-Compliant Piping Material and Repair Calculation Engine ",
		description:
			"Safety in piping systems is non-negotiable, and this ISO 24817-compliant calculation engine is designed to ensure just that. I worked on creating a dynamic engine with version-controlled formulas for precise calculations. The engine integrates Excel-based tools and real-time approval workflows, helping users handle critical piping material and repair calculations with speed and confidence, all while ensuring compliance with international standards.",
		image: "",
		link: "#",
	},
	{
		title: "Poly-Dash",
		longTitle:
			"Real-time Polymer Production Rate Classification and Prediction System",
		description:
			"In the world of polymer production, precision is key. This system, developed for Kaneka Corporation, uses real-time AI-driven predictions to classify polymer production rates. I integrated TensorFlow.js for accurate predictions and used WebSocket for seamless, real-time data streaming. The result is a system that not only predicts production rates but also provides visual insights into production performance, optimizing efficiency in the process.",
		image: "",
		link: "#",
	},
	{
		title: "C/D-SOVA",
		longTitle: "CCTV and Drone-based Safety Outfit Verification and Alert",
		description:
			"When it comes to workplace safety, ensuring personal protective equipment (PPE) compliance is essential. This project for Kaneka Corporation takes a tech-driven approach, using drones and CCTV feeds to monitor worker compliance in real time. With AI predictions streaming directly to the platform and dynamic routing for image sources, it’s all about making workplaces safer and more efficient. Non-compliant workers are immediately flagged, ensuring that safety standards are upheld at all times.",
		image: "",
		link: "#",
	},
	{
		title: "GajahSafe",
		longTitle: "Elephant Intrusion Detection & Deterrence System",
		description:
			"In Malaysia, human-elephant conflicts are a real problem. That's where GajahSafe comes in. This system, developed for KPKM and Satok Bridge Digital Sdn. Bhd., detects and deters elephant intrusions in real time. With geospatial tracking and automated Telegram alerts, it provides immediate intrusion notifications and visualizes alert frequencies. Real-time monitoring and sensor management ensure that the elephants stay safe, and the humans do too.",
		image: "",
		link: "#",
	},
	{
		title: "SIPFOS",
		longTitle: "SASAQUA Intensive Prawn Farming Observation System",
		description:
			"SIPFOS is an advanced water quality monitoring system developed for Serandu Aquaponic System. By integrating IoT devices and real-time data visualization, I built a platform that allows continuous monitoring of water quality in prawn ponds. With Telegram notifications for device activity and dynamic CSV reports, this system ensures that water conditions are always optimal for healthy prawn farming.",
		image: "",
		link: "#",
	},
	{
		title: "Fugentutor",
		longTitle:
			"Home Tutor Recruitment Platform with Secure Payment Integration",
		description:
			"Fugentutor is a powerful platform designed to connect tutors with students. I led the development of this secure, dynamic platform where users can create detailed profiles, post jobs, and apply for tutoring sessions. The system includes OAuth-based login, two-party approval, and integrated Stripe payments, ensuring seamless tutor-student interactions. Additionally, I implemented a secure refund approval system and automated notifications for a smooth user experience.",
		image: "",
		link: "#",
	},
	{
		title: "Ai-VIGS",
		longTitle: "AI-based Vegetable Inspection for Growth Stages",
		description:
			"This innovative system, developed for JustGood and UMPSA, allows for the real-time tracking of hydroponic vegetable growth. Using accurate x-y mapping and detailed analysis tools, the platform monitors growth stages and estimates crop yields. I integrated live data updates and exportable reports, enabling users to track trends and make data-driven decisions to improve vegetable yield.",
		image: "",
		link: "#",
	},
	{
		title: "CEISys",
		longTitle:
			"Confined Emergency Intercom System for Instant Communication and Control",
		description:
			"CEISys is a critical system designed to improve emergency communication in confined spaces. I built this solution for DiTec and UMPSA using WebRTC for real-time video and audio streaming over a private network. The system includes a map-based event notification feature, centralized emergency control, and a Telegram bot for instant alerts. It's designed to provide immediate access to vital information during emergencies.",
		image: "",
		link: "#",
	},
	{
		title: "TopGlove GFIs",
		longTitle: "Glove Former Misalignment Monitoring and Indexing System",
		description:
			"For TopGlove Bhd., I developed a monitoring system to track the performance of latex glove formers. Using infra-red proximity sensors, I calculated yaw and pitch to monitor misalignment, providing real-time visualization of the formers’ positions. The system also features a dynamic CSV and Excel document generation tool for easy data tracking and reporting, ensuring production quality is maintained.",
		image: "",
		link: "#",
	},
] satisfies Project[];

export default function Projects() {
	return (
		<div className="relative w-full h-[100vh]">
			<EnterTransition className="delay-75" once>
				<h1 className="text-4xl font-extrabold mb-6 uppercase dark:text-white">
					<span className={"text-accent dark:text-primary"}>
						Projects
					</span>
				</h1>
			</EnterTransition>
			<EnterTransition className="delay-150 mb-8" once>
				<p className="leading-7">
					Every project is a chance to solve real-world problems and
					bring ideas to life. Here are some of the most exciting and
					impactful projects I’ve worked on, where I got to push
					boundaries, explore new technologies, and deliver meaningful
					solutions.
				</p>
			</EnterTransition>
			<div className="grid grid-col-3">
				{projects.map((project, index) => (
					<EnterTransition once key={"project-" + index}>
						<ProjectCard project={project} />
					</EnterTransition>
				))}
			</div>
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
		</div>
	);
}
