import { TechBadges } from "@/components/shared/TechBadges";
import { Badge } from "@/components/ui/badge";

interface Feature {
	icon: string;
	title: string;
	description: string;
}

interface FeatureCardSectionProps {
	variant: "light" | "dark";
	gradientPosition?: string;
	category: string;
	title: string;
	description: string;
	features: Feature[];
	technologies: string[];
}

export function FeatureCardSection({
	variant,
	gradientPosition = "50% 50%",
	category,
	title,
	description,
	features,
	technologies,
}: FeatureCardSectionProps) {
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
				<div className="max-w-5xl mx-auto">
					<Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
						{category}
					</Badge>
					<h2 className="text-5xl font-bold mb-6 text-foreground">{title}</h2>
					<p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl">
						{description}
					</p>

					<div className="grid md:grid-cols-3 gap-6">
						{features.map((feature) => (
							<div
								key={feature.title}
								className="bg-foreground/5 backdrop-blur border border-foreground/5 rounded-xl p-6"
							>
								<div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
									<span className="text-primary text-2xl">{feature.icon}</span>
								</div>
								<h3 className="text-xl font-semibold mb-2 text-foreground">
									{feature.title}
								</h3>
								<p className="text-muted-foreground">{feature.description}</p>
							</div>
						))}
					</div>

					<div className="mt-8">
						<TechBadges technologies={technologies} variant={variant} />
					</div>
				</div>
			</div>
		</section>
	);
}
