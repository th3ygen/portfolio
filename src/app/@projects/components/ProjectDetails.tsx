"use client";

function Overlay() {
	return (
		<div className="absolute top-0 left-0 w-full h-full  bg-black/50"></div>
	);
}

export default function ProjectDetails() {

	return (
		<div className="fixed top-0 left-0 w-[100vw] h-[100vh] z-[100]">
			<Overlay />
			<div className="relative z-10">content</div>
		</div>
	);
}
