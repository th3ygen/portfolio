"use client";

import ImageTransition from "@/components/motion/ImageTransition";
import { Project } from "project";
import { useState } from "react";
import Slider from "react-slick";

export default function ProjectGallery({ gallery }: Project) {
	const [loadedImgCount, setLoadedImgCount] = useState(0);

	if (!gallery) return null;

	let len = gallery.length;

	if (len === 0) return null;

	const Fallback: React.FC = () => {
		if (loadedImgCount >= len) return;

		return (
			<div className="absolute left-0 top-0 h-full w-full flex items-center justify-center animate-pulse">
				<span>Loading</span>
			</div>
		);
	};

	const SmallGallery = () => {
		if (!gallery || gallery.length === 0) return null;

		return gallery.map((photo) => {
			return (
				<div
					key={photo.path}
					className="relative h-auto w-full flex items-center justify-center py-2"
				>
					<ImageTransition
						photo={photo}
						className="relative w-2/3 object-cover z-10 rounded-lg overflow-hidden"
						onReady={() => setLoadedImgCount((count) => count + 1)}
					/>
				</div>
			);
		});
	};

	if (len < 3) {
		return (
			<div className="relative w-full h-[100vh] pr-20 flex items-center">
				<div className="absolute top-0 left-0 w-full h-[250px] bg-gradient-to-b from-black from-20% to-transparent z-10 pointer-events-none"></div>
				<div className="absolute bottom-0 left-0 w-full h-[250px] bg-gradient-to-t from-black from-20% to-transparent z-10 pointer-events-none"></div>
				<div className="relative w-full h-[80%] items-center justify-center flex flex-col gap-4">
					<Fallback />
					<SmallGallery />
				</div>
			</div>
		);
	}

	let id = 0;

	if (len < 4) {
		gallery = [...gallery, ...gallery];
		len *= 2;
	}

	const LargeGallery: React.FC = () => {
		if (!gallery || gallery.length === 0) return null;

		return gallery.map((photo) => {
			return (
				<div
					key={photo.path + id++}
					className="relative h-auto w-full flex items-center justify-center py-2 delay-500"
				>
					<ImageTransition
						photo={photo}
						className="relative w-full object-cover z-10"
						onReady={() => setLoadedImgCount((count) => count + 1)}
					/>
				</div>
			);
		});
	};

	return (
		<div className="relative w-full h-[100vh] pr-20 grid grid-cols-2 gap-4">
			<div className="absolute top-0 left-0 w-full h-[250px] bg-gradient-to-b from-black from-20% to-transparent z-10 pointer-events-none"></div>
			<div className="absolute bottom-0 left-0 w-full h-[250px] bg-gradient-to-t from-black from-20% to-transparent z-10 pointer-events-none"></div>
			<Fallback />
			<Slider
				className="gap-10 !h-full"
				dots={false}
				vertical
				arrows={false}
				autoplay
				speed={10000}
				autoplaySpeed={3000}
				infinite
				cssEase="cubic-bezier(0.785, 0.135, 0.15, 0.86)"
			>
				<LargeGallery />
			</Slider>
			<Slider
				className="gap-10"
				dots={false}
				vertical
				arrows={false}
				autoplay
				speed={10000}
				autoplaySpeed={3000}
				infinite
				cssEase="cubic-bezier(0.785, 0.135, 0.15, 0.86)"
				rtl
			>
				<LargeGallery />
			</Slider>
		</div>
	);
}
