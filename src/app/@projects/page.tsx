import EnterTransition from "@/components/motion/EnterTransition";

export default function Projects() {
	return (
		<div className="w-full">
			<EnterTransition className="delay-75" once>
				<h1 className="text-4xl font-extrabold mb-6 uppercase dark:text-white">
					<span className={"text-accent dark:text-primary"}>
						Projects
					</span>
				</h1>
			</EnterTransition>
			<EnterTransition className="delay-150 mb-8" once>
				<p className="leading-7">
					Every project is a chance to solve real-world problems and
					bring ideas to life. Here are some of the most exciting and
					impactful projects I’ve worked on, where I got to push
					boundaries, explore new technologies, and deliver meaningful
					solutions.
				</p>
			</EnterTransition>
		</div>
	);
}
