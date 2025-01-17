"use client";

import { ContactButton } from "./Hero";
import Logo from "./Logo";
import {
	FaDev,
	FaEnvelope,
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaStackOverflow,
	FaTwitter,
} from "react-icons/fa";

export default function Footer() {
	return (
		<div className="relative w-full h-fit gap-4 py-2 mb-2 flex flex-col justify-end items-center text-xs bg-gradient-to-b to-80% from-transparent to-background z-40">
			<div>
				<Logo />
			</div>
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
			<div className="flex gap-1 items-center">
				<div className="">
					Designed and developed by Aidil Syazwan 🗿
				</div>
				<div>All rights reserved &copy; {new Date().getFullYear()}</div>
			</div>
		</div>
	);
}
