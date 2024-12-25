import AboutMe from "./components/AboutMe";
import Avatar from "./components/Avatar";

export default function About() {
	return (
		<div className="relative h-[100vh] pt-32 w-full grid grid-cols-12 gap-18 border-b-4 border-primary overflow-hidden">
			<AboutMe className="w-full col-span-6" />
			<div className="col-span-6 h-full w-full flex justify-center items-end">
				<Avatar className="w-[388px] h-[664px]" />
			</div>
		</div>
	);
}
