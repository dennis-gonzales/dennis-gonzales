import { createFileRoute } from "@tanstack/react-router";
import NavigationDots from "@/components/layout/NavigationDots";
import { AppShowcaseSection } from "@/components/sections/AppShowcaseSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FeatureCardSection } from "@/components/sections/FeatureCardSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectSection } from "@/components/sections/ProjectSection";
import {
  contactData,
  gcashGLife,
  heroData,
  p33rFinance,
  xloadApp,
  xloadGames,
  xloadIntro,
  xMoney,
} from "@/data/projects";
import { useActiveSection } from "@/hooks/useActiveSection";

export const Route = createFileRoute("/")({ component: App });

function App() {
  // const { activeSection, scrollToSection } = useActiveSection();

  return (
    <div className="relative">
      {/* <NavigationDots
				count={8}
				activeIndex={activeSection}
				onNavigate={scrollToSection}
			/> */}

      <HeroSection
        {...heroData}
        //  onScrollDown={() => scrollToSection(1)}
      />

      {/* <ProjectSection {...p33rFinance} />
      <ProjectSection {...xMoney} />
      <ProjectSection {...gcashGLife} />
      <ProjectSection {...xloadIntro} /> */}

      {/* <FeatureCardSection {...xloadGames} /> */}
      {/* <AppShowcaseSection {...xloadApp} /> */}

      {/* <ContactSection {...contactData} /> */}
    </div>
  );
}
