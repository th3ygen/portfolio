import type { Metadata } from "next";
import Topbar from "@/components/Topbar";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";

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
					<Topbar />
					<main className="flex gap-20">
						<div className="relative w-1/3 z-20">{children}</div>
						<div className="w-2/3 pl-32 h-full">
							<section id="about" className="min-h-[100vh]">
								{about}
							</section>
							<section
								id="experiences"
								className="min-h-[100vh] pt-32 mr-40"
							>
								{experiences}
							</section>
							<section
								id="projects"
								className="min-h-[100vh] pt-32 mr-40"
							>
								{projects}
							</section>
							<section
								id="contact"
								className="min-h-[100vh] pt-32 mr-40"
							>
								{contact}
							</section>
						</div>
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
