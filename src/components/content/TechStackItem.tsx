type TechStackItemProps = {
	icon: React.ReactNode;
	name: string;
};

export default function TechStackItem({ icon, name }: TechStackItemProps) {
	return (
		<div className="flex items-center gap-2 text-xs">
			{icon}
			<span>{name}</span>
		</div>
	);
}
