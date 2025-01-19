import Hero from "@/components/Hero";

export default async function Aside() {
	return (
		<div className="lg:fixed lg:top-0 lg:left-0 h-[100vh] w-full flex items-center justify-center lg:justify-start">
			<Hero />
		</div>
	);
}
