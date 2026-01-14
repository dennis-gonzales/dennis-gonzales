import { FeatureList } from "@/components/shared/FeatureList";
import { TechBadges } from "@/components/shared/TechBadges";
import { Badge } from "@/components/ui/badge";

interface ProjectSectionProps {
  variant: "light" | "dark";
  gradientPosition?: string;
  imagePosition: "left" | "right";
  category: string;
  title: string;
  description: string;
  featuresTitle: string;
  features: string[];
  technologies: string[];
  image: { src: string; alt: string };
}

export function ProjectSection({
  variant,
  gradientPosition = "50% 50%",
  imagePosition,
  category,
  title,
  description,
  featuresTitle,
  features,
  technologies,
  image,
}: ProjectSectionProps) {
  const gradientOpacity = variant === "dark" ? "0.1" : "0.08";

  const contentBlock = (
    <div className={imagePosition === "left" ? "order-1 lg:order-2" : ""}>
      <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
        {category}
      </Badge>
      <h2 className="text-5xl font-bold mb-6 text-foreground">{title}</h2>
      <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
        {description}
      </p>
      <FeatureList title={featuresTitle} items={features} />
      <TechBadges technologies={technologies} variant={variant} />
    </div>
  );

  const imageBlock = (
    <div
      className={`relative aspect-video rounded-xl overflow-hidden border border-slate-800 bg-slate-900/50 ${
        imagePosition === "left" ? "order-2 lg:order-1" : ""
      }`}
    >
      {/* Blurred background */}
      <div className="absolute inset-0">
        <img
          src={image.src}
          alt=""
          className="w-full h-full object-cover blur-2xl scale-110 opacity-60"
        />
      </div>
      {/* Main image */}
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
      />
    </div>
  );

  return (
    <section
      className="min-h-svh flex items-center justify-center bg-background snap-start relative overflow-hidden"
      data-theme={variant}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${gradientPosition}, rgba(14,165,233,${gradientOpacity}), transparent 50%)`,
        }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {imagePosition === "left" ? (
            <>
              {imageBlock}
              {contentBlock}
            </>
          ) : (
            <>
              {contentBlock}
              {imageBlock}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
