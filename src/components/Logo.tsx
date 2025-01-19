export default function Logo() {
	return (
		<div className="flex items-center space-x-1 font-mono text-2xl font-bold z-[999]">
			<span className="text-blue-800 ">{"<"}</span>
			<span className="dark:text-primary">Dil</span>
			<span className="text-blue-800 pl-1">{"/>"}</span>
		</div>
	);
}
