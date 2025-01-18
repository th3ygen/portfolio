import EnterTransition from "@/components/motion/EnterTransition";
import type { CareerSnapshot } from "career";
import CareerSnapshots from "@/components/content/CareerSnapshots";

const career = [
	{
		role: "Full-stack developer / Founder",
		company: "Ascenity Solutions",
		address: "UMPSA, Pekan, Pahang",
		start: new Date("2023-08-01"),
		banner: "/assets/ascenity-banner.png",
		logo: "/assets/ascenity-logo.png",
		bullets: [
			"Developed CAM Kenderaan, a secure vehicle telemetry system with CAN bus, GPS, IMU sensors, and SHA256 for Cyber Security Malaysia.",
			"Developed UMPSA IBMS Hub using Mapbox GL and Telegram bot API, reducing building system management effort by 30%.",
			"Developed CAM Muka, a real-time facial recognition and people-counting system with MyGov*Net and WebSockets for Penjara Kajang.",
			"Wrote ISO 24817-compliant Piping Defect Calculation Engine for GAPURA.",
			"Developed Polymer Rate and PPE Monitoring systems with TensorFlow.js, achieving 95% prediction accuracy using drones and CCTV feeds.",
			"Designed secure, bandwidth-efficient data pipelines, improving real-time processing latency by 20%.",
			"Provided technical consultations, leading to scalable, maintainable architectures.",
			"Mentored junior developers, conducted code reviews, and introduced coding standards.",
			"Produced detailed project documentation, including SRS, SDD, user manuals, testing documents, and UAT forms.",
		],
	},
	{
		role: "Full-stack developer / Internship",
		company: "Satok Bridge Digital",
		address: "TEGAS Digital Village, Kuching, Sarawak",
		start: new Date("2023-02-01"),
		end: new Date("2023-08-01"),
		banner: "/assets/satok-banner.png",
		logo: "/assets/satok-logo.png",
		bullets: [
			"Collaborated with Satok Bridge Digital on MyHackathon 2nd Cohort, securing RM250k in funding and winning gold medals from CITREx and ITEx.",
			"Contributed to developing a web application for the Elephant Intrusion Detection System, reducing human-elephant conflict at Satok Bridge.",
			"Developed an IoT Water Quality Monitoring System for the Department of Fisheries Malaysia.",
			"Spearheaded the CERDAS project, mentoring interns throughout the development lifecycle.",
			"Mentored and oversaw the development of a biometric-based attendance recording system.",
			"Researched Bluetooth Low Energy (BLE) integration for a medical device measuring glucose levels.",
			"Implemented ThingsBoard for in-house IoT data monitoring at Satok Bridge.",
			"Supervised the BoyakSafe mobile app project (Flutter), ensuring successful delivery.",
			"Developed a Telegram bot script for notifying elephant intrusions and CERDAS emergencies.",
			"Produced project documentation including SRS, SDD, user manuals, and UAT.",
		],
		className: "scale-150",
	},
	{
		role: "Full-stack developer / Founder",
		company: "Ascenity Solutions",
		address: "UMPSA, Pekan, Pahang",
		start: new Date("2022-12-01"),
		end: new Date("2023-02-29"),
		logo: "/assets/ascenity-logo.png",
		banner: "/assets/ascenity-banner.png",
		bullets: [
			"Founded Ascenity Solutions, gaining market traction within 6 months.",
			"Developed a Safety Attire Detection System for Kaneka Corporation, improving workplace compliance.",
			"Built an online Home Tutor Recruitment Platform with Stripe integration for seamless payments and notifications.",
			"Implemented an affiliation system with promo codes, boosting client engagement by 15%.",
			"Designed a secure refund approval workflow, enhancing financial transparency and client trust.",
		],
	},
	{
		role: "Full-stack developer / Research Assistant",
		company: "Universiti Malaysia Pahang Al-Sultan Abdullah",
		address: "Pekan, Pahang",
		start: new Date("2020-01-01"),
		end: new Date("2022-12-01"),
		logo: "/assets/umpsa-logo.png",
		banner: "/assets/umpsa-banner.png",
		bullets: [
			"Led development of CEISys, integrating it with CERDAS to enhance emergency response, winning a Gold Medal at CITREx.",
			"Led the next phase of the Prawn Water Quality Monitoring System project.",
			"Developed a web app for Vegetable Growth Monitoring, with an analytics dashboard and data export features.",
			"Collaborated on IoT-based smart agriculture systems using MQTT for real-time data transfer.",
			"Participated in prototype testing, ensuring optimal real-world functionality.",
			"Produced project documentation including proposals, SRS, and SDD.",
		],
		height: 60,
		width: 60,
		className: "scale-90",
	},
	{
		role: "Full-stack developer / Internship",
		company: "DiTec",
		address: "UMPSA, Pekan, Pahang",
		start: new Date("2019-08-01"),
		end: new Date("2020-01-01"),
		logo: "/assets/umpsa-logo.png",
		banner: "/assets/ditec-banner.png",
		bullets: [
			"Led development of the Confined Emergency Intercom System (CEISys) for web and server.",
			"Led development of the Prawn Water Quality Monitoring System for real-time monitoring and improved prawn yield.",
			"Gathered and analyzed system requirements for the Vegetable Growth Monitoring project.",
			"Designed and tested low-cost sensor integrations for accessible IoT systems in small-scale projects.",
			"Conducted IoT development workshops, sharing best practices and enhancing team skills.",
		],
		height: 60,
		width: 60,
		className: "scale-90",
	},
] satisfies CareerSnapshot[];

export default async function Experiences() {
	return (
		<div className="w-full h-fit">
			<EnterTransition className="delay-75" once>
				<h1 className="text-4xl font-extrabold mb-6 uppercase dark:text-white">
					My Career{" "}
					<span className={"text-accent dark:text-primary"}>
						JOURNEY
					</span>
				</h1>
			</EnterTransition>
			<EnterTransition className="delay-150 mb-8" once>
				<p className="leading-7">
					My journey as a developer has been a mix of challenging
					projects, innovative solutions, and continuous growth.
					Here’s a snapshot of what I’ve built and contributed to over
					the years:
				</p>
			</EnterTransition>

			<EnterTransition className="delay-300" once>
				<CareerSnapshots snapshots={career} />
			</EnterTransition>
		</div>
	);
}
