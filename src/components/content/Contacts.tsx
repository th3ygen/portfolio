import type { Contact } from "contact";
import Link from "next/link";

type ContactProps = {
	contacts: Contact[];
};

export default function Contacts({ contacts }: ContactProps) {
	return (
		<div className="flex gap-2 items-center">
			{contacts.map((contact, index) => (
				<Link
					key={index}
					href={contact.link || "#"}
					className="flex gap-2 items-center text-xl p-1 dark:text-accent transition duration-300 hover:scale-125 hover:dark:text-primary"
					target="_blank"
				>
					{contact.icon}
				</Link>
			))}
		</div>
	);
}
