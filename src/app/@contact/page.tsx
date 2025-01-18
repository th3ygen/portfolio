import ContactForm from "@/components/content/ContactForm";
import EnterTransition from "@/components/motion/EnterTransition";

const contact = {
	phone: {
		link: "tel:+601136528296",
		content: "+6011-3652-8296",
	},
	email: {
		link: "mailto:i.dilsyaz1@gmail.com",
		content: "i.dilsyaz1@gmail.com",
	},
	area: {
		link: "https://maps.app.goo.gl/1rd5KwZcao7BAcit6",
		content: "Sungai Penchala, Kuala Lumpur, Malaysia",
	},
};

export default async function Contact() {
	return (
		<div className="min-h-[70vh] w-full">
			<h1 className="text-7xl mb-6 uppercase flex-col">
				<EnterTransition
					className="delay-150"
					once
					direction="left"
					amount="all"
				>
					Let{"'"}s build something
				</EnterTransition>

				<EnterTransition
					once
					direction="right"
					amount="all"
					className={"delay-150 font-extrabold dark:text-primary"}
				>
					great together
				</EnterTransition>
			</h1>
			<EnterTransition
				className="delay-300 mb-4"
				once
				direction="right"
				amount="all"
			>
				<p className="leading-7">
					Whether you{"'"}re looking to collaborate on a project, have
					a question, or just want to say hi, I{"'"}d love to hear
					from you.
				</p>
			</EnterTransition>
			<EnterTransition className="delay-225 mb-4" once>
				<ContactForm {...contact} />
			</EnterTransition>
		</div>
	);
}
