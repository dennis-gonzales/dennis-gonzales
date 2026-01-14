export type ProjectData = {
  variant: "light" | "dark";
  gradientPosition: string;
  imagePosition: "left" | "right";
  category: string;
  title: string;
  description: string;
  featuresTitle: string;
  features: string[];
  technologies: string[];
  image: { src: string; alt: string };
};

export type FeatureCardData = {
  variant: "light" | "dark";
  gradientPosition: string;
  category: string;
  title: string;
  description: string;
  features: Array<{ icon: string; title: string; description: string }>;
  technologies: string[];
};

export type AppShowcaseData = {
  variant: "light" | "dark";
  gradientPosition: string;
  category: string;
  title: string;
  description: string;
  screenshots: Array<{ src: string; alt: string; label: string }>;
  technologies: string[];
};

export const p33rFinance: ProjectData = {
  variant: "light",
  gradientPosition: "30% 20%",
  imagePosition: "right",
  category: "Fintech Platform",
  title: "P33R Finance",
  description:
    "A non-custodial peer-to-peer platform that revolutionizes how users connect and transact securely without intermediaries.",
  featuresTitle: "Key Features",
  features: [
    "Direct peer-to-peer transactions with smart contract security",
    "Non-custodial architecture ensuring user control",
    "Real-time matching and dispute resolution",
  ],
  technologies: ["React", "TypeScript", "Web3", "Smart Contracts"],
  image: { src: "/projects/p33r.png", alt: "P33R Finance Platform" },
};

export const xMoney: ProjectData = {
  variant: "light",
  gradientPosition: "70% 30%",
  imagePosition: "left",
  category: "Crypto Platform",
  title: "xMoney",
  description:
    "Empowering users with seamless access to crypto financial services, bridging traditional finance with blockchain technology.",
  featuresTitle: "Features",
  features: [
    "Multi-currency wallet with instant swaps",
    "DeFi integration for earning and staking",
    "Bank-grade security with biometric authentication",
  ],
  technologies: ["React Native", "Blockchain", "DeFi", "Web3"],
  image: { src: "/projects/xmoney.png", alt: "xMoney App" },
};

export const gcashGLife: ProjectData = {
  variant: "light",
  gradientPosition: "40% 60%",
  imagePosition: "right",
  category: "Mobile Platform",
  title: "GCash GLife",
  description:
    "One-stop shop marketplace integrated within GCash, enabling millions of users to purchase goods and services seamlessly.",
  featuresTitle: "Capabilities",
  features: [
    "Integrated marketplace with 1000+ merchants",
    "Bill payments, mobile loads, and e-commerce",
    "Serving millions of daily active users",
  ],
  technologies: ["React Native", "Node.js", "Microservices", "AWS"],
  image: {
    src: "/projects/glife.jpg",
    alt: "GCash GLife Platform",
  },
};

export const xloadIntro: ProjectData = {
  variant: "light",
  gradientPosition: "20% 40%",
  imagePosition: "left",
  category: "Mobile Services",
  title: "XLOAD",
  description:
    "Universal mobile prepaid platform revolutionizing how users load mobile credits, pay bills, and access digital services.",
  featuresTitle: "Platform Features",
  features: [
    "Multi-network prepaid loading support",
    "Bill payment aggregation for utilities",
    "Real-time transaction processing",
  ],
  technologies: ["React Native", "REST API", "Payment Gateway"],
  image: {
    src: "/projects/xload.png",
    alt: "XLOAD Platform",
  },
};

export const xloadGames: FeatureCardData = {
  variant: "light",
  gradientPosition: "60% 50%",
  category: "Gaming Integration",
  title: "XLOAD Games",
  description:
    "Integrated gaming features allowing users to purchase game credits, digital items, and in-game currencies seamlessly.",
  features: [
    {
      icon: "🎮",
      title: "Game Credits",
      description:
        "Purchase credits for popular mobile games with instant delivery",
    },
    {
      icon: "💎",
      title: "Digital Items",
      description:
        "Buy in-game items, skins, and power-ups across multiple titles",
    },
    {
      icon: "⚡",
      title: "Fast Processing",
      description: "Real-time transaction processing with instant confirmation",
    },
  ],
  technologies: ["Gaming API", "Payment Integration", "Mobile First"],
};

export const xloadApp: AppShowcaseData = {
  variant: "light",
  gradientPosition: "80% 20%",
  category: "React Native Application",
  title: "XLOAD Mobile App",
  description:
    "Full-featured React Native application with modern UI/UX and comprehensive functionality",
  screenshots: [
    {
      src: "/projects/placeholder.svg?height=400&width=225",
      alt: "Home Screen",
      label: "Home Screen",
    },
    {
      src: "/projects/placeholder.svg?height=400&width=225",
      alt: "Transactions",
      label: "Transactions",
    },
    {
      src: "/projects/placeholder.svg?height=400&width=225",
      alt: "Payment Flow",
      label: "Payment Flow",
    },
    {
      src: "/projects/placeholder.svg?height=400&width=225",
      alt: "User Profile",
      label: "User Profile",
    },
  ],
  technologies: ["React Native", "Redux", "TypeScript", "Expo", "REST API"],
};

export const heroData = {
  greeting: "Hello, I'm",
  name: "Dennis Gonzales",
  title: "Senior Software Engineer",
  description: "I love to code and build stuff that piques my interest",
};

export const contactData = {
  title: "Let's Build Something Amazing",
  description:
    "Interested in collaborating or learning more about these projects? Feel free to reach out or download the demo.",
  primaryCta: {
    label: "Get in Touch",
    href: "mailto:pro.gonzalesdennis@gmail.com",
  },
  secondaryCta: { label: "Download XLOAD APK", href: "#" },
  socials: [
    {
      type: "linkedin" as const,
      href: "https://www.linkedin.com/in/dennis-gonzales/",
    },
    { type: "github" as const, href: "https://github.com/dennis-gonzales" },
    { type: "email" as const, href: "mailto:pro.gonzalesdennis@gmail.com" },
  ],
  footerName: "Dennis Gonzales",
};
