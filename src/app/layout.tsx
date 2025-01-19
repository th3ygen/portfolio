import type { Metadata } from "next";
import Topbar from "@/components/Topbar";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
/* import RockBottom from "@/components/RockBottom"; */

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Muhd. Aidil Syazwan Hamdan",
	description: "Portfolio | CV | Made with effort and ☕",
};

type RootProps = {
	about: React.ReactNode;
	experiences: React.ReactNode;
	projects: React.ReactNode;
	contact: React.ReactNode;
	children: React.ReactNode;
};

export default function RootLayout({
	children,
	about,
	experiences,
	projects,
	contact,
}: Readonly<RootProps>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
				>
					<Topbar className="hidden lg:flex" />
					<TooltipProvider>
						<main className="relative flex flex-col lg:flex-row gap-20 pb-2">
							<div className="relative w-full h-full lg:w-1/3 z-50">
								{children}
							</div>
							<div className="w-full lg:w-2/3 pl-32 h-full">
								<section id="about" className="min-h-[100vh]">
									{about}
								</section>
								<section
									id="experiences"
									className="pt-32 mr-52"
								>
									{experiences}
								</section>
								<section
									id="projects"
									className="pt-32 mr-52 h-fit pb-10"
								>
									{projects}
								</section>
								<section id="contact" className="pt-32 mr-52">
									{contact}
								</section>
								 <section id="footer" className="mr-52 pt-20">
									<Footer />
								</section>
							</div>
						</main>
					</TooltipProvider>
					{/* <RockBottom /> */}
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
