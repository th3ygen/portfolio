import EnterTransition from "@/components/motion/EnterTransition";
import type { Project, Client as ProjectClient } from "project";
import ProjectCard from "@/components/content/ProjectCard";
import ProjectDetails from "@/components/content/ProjectDetails";

const client: Record<string, ProjectClient> = {
	csm: {
		link: "https://www.cybersecurity.my/",
		logo: {
			src: "/assets/clients/csm.png",
			width: 180,
			height: 60,
		},
		name: "Cyber Security Malaysia",
		shortName: "CSM",
	},
	penjara: {
		link: "https://www.prison.gov.my",
		logo: {
			src: "/assets/clients/penjara.png",
			width: 60,
			height: 60,
		},
		name: "Penjara Kajang",
		shortName: "Penjara Kajang",
	},
	umpsa: {
		link: "https://www.umpsa.edu.my/",
		logo: {
			src: "/assets/clients/umpsa.png",
			width: 80,
			height: 60,
		},
		name: "Universiti Malaysia Pahang Al-sultan Abdullah",
		shortName: "UMPSA",
	},
	ditec: {
		link: "https://ditec.umpsa.edu.my/",
		logo: {
			src: "/assets/clients/umpsa.png",
			width: 80,
			height: 60,
		},
		name: "Centre for Digital Technology",
		shortName: "DiTec",
	},
	dof: {
		link: "https://www.dof.gov.my/",
		logo: {
			src: "/assets/clients/dof.webp",
			width: 60,
			height: 60,
		},
		name: "Department of Fisheries Malaysia",
		shortName: "DoF",
	},
	satok: {
		link: "https://satok-bridge.com/",
		logo: {
			src: "/assets/clients/satok.png",
			width: 60,
			height: 60,
		},
		name: "Satok Bridge Digital Sdn. Bhd.",
		shortName: "SBD",
	},
	gapura: {
		link: "https://www.gapura.com.my",
		logo: {
			src: "/assets/clients/gapura.png",
			width: 60,
			height: 60,
		},
		name: "Gapura Solution Sdn. Bhd.",
		shortName: "Gapura",
	},
	kaneka: {
		link: "https://www.kaneka.com.my/",
		logo: {
			src: "/assets/clients/kaneka.png",
			width: 100,
			height: 60,
		},
		name: "Kaneka Corporation",
		shortName: "Kaneka",
	},
	fugen: {
		link: "https://fugenlegacy.com/",
		logo: {
			src: "/assets/clients/fugen.png",
			width: 120,
			height: 100,
		},
		name: "Fugen Legacy",
		shortName: "Fugen",
	},
	kpkm: {
		link: "https://www.kpkm.gov.my/",
		logo: {
			src: "/assets/clients/kpkm.png",
			width: 60,
			height: 60,
		},
		name: "Kolej Profesional Mara Kuala Nerang",
		shortName: "KPKM",
	},
	sasaqua: {
		link: "#",
		logo: {
			src: "/assets/clients/sasaqua.png",
			width: 60,
			height: 60,
		},
		name: "Serandu Aquaponic System",
		shortName: "SAS",
	},
	justgood: {
		link: "https://www.justgood.com.my/",
		logo: {
			src: "/assets/clients/justgood.png",
			width: 100,
			height: 60,
		},
		name: "JustGood",
		shortName: "",
	},
	topglove: {
		link: "https://www.topglove.com/",
		logo: {
			src: "/assets/clients/topglove.png",
			width: 120,
			height: 80,
		},
		name: "Top Glove Corporation Bhd.",
		shortName: "TopGlove",
	},
};

const projects = [
	{
		title: "CAM Kenderaan",
		longTitle: "Secure Vehicle Telemetry and Geospatial Data Blackbox",
		description:
			"CAM Kenderaan ensures vehicle telemetry security using CAN bus protocols and GPS/IMU sensors. Built for Cyber Security Malaysia, this geospatial blackbox offers real-time, secure, and actionable data tracking.",
		longDescription: [
			"CAM Kenderaan revolutionizes vehicle security and data monitoring through an innovative combination of CAN bus protocols, GPS, and IMU sensors. Developed in collaboration with Cyber Security Malaysia and University Malaysia Pahang Al-sultan Abdullah, this project delivers a robust, geospatial-enabled blackbox designed for real-time telemetry tracking and data integrity. The system decodes intricate CAN bus signals to extract critical vehicle metrics, pairing them with precise geolocation data for comprehensive monitoring.",
			"Ensuring end-to-end data integrity, the platform employs cryptographic hashing to secure telemetry data, making it tamper-proof and reliable. Its robust reporting features provide stakeholders with actionable insights into vehicle performance and security metrics. CAM Kenderaan isn’t just a data collection tool; it’s a leap forward in secure, intelligent vehicle management.",
		],
		clients: [client.csm, client.umpsa],
		role: "Full-stack developer",
		technologies:
			"Next.js, React, Typescript/Javascript, Fastify, Node.js, Zustand, Recharts, Next Auth, Prisma, PostgreSQL, Arduino, C++, SHA256, Leaflet, OpenStreetMap",
		highlights:
			"Geospatial telematics visualization, Data serialization and deserialization, Data integrity with SHA256, CAN bus integration, CAN bus decoding using open-source DBC, GPS and IMU sensors, Data analytics and prediction, Dynamic PDF and CSV documents generation",
		image: "/assets/projects/camkender/1-0.jpg",
		gallery: [
			{
				path: "/assets/projects/camkender/0-1.jpg",
				caption: "discussing the beta testing strategy",
				category: "camera",
			},
			{
				path: "/assets/projects/camkender/0-2.jpg",
				caption: "they be watching me cooking",
				category: "camera",
			},
			{
				path: "/assets/projects/camkender/1-0.jpg",
				caption: "",
				category: "ui",
			},
			{
				path: "/assets/projects/camkender/1-1.jpg",
				caption: "",
				category: "ui",
			},
			{
				path: "/assets/projects/camkender/1-2.jpg",
				caption: "",
				category: "ui",
			},
			{
				path: "/assets/projects/camkender/2-0.jpg",
				caption: "hacking them cars",
				category: "camera",
			},
			{
				path: "/assets/projects/camkender/2-1.jpg",
				caption: "more hacking them cars",
				category: "camera",
			},
			{
				path: "/assets/projects/camkender/2-2.jpg",
				caption: "more car hax!",
				category: "camera",
			},
			{
				path: "/assets/projects/camkender/3-0.jpg",
				caption: "nerdge team mates",
				category: "camera",
			},
			{
				path: "/assets/projects/camkender/3-1.jpg",
				caption: "at the CSM digital forensics lab",
				category: "camera",
			},
		],
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
			"CAM Muka transforms security at Penjara Kajang with real-time facial recognition and people counting, integrating seamlessly with bridging network for efficient monitoring and alerts.",
		longDescription: [
			"CAM Muka is an advanced system developed specifically for Penjara Kajang to streamline inmate management using real-time facial recognition and people-counting technologies. The system accurately monitors daily traffic, providing detailed insights into inmate movements and facility utilization.",
			"With its facial recognition capabilities, the platform verifies inmate data in real time, enhancing processes such as hospital admissions and facility transfers. This ensures efficient and secure management of inmate logistics while reducing administrative overhead. CAM Muka delivers a reliable and modern solution tailored to meet the unique needs of Penjara Kajang.",
		],
		clients: [client.csm, client.umpsa, client.penjara],
		role: "Full-stack developer",
		technologies:
			"Next.js, React, Typescript/Javascript, Fastify, Node.js, Zustand, Recharts, Prisma, PostgreSQL, Websocket, Socket.io",
		highlights:
			"Real-time recognition and people counting data analytics and visualizations, Facial recognition image data streaming, Real-time device status updates, Complex network integration (MyGov*Net), Centralized data center over private network, Bandwidth optimization for real-time data throughput, Dynamic PDF and CSV documents generation",
		image: "/assets/projects/cammuka/2-0.jpg",
		gallery: [
			{
				path: "/assets/projects/cammuka/0-0.jpg",
				caption: "site visit with the nerdge team",
				category: "camera",
			},
			{
				path: "/assets/projects/cammuka/0-1.jpg",
				caption: "me and the servers",
				category: "camera",
			},
			{
				path: "/assets/projects/cammuka/1-0.jpg",
				caption: "me again",
				category: "camera",
			},
			{
				path: "/assets/projects/cammuka/2-0.jpg",
				caption: "",
				category: "ui",
			},
		],
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
		longDescription: [
			"The UMPSA IBMS Hub is a centralized platform designed to simplify and optimize building management at Universiti Malaysia Pahang. This system integrates diverse building management functionalities into a single interface, enabling seamless monitoring and maintenance of infrastructure.",
			"Real-time monitoring capabilities provide up-to-the-minute data on critical systems, while third-party authentication ensures secure access for authorized personnel. The platform also features automated Telegram and WhatsApp notifications, enhancing communication and responsiveness. By consolidating key building management operations, the UMPSA IBMS Hub offers an efficient, streamlined solution for managing complex facilities with ease.",
		],
		clients: [client.umpsa, client.ditec],
		role: "Full-stack developer",
		technologies:
			"Next.js, React, Typescript/Javascript, Fastify, Node.js, Zustand, Recharts, Mapbox GL, Prisma, PostgreSQL, Websocket, Telegram Bot API",
		highlights:
			"Real-time IBMS server status monitoring and update, Third-party auth service integration, Automated notification system using Telegram and WhatsApp API, User and server activity logging",
		image: "/assets/projects/umpsahub/0-0.jpg",
		gallery: [
			{
				path: "/assets/projects/umpsahub/0-0.jpg",
				caption: "",
				category: "ui",
			},
		],
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
		longDescription: [
			"CERDAS is an advanced system designed to streamline emergency response and disaster management. This platform centralizes critical information to ensure quick, efficient coordination during crises. By integrating WebRTC video conferencing, it facilitates instant communication between emergency teams, while MQTT ensures real-time data updates across the system.",
			"The platform provides real-time alerts, geospatial mapping, and a comprehensive overview of emergency efforts, enabling faster decision-making and more effective responses. CERDAS not only enhances communication but also optimizes the management of resources and personnel during high-pressure situations, improving overall disaster response outcomes.",
		],
		clients: [client.umpsa, client.ditec],
		role: "Full-stack developer",
		technologies:
			"Next.js, React, Typescript/Javascript, Fastify, Node.js, Redux, Recharts, Prisma, PostgreSQL, WebRTC, Websocket, MQTT",
		highlights:
			"Video conference using WebRTC and Websocket for signaling, Real-time data visualization, MQTT for real-time status update, Real-time communication interface, Role-based access control (RBAC), Telegram bot API integration for real-time notification",
		image: "/assets/projects/cerdas/1-1.jpg",
		gallery: [
			{
				path: "/assets/projects/cerdas/0-0.jpg",
				caption: "CEISys",
				category: "camera",
			},
			{
				path: "/assets/projects/cerdas/1-0.jpg",
				caption: "",
				category: "ui",
			},
			{
				path: "/assets/projects/cerdas/1-1.jpg",
				caption: "",
				category: "ui",
			},
			{
				path: "/assets/projects/cerdas/1-2.jpg",
				caption: "",
				category: "ui",
			},
		],
		awards: [
			{
				title: "CITREX 2023",
				medal: "gold",
			},
		],
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
		longDescription: [
			"The IoT Pond Monitor is a real-time water quality monitoring system developed for the Department of Fisheries. This platform enables efficient management of water quality in fish ponds by continuously collecting data from IoT sensors. With intuitive data visualizations powered by Recharts, the system provides actionable insights on parameters such as pH, oxygen levels, and temperature.",
			"The platform supports dynamic report generation in CSV format, helping users track and analyze water conditions over time. By automating data collection and reporting, the IoT Pond Monitor simplifies the monitoring process and ensures that optimal conditions are maintained for healthy fish farming.",
		],
		clients: [client.dof, client.satok],
		role: "Full-stack developer",
		technologies:
			"Next.js, React, Typescript, Node.js, Fastify, Next Auth, Prisma, PostgreSQL, Recharts",
		highlights:
			"Water quality data visualization, Static content management, Real-time data deserialization, Dynamic CSV documents generation",
		image: "/assets/projects/iotpondmonitor/0-1.jpg",
		gallery: [
			{
				path: "/assets/projects/iotpondmonitor/0-0.jpg",
				caption: "",
				category: "ui",
			},
			{
				path: "/assets/projects/iotpondmonitor/0-1.jpg",
				caption: "",
				category: "ui",
			},
		],
		link: "#",
		tags: ["pnc", "internal", "real_time", "automation", "iot"],
	},
	{
		title: "Piping Calc. Tools",
		longTitle: "ISO 24817-Compliant Calculation Engine",
		description:
			"An ISO-compliant engine for precise piping calculations with real-time workflows, ensuring safety and efficiency.",
		longDescription: [
			"The Piping Calc. Tools is a specialized system designed to simulate calculations for piping defect repair materials in compliance with ISO 24817 standards. This tool helps users assess the required materials and methods for repairing piping defects, ensuring that repairs are both safe and efficient.",
			"The platform generates comprehensive, detailed reports essential for repair documentation, including material requirements, repair methods, and safety standards. By integrating version-controlled formulas, it provides precise calculations tailored to each specific defect scenario, making it easier for professionals to plan and execute repairs. With real-time approval workflows, the system ensures that the repair process is efficient and aligned with regulatory standards.",
		],
		clients: [client.gapura, client.umpsa],
		role: "Full-stack developer",
		technologies:
			"Next.js, React, Typescript, Node.js, Fastify, Zustand, Recharts, Framer motion, HyperFormula, FormulaJS, XLSX, Next Auth, Prisma, PostgreSQL",
		highlights:
			"Excel-based dynamic calculation engine, Version-controlled formulas, Custom handler for file load and save, Real-time approval workflow, Role-based access control (RBAC), Dynamic PDF documents generation",
		image: "/assets/projects/gapura/1-0.jpg",
		gallery: [
			{
				path: "/assets/projects/gapura/0-0.jpg",
				caption: "just finished nth meeting with Gapura",
				category: "camera",
			},
			{
				path: "/assets/projects/gapura/1-0.jpg",
				caption: "",
				category: "ui",
			},
		],
		link: "#",
		tags: ["pnc", "internal", "automation", "compliance", "real_time"],
	},
	{
		title: "Fugen Legacy",
		longTitle: "Modern, Responsive Landing Page for Fugen Legacy",
		description:
			"A responsive landing page with SEO optimization, dynamic content editing, and secure hosting for Fugen Legacy.",
		longDescription: [
			"Fugen Legacy is a modern, responsive landing page designed to showcase the company’s profile and vision. The platform is optimized for both desktop and mobile devices, ensuring a seamless user experience across all screen sizes.",
			"Built with a dynamic content management system, the site allows for easy updates and adjustments, keeping the information fresh and relevant. SEO optimization ensures higher visibility in search engine results, while the integration of Nodemailer enables automated contact form submissions for inquiries. The secure and scalable hosting infrastructure guarantees the platform’s reliability and performance, making it a perfect online presence for Fugen Legacy.",
		],
		clients: [client.fugen],
		role: "Full-stack developer",
		technologies:
			"Next.js, React, Node.js, Typescript, Javascript, Express, shadcn, Tailwind CSS. Nodemailer, Zod",
		highlights:
			"Responsive and modern design, detailed company profile and vision showcase, SEO and performance optimization, dynamic content editing, Nodemailer integration for contact form automation, secure and scalable hosting infrastructure, mobile-friendly layout",
		image: "/assets/projects/fugenlegacy/0-0.jpg",
		gallery: [
			{
				path: "/assets/projects/fugenlegacy/0-0.jpg",
				caption: "",
				category: "ui",
			},
			{
				path: "/assets/projects/fugenlegacy/0-1.jpg",
				caption: "",
				category: "ui",
			},
		],
		link: "fugenlegacy.com",
		tags: ["pub", "automation", "cms", "seo", "static"],
	},
	{
		title: "Poly-Dash",
		longTitle:
			"Real-time Polymer Production Rate Classification and Prediction System",
		description:
			"Poly-Dash uses AI to predict polymer production rates in real-time, optimizing performance and efficiency.",
		longDescription: [
			"Poly-Dash is an advanced real-time system developed for Kaneka Corporation to predict and classify polymer production rates with high accuracy. By leveraging TensorFlow.js for AI-driven predictions, the platform enables real-time tracking and forecasting of production data, allowing for smarter decision-making.",
			"The system uses WebSocket for continuous, low-latency data streaming, ensuring that production insights are available instantly. Interactive visualizations provide users with detailed insights into production performance, helping to optimize the manufacturing process and improve efficiency. The result is a robust tool that combines cutting-edge AI technology with real-time data analysis to optimize polymer production operations.",
		],
		clients: [client.kaneka, client.umpsa],
		role: "Full-stack developer",
		technologies:
			"Next.js, React, Typescript, Node.js, Fastify, Tailwind CSS, shadcn, Java ODBC Driver, Websocket, Tensorflow.js",
		highlights:
			"ODBC-Java data extraction using websocket relay, Tensorflow.js Graph model integration, Threshold-based classification, Real-time production rate prediction and data visualization",
		image: "/assets/projects/polydash/0-0.jpg",
		gallery: [
			{
				path: "/assets/projects/polydash/0-0.jpg",
				caption: "",
				category: "ui",
			},
		],
		link: "#",
		tags: ["pnc", "internal", "real_time", "ai_ml"],
	},
	{
		title: "C/D-SOVA",
		longTitle: "CCTV and Drone-based Safety Outfit Verification and Alert",
		description:
			"A safety system leveraging AI and drones to ensure PPE compliance, offering real-time alerts and monitoring.",
		longDescription: [
			"C/D-SOVA is an innovative safety monitoring system developed for Kaneka Corporation to ensure workplace safety by verifying compliance with personal protective equipment (PPE) standards. Using a combination of CCTV and drone technology, the system continuously monitors workers in real-time, analyzing footage for PPE compliance.",
			"With AI-driven predictions, the platform flags non-compliant workers and instantly alerts safety personnel, ensuring that safety standards are met without delay. The system dynamically routes image data from drones and cameras to improve monitoring accuracy. This project streamlines safety enforcement, ensuring that workers adhere to necessary protective measures while also providing valuable data for ongoing safety improvements.",
		],
		clients: [client.kaneka, client.umpsa],
		role: "Full-stack developer",
		technologies:
			"Next.js, React, Typescript, Node.js, Express, Zustand, Framer motion, SWR, Socket.io, Websocket, MQTT, RTMP/RTSP",
		highlights:
			"RTMP and RTSP image streaming over private network, Fine-grained PPE image data annotation, Real-time AI prediction result streaming, Dynamic routing for unique image streaming source, Non-compliance worker image cropping and logging",
		image: "/assets/projects/csova/4-0.jpg",
		gallery: [
			{
				path: "/assets/projects/csova/0-1.jpg",
				caption: "client meeting at Kaneka",
				category: "camera",
			},
			{
				path: "/assets/projects/csova/0-2.jpg",
				caption: "more site visiting",
				category: "camera",
			},
			{
				path: "/assets/projects/csova/1-0.jpg",
				caption: "more system testing",
				category: "camera",
			},
			{
				path: "/assets/projects/csova/2-0.jpg",
				caption: "me with the AI guy at Kaneka",
				category: "camera",
			},
			{
				path: "/assets/projects/csova/2-1.jpg",
				caption: "me with the AI guy again pilotin' the DJI drone",
				category: "camera",
			},
			{
				path: "/assets/projects/csova/3-0.jpg",
				caption: "same team, different site, with the signature pose",
				category: "camera",
			},
		],
		awards: [
			{
				title: "CITREX 2023",
				medal: "gold",
			},
		],
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
		longDescription: [
			"PCASSO is a cutting-edge pellet counting and analysis system developed for Kaneka Corporation and UMPSA, designed to enhance the accuracy and efficiency of pellet-based statistical observations. This system uses dual-camera image streaming to capture detailed pellet data in real-time, while advanced algorithms process the images for precise counting and analysis.",
			"Through the integration of MQTT and WebSocket technologies, PCASSO ensures seamless data transfer and real-time updates, enabling instant analysis. The system also generates dynamic CSV reports, offering users the flexibility to analyze and record pellet data with precision. This project provides an effective solution for high-accuracy statistical observations and significantly enhances data reliability and reporting in industrial environments.",
		],
		clients: [client.kaneka, client.umpsa],
		role: "Full-stack developer",
		technologies:
			"Next.js, React, Node.js, Typescript, Javascript, Express, shadcn, Tailwind CSS, Zustand, Recharts, MQTT, Websocket, Prisma ORM, PostgresSQL",
		highlights:
			"Real-time image-based pellet counter and analysis, Dual-camera image streaming via websocket, Real-time camera-specific image data analysis, Dynamic CSV report generation",
		image: "/assets/projects/pcasso/1-0.jpg",
		gallery: [
			{
				path: "/assets/projects/pcasso/0-0.jpg",
				caption: "in-lab development sneak peek",
				category: "camera",
			},
			{
				path: "/assets/projects/pcasso/1-0.jpg",
				caption: "",
				category: "ui",
			},
			{
				path: "/assets/projects/pcasso/2-0.jpg",
				caption: "at the CITREX 2023 booth",
				category: "camera",
			},
		],
		awards: [
			{
				title: "CITREX 2023",
				medal: "gold",
			},
		],
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
		longDescription: [
			"GajahSafe is an innovative elephant intrusion detection and deterrence system developed to address the growing concern of human-elephant conflicts in Malaysia. The system uses real-time geospatial tracking and advanced sensor technology to monitor and detect elephant movements near human settlements and critical areas.",
			"By integrating automated alerts via Telegram, GajahSafe provides immediate notifications of potential threats, ensuring timely interventions. The system’s ability to visualize alert frequencies on a map offers valuable insights into elephant behavior and patterns, helping wildlife conservationists and local authorities take proactive measures. With real-time monitoring, GajahSafe is a comprehensive solution to mitigate human-elephant conflicts and promote safer cohabitation.",
		],
		clients: [client.satok, client.kpkm, client.umpsa],
		role: "Full-stack developer",
		technologies:
			"Next.js, React, Typescript/Javascript, Tailwind, Node.js, Zod, Zustand, Recharts, Framer motion, Map API, SWR, Next Auth, Prisma, PostgreSQL, MQTT",
		highlights:
			"Real-time elephant intrusion detection and deterrence, Geospatial intrusion alert and frequency visualization, Telegram API integration for intrusion notification, Elephant incident reporting and logging, Intrusion sensors management",
		image: "/assets/projects/gajahsafe/3-0.jpg",
		gallery: [
			{
				path: "/assets/projects/gajahsafe/0-0.jpg",
				caption: "AI guy doing hardware stuff",
				category: "camera",
			},
			{
				path: "/assets/projects/gajahsafe/0-1.jpg",
				caption: "hacking the hardware with the AI guy",
				category: "camera",
			},
			{
				path: "/assets/projects/gajahsafe/0-2.jpg",
				caption:
					"final lab test for GajahSafe device (AI guy getting zesty)",
				category: "camera",
			},
			{
				path: "/assets/projects/gajahsafe/1-0.jpg",
				caption: "same team, different site, with the signature pose",
				category: "camera",
			},
			{
				path: "/assets/projects/gajahsafe/1-1.jpg",
				caption: "system installation at Padang Hijau",
				category: "camera",
			},
			{
				path: "/assets/projects/gajahsafe/1-3.jpg",
				caption: "getting dried under the sun",
				category: "camera",
			},
			{
				path: "/assets/projects/gajahsafe/1-3-0.jpg",
				caption: "",
				category: "camera",
			},
			{
				path: "/assets/projects/gajahsafe/1-4.jpg",
				caption: "touching grass",
				category: "camera",
			},
			{
				path: "/assets/projects/gajahsafe/1-5.jpg",
				caption: "in search for gajah",
				category: "camera",
			},
			{
				path: "/assets/projects/gajahsafe/1-7.jpg",
				caption: "more installations",
				category: "camera",
			},
			{
				path: "/assets/projects/gajahsafe/1-8.jpg",
				caption: "playing with them drones",
				category: "camera",
			},
			{
				path: "/assets/projects/gajahsafe/2-0.jpg",
				caption: "a whole stakeholders meeting",
				category: "camera",
			},
			{
				path: "/assets/projects/gajahsafe/2-1.jpg",
				caption:
					"the big boss presenting the GajahSafe geospatial feature",
				category: "camera",
			},
			{
				path: "/assets/projects/gajahsafe/2-2.jpg",
				caption: "me in the typical dev outfit (post meeting)",
				category: "camera",
			},
			{
				path: "/assets/projects/gajahsafe/4-0.jpg",
				caption: "",
				category: "camera",
			},
			{
				path: "/assets/projects/gajahsafe/4-1.jpg",
				caption: "",
				category: "camera",
			},
		],
		awards: [
			{
				title: "CITREX 2023",
				medal: "gold",
			},
			{
				title: "ITEX 2023",
				medal: "gold",
			},
		],
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
		longDescription: [
			"SIPFOS (SASAQUA Intensive Prawn Farming Observation System) is a cutting-edge water quality monitoring solution designed for the aquaponics industry, specifically tailored for prawn farming. Developed for Serandu Aquaponic System, the platform enables real-time tracking of water conditions in prawn ponds, ensuring optimal environments for healthy prawn growth.",
			"Leveraging IoT sensors, SIPFOS continuously monitors key parameters such as pH, temperature, and oxygen levels. The system then visualizes this data with intuitive charts and sends automated alerts via Telegram if any parameters fall out of the desired range. Additionally, users can generate CSV reports on demand, empowering farm operators to make data-driven decisions for improving water quality and optimizing farming processes. SIPFOS helps ensure sustainability and efficiency in prawn farming through seamless automation and real-time monitoring.",
		],
		clients: [client.sasaqua, client.umpsa],
		role: "Full-stack developer",
		technologies:
			"Next.js, React, Typescript/Javascript, Zod, Node.js, Chart.js, SWR, Next Auth, Prisma, PostgreSQL, MQTT, Arduino",
		highlights:
			"Real-time water quality data visualization, Telegram API integration for real-time notification, Device activity notification, IoT data logging, Static content serving with custom content management, Dynamic CSV document generation",
		image: "/assets/projects/sipfos/2-0.jpg",
		gallery: [
			{
				path: "/assets/projects/sipfos/0-0.jpg",
				caption: "tweaking the device before deployment",
				category: "camera",
			},
			{
				path: "/assets/projects/sipfos/1-0.jpg",
				caption: "at the site, wiring stuff",
				category: "camera",
			},
			{
				path: "/assets/projects/sipfos/1-1.jpg",
				caption: "i'm in! *hacker voice intensifies*",
				category: "camera",
			},
		],
		link: "#",
		tags: ["pnc", "internal", "real_time", "automation", "iot"],
	},
	{
		title: "Fugentutor",
		longTitle:
			"Home Tutor Recruitment Platform with Secure Payment Integration",
		description:
			"Fugentutor connects tutors and students with secure payments, detailed profiles, and automated notifications.",
		longDescription: [
			"Fugentutor is a secure and user-friendly platform designed to connect tutors with students for home tutoring sessions. This dynamic system streamlines the entire tutoring process, allowing users to create detailed profiles, post tutoring jobs, and apply for sessions, all while maintaining a smooth and efficient user experience.",
			"The platform integrates secure payment gateways, including Stripe, to ensure safe transactions, along with OAuth-based login for added security. Additionally, a two-party approval system ensures that both tutors and students confirm their sessions before proceeding. To further enhance user experience, automated notifications and a secure refund approval system are in place. Fugentutor simplifies the tutor recruitment process while ensuring security, ease of use, and reliability, making it a go-to platform for home education needs.",
		],
		clients: [client.fugen],
		role: "Full-stack developer",
		technologies:
			"Next.js, React, Javascript, Chakra UI, Framer motion, Node.js, Stripe, Nodemailer, SWR, NextAuth, Multer, Prisma, PostgreSQL",
		highlights:
			"OAuth-based social account linking and password recovery, User profile and tutor portfolio customization, Parent job posting and tutor application workflows, Two-party approval system with secure payment integration, Affiliate system with promotional code generation and benefit tracking, secure and scalable hosting infrastructure, Automated notification and promotional emails, Secure refund approval workflow, Dynamic file uploads",
		image: "/assets/projects/fugentutor/0-0.jpg",
		gallery: [
			{
				path: "/assets/projects/fugentutor/0-0.jpg",
				caption: "",
				category: "ui",
			},
			{
				path: "/assets/projects/fugentutor/0-1.jpg",
				caption: "",
				category: "ui",
			},
		],
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
		longDescription: [
			"Ai-VIGS is an innovative AI-driven system designed to monitor and track the growth stages of hydroponic vegetables in real-time. Developed for JustGood and UMPSA, the platform leverages precise x-y mapping and detailed analysis tools to provide accurate insights into the growth cycle of vegetables.",
			"The system tracks key metrics, estimates crop yields, and offers live updates on plant health and development. It also enables users to export reports for data-driven decision-making. By providing clear visualizations of growth patterns, Ai-VIGS helps farmers optimize their crop management processes, ensuring healthier yields and more efficient farming practices.",
		],
		clients: [client.justgood, client.umpsa],
		role: "Full-stack developer",
		technologies:
			"React, Node.js, Javascript, Express, Ant Design, Redux, Framer motion, Amcharts, MQTT, Websocket, Mongoose ODM, MongoDB",
		highlights:
			"Real-time vegetable growth stage visualization with accurate x-y proportional mapping on troughs, Data analysis with insights and trends, Exportable data report, Detailed inference logging for growth tracking, Crop yield estimation based on historical data, Live data updates",
		image: "/assets/projects/justgood/0-0.jpg",
		gallery: [
			{
				path: "/assets/projects/justgood/0-1.jpg",
				caption: "me as dev doing dev work",
				category: "camera",
			},
			{
				path: "/assets/projects/justgood/1-0.jpg",
				caption: "more site visit",
				category: "camera",
			},
			{
				path: "/assets/projects/justgood/1-2.jpg",
				caption: "flying the bird for some aerial shots",
				category: "camera",
			},
		],
		link: "#",
		tags: ["pnc", "internal", "real_time", "automation", "ai_ml"],
	},
	{
		title: "CEISys",
		longTitle:
			"Confined Emergency Intercom System for Instant Communication and Control",
		description:
			"CEISys uses WebRTC for real-time communication and geospatial event tracking during emergencies.",
		longDescription: [
			"CEISys is a critical communication solution developed to improve emergency response in confined spaces. Built for DiTec and UMPSA, this system facilitates real-time video and audio communication using WebRTC technology, enabling instant and secure interaction between emergency teams and individuals in distress.",
			"The platform is designed with a map-based notification system that tracks and alerts emergency personnel to critical events, ensuring swift and accurate responses. Additionally, CEISys integrates a Telegram bot for real-time alerts, offering streamlined communication. The system’s robust features ensure quick access to essential information, making it an indispensable tool in high-risk environments.",
		],
		clients: [client.ditec, client.umpsa],
		technologies:
			"React, Node.js, Javascript, Express, WebRTC, Redux, Strapi CMS, Prisma ORM, PostgreSQL, Websocket, Raspberry Pi",
		highlights:
			"Real-time video and audio communication over private network using WebRTC, Low cost IoT device solution, Map-based event notification and alert visualization, Centralized emergency response control, Emergency incident reporting and notification, Telegram bot API implementation",
		role: "Full-stack developer",
		image: "/assets/projects/ceisys/0-0.jpg",
		gallery: [
			{
				path: "/assets/projects/ceisys/1-0.jpg",
				caption: "the typical dev outfit",
				category: "camera",
			},
		],
		awards: [
			{
				title: "CITREX 2023",
				medal: "gold",
			},
		],
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
		longDescription: [
			"TopGlove GFIs is a monitoring system developed to ensure the alignment and performance of latex glove formers during production. By leveraging infrared proximity sensors, the system accurately tracks the yaw and pitch of each former, providing real-time data on their position to prevent misalignment and ensure consistent quality.",
			"The system also features a dynamic reporting tool that generates CSV and Excel documents for easy data tracking and analysis. This allows production teams to quickly identify issues and optimize production processes, ultimately ensuring high-quality standards and minimizing downtime in the manufacturing process.",
		],
		clients: [client.topglove, client.umpsa],
		role: "Full-stack developer",
		technologies:
			"Angular, Node.js, Javascript, Express, NgRx, Chart.js, XLSX, Mongoose ORM, MongoDB, MQTT",
		highlights:
			"Glove former yaw and pitch calculation using Infra-red proximity sensors, Real-time former indexing and angle data visualization, Former misalignment calculation simulation tool, Dynamic CSV and excel sheet document generation",
		image: "/assets/projects/topglove/2-2.jpg",
		gallery: [
			{
				path: "/assets/projects/topglove/0-0.jpg",
				caption: "my everyday view at the old lab",
				category: "camera",
			},
			{
				path: "/assets/projects/topglove/1-0.jpg",
				caption: "had to censor the AI guy face",
				category: "camera",
			},
			{
				path: "/assets/projects/topglove/1-1.jpg",
				caption: "after 2 eternity at the site",
				category: "camera",
			},
			{
				path: "/assets/projects/topglove/1-2.jpg",
				caption:
					"same team, different site, with the original signature pose",
				category: "camera",
			},
		],
		link: "#",
		tags: ["pnc", "internal", "real_time", "prototype", "iot"],
	},
] satisfies Project[];

export default async function Projects() {
	const ProjectCards: React.FC = () => {
		return projects.map((project, index) => (
			<EnterTransition once key={"project-" + index}>
				<ProjectCard project={project} />
			</EnterTransition>
		));
	};

	return (
		<div className="relative w-full p-6 h-fit pb-20">
			<EnterTransition className="delay-75" once>
				<h1 className="text-4xl text-center md:text-left font-extrabold mb-6 uppercase dark:text-white">
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
			<div className="relative flex justify-center items-center w-full h-full overflow-hidden">
				<div className="w-full grid grid-cols-1 gap-y-6 lg:gap-y-4">
					<ProjectCards />
				</div>
				{/* <ProjectExpandable projects={projects} /> */}
			</div>
			<div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-10"></div>

			<EnterTransition
				className="absolute bottom-0 left-0 w-full flex justify-center delay-300"
				once
			>
				<span className="text-xs text-foreground text-center">
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
