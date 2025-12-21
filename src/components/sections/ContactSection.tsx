import { SocialLinks } from "@/components/shared/SocialLinks";
import { Button } from "@/components/ui/button";

interface ContactSectionProps {
	title: string;
	description: string;
	primaryCta: { label: string; href: string };
	secondaryCta?: { label: string; href: string };
	socials: Array<{ type: "linkedin" | "github" | "email"; href: string }>;
	footerName: string;
}

export function ContactSection({
	title,
	description,
	primaryCta,
	secondaryCta,
	socials,
	footerName,
}: ContactSectionProps) {
	return (
		<section className="h-screen flex items-center justify-center bg-background snap-start relative overflow-hidden">
			<div
				className="absolute inset-0"
				style={{
					background:
						"radial-gradient(circle at 50% 50%, rgba(14,165,233,0.15), transparent 60%)",
				}}
			/>
			<div className="container mx-auto px-6 relative z-10">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground text-balance">
						{title}
					</h2>
					<p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
						{description}
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
						<Button
							size="lg"
							className="bg-primary hover:bg-primary/90 text-slate-950 font-semibold"
							asChild
						>
							<a href={primaryCta.href}>{primaryCta.label}</a>
						</Button>
						{secondaryCta && (
							<Button
								size="lg"
								variant="outline"
								className="border-slate-700 hover:bg-slate-900 bg-transparent"
								asChild
							>
								<a href={secondaryCta.href}>{secondaryCta.label}</a>
							</Button>
						)}
					</div>

					<SocialLinks links={socials} />

					<div className="mt-16 pt-8 border-t border-slate-800">
						<p className="text-sm text-muted-foreground">
							{footerName} © {new Date().getFullYear()} • Portfolio
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
