"use client";

import { BsTwitterX } from "react-icons/bs";
import ContactButton from "./ContactButton";
import Logo from "./Logo";
import {
	FaDev,
	FaEnvelope,
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaStackOverflow,
} from "react-icons/fa";
const contactLinks = [
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
const generateContacts = () => {
	return contactLinks.map((contact, index) => (
		<ContactButton key={index} link={contact.link}>
			{contact.icon}
		</ContactButton>
	));
};

export default function Footer() {
	return (
		<div className="relative w-full h-fit gap-4 py-2 mb-2 flex flex-col justify-end items-center text-xs bg-gradient-to-b to-80% from-transparent to-background z-40">
			<div>
				<Logo />
			</div>
			<div className="flex gap-2 items-center">{generateContacts()}</div>
			<div className="flex gap-1 items-center">
				<div className="">
					Designed and developed by Aidil Syazwan 🗿
				</div>
				<div>All rights reserved &copy; {new Date().getFullYear()}</div>
			</div>
		</div>
	);
}
