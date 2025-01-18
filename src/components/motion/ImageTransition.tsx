"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Photo } from "project";

export default function ImageTransition({
    photo,
    className = "",
    onReady = () => {},
}: {
    photo: Photo;
    className?: string;
    onReady?: () => void;
}) {
    const handleLoad = (image: HTMLImageElement) => {
        image.classList.add("opacity-100");
        onReady();
    };

    return (
        <Image
            className={cn("duration-500 opacity-0", className)}
            alt={photo.caption}
            src={photo.path}
            height={500}
            width={500}
            onLoadingComplete={(image) => handleLoad(image)}
        />
    );
}