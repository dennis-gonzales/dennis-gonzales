import { useCallback, useEffect, useState } from "react";

/**
 * Custom hook that tracks the currently visible section based on scroll position.
 * Uses the middle of the viewport as the reference point for determining which section is active.
 *
 * @param selector - CSS selector for the sections to track (default: "section")
 * @returns Object containing activeSection index and scrollToSection function
 */
export function useActiveSection(selector: string = "section") {
	const [activeSection, setActiveSection] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY + window.innerHeight / 2;
			const sections = document.querySelectorAll(selector);

			sections.forEach((section, index) => {
				const element = section as HTMLElement;
				const sectionTop = element.offsetTop;
				const sectionBottom = sectionTop + element.offsetHeight;

				if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
					setActiveSection(index);
				}
			});
		};

		// Call handler once on mount to set initial active section
		handleScroll();

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [selector]);

	const scrollToSection = useCallback(
		(index: number) => {
			const sections = document.querySelectorAll(selector);
			sections[index]?.scrollIntoView({ behavior: "smooth" });
		},
		[selector],
	);

	return { activeSection, scrollToSection };
}
