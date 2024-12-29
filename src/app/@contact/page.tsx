import EnterTransition from "@/components/motion/EnterTransition";

export default function Contact() {
	return (
		<div className="w-full">
			<EnterTransition className="delay-75" once>
				<h1 className="text-4xl font-extrabold mb-6 uppercase dark:text-white">
					<span className={"text-accent dark:text-primary"}>
						Let{"'"}s have a chat ☕
					</span>
				</h1>
			</EnterTransition>
			<EnterTransition className="delay-150 mb-8" once>
				<p className="leading-7">
					Whether you{"'"}re looking to collaborate on a project, have
					a question, or just want to say hi, I{"'"}d love to hear
					from you. Feel free to reach out using the form below or via{" "}
					<a href="mailto:i.dilsyaz1@gmail.com" className="underline text-accent dark:text-primary">email</a>
				</p>
			</EnterTransition>
		</div>
	);
}
