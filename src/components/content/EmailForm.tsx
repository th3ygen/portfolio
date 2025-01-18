"use client";

import { FaEnvelope, FaPhoneAlt, FaSearchLocation } from "react-icons/fa";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import React from "react";
import EnterTransition from "../motion/EnterTransition";
import ContactCard from "./ContactCard";

const ACCESS_KEY: string = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

export default function EmailForm() {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	async function handleSubmit(event: any) {
		event.preventDefault();
		const formData = new FormData(event.target);

		formData.append("access_key", ACCESS_KEY);

		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: json,
		});
		const result = await response.json();
		if (result.success) {
			console.log(result);
		}
	}

	return (
		<form onSubmit={handleSubmit} className="grid grid-cols-3 gap-4">
			<div className="relative grid col-span-2 gap-4 border-2 border-accent/20 rounded-md py-10 pl-10 pr-40">
				<div className="grid gap-2">
					<label htmlFor="email" className="text-accent">
						Email
					</label>
					<Input
						type="email"
						name="email"
						className="border-primary/40 bg-background"
					/>
				</div>
				<div className="grid gap-2">
					<label htmlFor="email" className="text-accent">
						Name
					</label>
					<Input
						type="text"
						name="name"
						className="border-primary/40 bg-background"
					/>
				</div>
				<div className="grid gap-2">
					<label htmlFor="message" className="text-accent">
						Message
					</label>
					<Textarea
						name="message"
						className="border-primary/40 bg-background"
					></Textarea>
				</div>
				<Button type="submit">Notify</Button>
				<div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-10"></div>
			</div>
			<div className="w-full -translate-x-28 flex flex-col justify-center gap-4">
				<EnterTransition once className="delay-100" direction="left">
					<ContactCard title="Phone" icon={<FaPhoneAlt size={20} />}>
						<a href="tel:+601136528296">+601136528296</a>
					</ContactCard>
				</EnterTransition>
				<EnterTransition once className="delay-300" direction="left">
					<ContactCard title="Email" icon={<FaEnvelope size={20} />}>
						<a href="mailto:i.dilsyaz1@gmail.com">
							i.dilsyaz1@gmail.com
						</a>
					</ContactCard>
				</EnterTransition>
				<EnterTransition once className="delay-500" direction="left">
					<ContactCard
						title="Area"
						icon={<FaSearchLocation size={20} />}
					>
						I live in Sungai Penchala, Kuala Lumpur
					</ContactCard>
				</EnterTransition>
			</div>
		</form>
	);
}
