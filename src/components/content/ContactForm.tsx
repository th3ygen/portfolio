"use client";

import { FaEnvelope, FaPhoneAlt, FaSearchLocation } from "react-icons/fa";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import React from "react";
import EnterTransition from "../motion/EnterTransition";
import ContactCard from "./ContactCard";
import { useToast } from "@/hooks/use-toast";
import type { ContactCardType } from "contact";
import { useRouter } from "next/navigation";

const ACCESS_KEY: string = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

const RANDOM_TOASTS = [
	"Let's hope this email doesn't get lost in the void 💀💀",
	"I'll find this email even in my spam folder, I promise 🤞🤞",
	"This email will find me well",
	"Your message has been bottled and thrown into the digital ocean 🍾🌊",
	"The pegion has been sent, now we wait 🐦🕰️",
	"The mailman has been dispatched 📬🏃",
	"Your 0 and 1s have been sent 📨📨",
];

type ContactFormProps = {
	phone: ContactCardType;
	email: ContactCardType;
	area: ContactCardType;
};

export default function ContactForm({ phone, email, area }: ContactFormProps) {
	const router = useRouter();
	const { toast } = useToast();

	const sleep = (ms: number) =>
		new Promise((resolve) => setTimeout(resolve, ms));

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
			const rnd = Math.floor(Math.random() * RANDOM_TOASTS.length);
			toast({
				title: "Great!",
				description: RANDOM_TOASTS[rnd],
			});

			await sleep(5000);

			router.refresh();
		}
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="grid lg:grid-cols-3 gap-4 px-8 lg:px-0"
		>
			<div className="flex lg:hidden col-span-1 w-full flex-col justify-center gap-4">
				<EnterTransition once className="delay-100" direction="left">
					<ContactCard
						title="Phone"
						icon={<FaPhoneAlt size={20} />}
						link={phone.link || "#"}
					>
						{phone.content}
					</ContactCard>
				</EnterTransition>
				<EnterTransition once className="delay-300" direction="left">
					<ContactCard
						title="Email"
						icon={<FaEnvelope size={20} />}
						link={email.link || "#"}
					>
						{email.content}
					</ContactCard>
				</EnterTransition>
				<EnterTransition once className="delay-500" direction="left">
					<ContactCard
						title="Area"
						icon={<FaSearchLocation size={20} />}
						link={area.link || "#"}
					>
						{area.content}
					</ContactCard>
				</EnterTransition>
			</div>
			<div className="relative grid lg:col-span-2 gap-4 border-2 border-accent/20 rounded-md py-10 px-8 lg:pl-10 lg:pr-40">
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
			<div className="hidden lg:flex col-span-1 w-full -translate-x-28 flex-col justify-center gap-4">
				<EnterTransition once className="delay-100" direction="left">
					<ContactCard
						title="Phone"
						icon={<FaPhoneAlt size={20} />}
						link={phone.link || "#"}
					>
						{phone.content}
					</ContactCard>
				</EnterTransition>
				<EnterTransition once className="delay-300" direction="left">
					<ContactCard
						title="Email"
						icon={<FaEnvelope size={20} />}
						link={email.link || "#"}
					>
						{email.content}
					</ContactCard>
				</EnterTransition>
				<EnterTransition once className="delay-500" direction="left">
					<ContactCard
						title="Area"
						icon={<FaSearchLocation size={20} />}
						link={area.link || "#"}
					>
						{area.content}
					</ContactCard>
				</EnterTransition>
			</div>
		</form>
	);
}
