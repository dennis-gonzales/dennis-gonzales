// import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  greeting?: string;
  name: string;
  title: string;
  description: string;
  // onScrollDown: () => void;
}

export function HeroSection({
  greeting = "Hello, I'm",
  name,
  title,
  description,
  // onScrollDown,
}: HeroSectionProps) {
  return (
    <section className="min-h-svh flex items-center justify-center bg-background snap-start relative overflow-hidden">
      {/* Background Image */}
      {/* <img
				src="/hero-bg.png"
				alt=""
				className="absolute inset-0 w-full h-full object-cover object-center"
			/> */}

      {/* Gradient Overlay for readability */}
      <div className="absolute inset-0 bg-linear-to-b from-background/80 via-background/60 to-background/20" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <p className="text-foreground text-lg mb-4 font-mono">{greeting}</p>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-balance text-foreground">
            {name}
          </h1>
          <p className="text-3xl md:text-4xl text-muted-foreground mb-8 text-balance">
            {title}
          </p>
          <p className="text-xl text-muted-foreground/90 max-w-2xl leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* <button
        type="button"
        onClick={onScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </button> */}
    </section>
  );
}
