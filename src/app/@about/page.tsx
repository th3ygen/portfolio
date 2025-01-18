import { DiPostgresql } from "react-icons/di";

import {
	TbBrandMongodb,
	TbBrandPrisma,
	TbBrandTypescript,
} from "react-icons/tb";
import AboutMe from "@/components/content/AboutMe";
import Avatar from "@/components/content/Avatar";
import {
	RiJavascriptLine,
	RiNextjsLine,
	RiNodejsLine,
	RiPagesLine,
	RiReactjsLine,
} from "react-icons/ri";
import {
	SiArduino,
	SiBluetooth,
	SiChakraui,
	SiCss3,
	SiDatabricks,
	SiDocker,
	SiExpress,
	SiFramer,
	SiGit,
	SiGithub,
	SiGithubactions,
	SiGitlab,
	SiGraphql,
	SiHtml5,
	SiInsomnia,
	SiJsonwebtokens,
	SiLeaflet,
	SiMapbox,
	SiMongodb,
	SiMqtt,
	SiNginx,
	SiPm2,
	SiPostgresql,
	SiPostman,
	SiPrisma,
	SiRaspberrypi,
	SiRedux,
	SiShadcnui,
	SiSocketdotio,
	SiStripe,
	SiSwr,
	SiTailwindcss,
	SiTelegram,
	SiTensorflow,
	SiTrello,
	SiVercel,
	SiWebrtc,
	SiZod,
} from "react-icons/si";
import { GiBearFace } from "react-icons/gi";
import { ImEvil } from "react-icons/im";
import { BsShieldLockFill } from "react-icons/bs";
import { TbBinary } from "react-icons/tb";
import {
	FaAws,
	FaCar,
	FaChartArea,
	FaDatabase,
	FaEnvelope,
	FaEye,
	FaFileExcel,
	FaGlobe,
	FaLock,
	FaPlug,
	FaTable,
	FaUsers,
	FaVideo,
} from "react-icons/fa";
import type { ToolKit } from "toolkit";

const toolkit: ToolKit = {
	col1: [
		{
			name: "Next.js",
			icon: <RiNextjsLine size="24" />,
			link: "https://nextjs.org/",
		},
		{
			name: "React",
			icon: <RiReactjsLine size="24" />,
			link: "https://reactjs.org/",
		},
		{
			name: "JavaScript (ES6+)",
			icon: <RiJavascriptLine size="24" />,
			link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
		},
		{
			name: "TypeScript",
			icon: <TbBrandTypescript size="24" />,
			link: "https://www.typescriptlang.org/",
		},
	],
	col2: [
		{
			name: "Node.js",
			icon: <RiNodejsLine size="24" />,
			link: "https://nodejs.org/",
		},
		{
			name: "Prisma",
			icon: <TbBrandPrisma size="24" />,
			link: "https://www.prisma.io/",
		},
		{
			name: "PostgreSQL",
			icon: <DiPostgresql size="24" />,
			link: "https://www.postgresql.org/",
		},
		{
			name: "MongoDB",
			icon: <TbBrandMongodb size="24" />,
			link: "https://www.mongodb.com/",
		},
	],
	frontend: [
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
	],
	backend: [
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
	],
	realtimeSystems: [
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
	],
	dataAnalytics: [
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
	],
	devOps: [
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
	],
	tools: [
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
	],
	webSecurity: [
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
	],
	misc: [
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
	],
};

export default async function About() {
	return (
		<div className="relative h-[100vh] pt-32 w-full grid grid-cols-12 gap-18 border-b-4 border-primary overflow-hidden">
			<AboutMe className="w-full col-span-6" toolkit={toolkit} />
			<div className="col-span-6 h-full w-full flex justify-center items-end">
				<Avatar className="w-[388px] h-[664px]" toolkit={toolkit}/>
			</div>
		</div>
	);
}
