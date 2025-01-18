import Link from "next/link";

type ContactButtonProps = {
	link: string;
	children: React.ReactNode;
};

export default function ContactButton({ link, children }: ContactButtonProps) {
	return (
		<Link
			href={link}
			className="flex gap-2 items-center text-xl p-1 dark:text-accent transition duration-300 hover:scale-125 hover:dark:text-primary"
			target="_blank"
		>
			{children}
		</Link>
	);
}
