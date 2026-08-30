export interface TimelineEvent {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  status: "Completed" | "Current Focus" | "Upcoming";
}

export const COMPANY_STORY: TimelineEvent[] = [
  {
    year: "2026",
    title: "Foundations & Spatial Experiments",
    subtitle: "Investigating the disconnect between digital ideas and physical spaces.",
    description:
      "Aspacity originated from a core observation: while digital tools transformed finance and communication, physical space decisions (painting, interior design, construction) remained burdened by guesswork, static color swatches, and costly miscommunications.",
    status: "Completed",
  },
  {
    year: "2026",
    title: "PAINTIT Launch",
    subtitle: "Our first flagship interactive 3D visualization engine.",
    description:
      "We engineered PAINTIT — an interactive 3D web environment allowing painters, designers, and homeowners to test exact wall colors, sheen finishes, and natural light conditions before opening a single paint can.",
    status: "Current Focus",
  },
  {
    year: "2026+",
    title: "Product Ecosystem Expansion",
    subtitle: "Connecting  FurnishIT.",
    description:
      "Expanding from single-product utility into a unified software ecosystem connecting spatial design, contractor estimation, furniture procurement, and professional trade marketplaces.",
    status: "Upcoming",
  },
  // {
  //   year: "2027+",
  //   title: "Spatial Intelligence & Neural Compute",
  //   subtitle: "Aspacity AI and real-time spatial computing platforms.",
  //   description:
  //     "Integrating proprietary generative AI models for real-time neural material synthesis, light simulation, and automated spatial planning across physical industries worldwide.",
  //   status: "Upcoming",
  // },
];

export const COMPANY_VALUES = [
  {
    number: "01",
    title: "Restrained & Intentional Design",
    description:
      "We believe true technological sophistication is revealed in quiet clarity, generous whitespace, and purposeful interaction rather than visual clutter.",
  },
  {
    number: "02",
    title: "Ground-Level Utility",
    description:
      "Our tools are built for real people on job sites, in living rooms, and inside architectural studios. We prioritize functional depth over superficial hype.",
  },
  {
    number: "03",
    title: "Connected Ecosystems",
    description:
      "No product exists in isolation. Every tool we build communicates seamlessly with the surrounding workflows of physical execution.",
  },
  {
    number: "04",
    title: "Long-Term Engineering",
    description:
      "We build durable, production-grade WebGL/3D, AI, and cloud architectures engineered to scale over decades.",
  },
];
