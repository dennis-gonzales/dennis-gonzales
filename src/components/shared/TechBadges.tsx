import { Badge } from "@/components/ui/badge";

interface TechBadgesProps {
	technologies: string[];
	variant?: "light" | "dark";
	className?: string;
}

export function TechBadges({
	technologies,
	variant = "dark",
	className = "",
}: TechBadgesProps) {
	const badgeClassName =
		variant === "dark"
			? "bg-slate-800 text-foreground"
			: "bg-slate-100 text-slate-900";

	return (
		<div className={`flex flex-wrap gap-2 ${className}`}>
			{technologies.map((tech) => (
				<Badge key={tech} variant="secondary" className={badgeClassName}>
					{tech}
				</Badge>
			))}
		</div>
	);
}
