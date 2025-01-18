import Hero from "@/components/Hero";

export default async function Aside() {
	return (
		<div className="fixed top-0 left-0 h-[100vh] w-fit flex items-center">
			<Hero />
		</div>
	);
}
