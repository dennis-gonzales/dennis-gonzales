import { v4 as uuidv4 } from "uuid";

export default function NavigationDots({
  count,
  activeIndex,
  onNavigate,
}: {
  count: number;
  activeIndex: number;
  onNavigate: (index: number) => void;
}) {
  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
      {Array.from({ length: count }, (_, index) => (
        <button
          key={uuidv4()}
          type="button"
          onClick={() => onNavigate(index)}
          className={`w-3 h-3 rounded-full transition-all ${
            activeIndex === index
              ? "bg-primary scale-125"
              : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
          }`}
          aria-label={`Go to section ${index + 1}`}
        />
      ))}
    </nav>
  );
}
