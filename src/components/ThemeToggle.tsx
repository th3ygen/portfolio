"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	if (!isMounted) return <Button className="px-6"></Button>;

	return (
		<Button onClick={toggleTheme}>
			{theme === "dark" ? <FaMoon /> : <FaSun />}
		</Button>
	);
}
