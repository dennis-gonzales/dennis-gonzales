import { TechBadges } from "@/components/shared/TechBadges";
import { Badge } from "@/components/ui/badge";

type Screenshot = {
	src: string;
	alt: string;
	label: string;
};

export function AppShowcaseSection({
	variant,
	gradientPosition = "50% 50%",
	category,
	title,
	description,
	screenshots,
	technologies,
}: {
	variant: "light" | "dark";
	gradientPosition?: string;
	category: string;
	title: string;
	description: string;
	screenshots: Screenshot[];
	technologies: string[];
}) {
	const gradientOpacity = variant === "dark" ? "0.1" : "0.08";

	return (
		<section
			className="h-screen flex items-center justify-center bg-background snap-start relative overflow-hidden"
			data-theme={variant}
		>
			<div
				className="absolute inset-0"
				style={{
					background: `radial-gradient(circle at ${gradientPosition}, rgba(14,165,233,${gradientOpacity}), transparent 50%)`,
				}}
			/>
			<div className="container mx-auto px-6 relative z-10">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-12">
						<Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
							{category}
						</Badge>

						<h2 className="text-5xl font-bold mb-6 text-foreground">{title}</h2>
						<p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
							{description}
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
						{screenshots.map((screenshot) => (
							<div key={screenshot.label} className="text-center">
								<div className="aspect-9/16 rounded-2xl overflow-hidden border border-border bg-card mb-4 mx-auto max-w-50">
									<img
										src={screenshot.src}
										alt={screenshot.alt}
										className="w-full h-full object-cover"
									/>
								</div>
								<p className="font-medium text-foreground">
									{screenshot.label}
								</p>
							</div>
						))}
					</div>

					<TechBadges
						technologies={technologies}
						variant={variant}
						className="justify-center"
					/>
				</div>
			</div>
		</section>
	);
}
