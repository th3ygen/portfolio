type ContactCardProps = {
	title: string;
	icon: React.ReactNode;
	children: React.ReactNode;
	link: string;
};

export default function ContactCard({
	title,
	icon,
	children,
	link,
}: ContactCardProps) {
	return (
		<a
			href={link}
			target="_blank"
			className="h-fit grid gap-4 bg-background rounded-lg border-secondary/20 border-2 p-4"
		>
			<div className="flex items-center gap-4">
				<div className="dark:text-primary">{icon}</div>
				<div className="text-xl font-bold ">{title}</div>
			</div>
			<div className="text-xs text-accent">{children}</div>
		</a>
	);
}
