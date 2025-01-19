type TechStackItemProps = {
	icon: React.ReactNode;
	name: string;
};

export default function TechStackItem({ icon, name }: TechStackItemProps) {
	return (
		<div className="flex items-center gap-2 text-xs">
			<span className="text-black/80">{icon}</span>
			<span className="text-black/60">{name}</span>
		</div>
	);
}
