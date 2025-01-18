type ContactCardProps = {
	title: string;
	icon: React.ReactNode;
	children: React.ReactNode;
};

export default function ContactCard({
	title,
	icon,
	children,
}: ContactCardProps) {
	return (
		<div className="h-fit grid gap-4 bg-background rounded-lg border-secondary/20 border-2 p-4">
			<div className="flex items-center gap-4">
				<div className="dark:text-primary">{icon}</div>
				<div className="text-xl font-bold ">{title}</div>
			</div>
			<div className="text-xs text-accent">{children}</div>
		</div>
	);
}
