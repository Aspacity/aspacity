export interface ProductItem {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  status: "LIVE PRODUCT" | "IN DEVELOPMENT" | "RESEARCH & AI";
  isLive: boolean;
  category: "Visual Spatial" | "Creative Tools" | "Construction & Build" | "Commerce & Trade" | "Interior & Furnishing" | "AI & Spatial Compute";
  url?: string;
  externalUrl?: string;
  features: string[];
  metrics?: { label: string; value: string }[];
  highlightColor: string;
}

export const PRODUCTS: ProductItem[] = [
  {
    id: "paintit",
    name: "PaintIT Studio",
    slug: "paintit",
    tagline: "Interactive 3D visualization and real-time spatial painting tools.",
    description:
      "PaintIT Studio enables painters, homeowners, interior architects, and designers to visualize spaces, wall sheens, lighting environments, and color compositions in interactive 3D before physical work begins.",
    status: "LIVE PRODUCT",
    isLive: true,
    category: "Visual Spatial",
    url: "/products/paintit",
    externalUrl: "https://paint-it-six.vercel.app",
    features: [
      "Real-time 3D room rendering with custom wall finishes (Emulsion, Gloss, Satin)",
      "Interactive lighting engine with morning, sunset, and night daylight simulation",
      "Custom color mixing and hex code palette management",
      // "Dual online & offline database synchronization",
      "100% full-screen immersive design workspace",
    ],
    metrics: [
      { label: "Active 3D Models", value: "3+" },
      { label: "Color Presets", value: "10+" },
      { label: "Render Mode", value: "60 FPS Real-time" },
    ],
    highlightColor: "#FF5500",
  },
  // {
  //   id: "designit",
  //   name: "DesignIT",
  //   slug: "designit",
  //   tagline: "Generative spatial planning and architectural layout design.",
  //   description:
  //     "A next-generation spatial design environment enabling professionals to convert physical room dimensions into intelligent 3D layout blueprints with automated lighting and material recommendations.",
  //   status: "IN DEVELOPMENT",
  //   isLive: false,
  //   category: "Creative Tools",
  //   url: "/products/designit",
  //   features: [
  //     "Automated CAD floorplan import & 3D extrusion",
  //     "Generative room layout & furniture arrangement suggestions",
  //     "Collaborative client review portals with live annotations",
  //   ],
  //   highlightColor: "#0F0F11",
  // },
  // {
  //   id: "buildit",
  //   name: "BuildIT",
  //   slug: "buildit",
  //   tagline: "Precision estimation, material tracking, and job execution for contractors.",
  //   description:
  //     "Connecting 3D visual specifications directly with contractor cost estimations, material quantity takeoffs, and real-time physical project execution tracking.",
  //   status: "IN DEVELOPMENT",
  //   isLive: false,
  //   category: "Construction & Build",
  //   url: "/products/buildit",
  //   features: [
  //     "Automated square-footage & material quantity takeoff engine",
  //     "Contractor estimation and line-item quotation generator",
  //     "Real-time project milestone tracking for clients & trade pros",
  //   ],
  //   highlightColor: "#0F0F11",
  // },
  // {
  //   id: "sellit",
  //   name: "SellIT",
  //   slug: "sellit",
  //   tagline: "Interactive 3D real estate staging and property presentation engine.",
  //   description:
  //     "Empowering real estate developers and property managers to present unbuilt or renovated spaces in photorealistic interactive 3D to prospective buyers globally.",
  //   status: "IN DEVELOPMENT",
  //   isLive: false,
  //   category: "Commerce & Trade",
  //   url: "/products/sellit",
  //   features: [
  //     "Immersive virtual property walk-throughs",
  //     "Customizable buyer finish options in live 3D preview",
  //     "Integrated sales lead capture & specification analytics",
  //   ],
  //   highlightColor: "#0F0F11",
  // },
  {
    id: "furnishit",
    name: "FurnishIT",
    slug: "furnishit",
    tagline: "3D furniture catalog integration, scale placement, and direct procurement.",
    description:
      "Bridging interior furniture manufacturers with 3D design environments, allowing users to place true-to-scale furniture assets directly into their virtual rooms and order in one click.",
    status: "IN DEVELOPMENT",
    isLive: false,
    category: "Interior & Furnishing",
    url: "/products/furnishit",
    features: [
      "Direct 3D brand catalog integration",
      "True-to-scale spatial placement & collision bounds",
      "Seamless manufacturer procurement checkout",
    ],
    highlightColor: "#0F0F11",
  },
  // {
  //   id: "marketplace",
  //   name: "Aspacity Marketplace",
  //   slug: "marketplace",
  //   tagline: "The central professional directory connecting homeowners with certified trade experts.",
  //   description:
  //     "A trusted ecosystem where homeowners and designers hire verified painters, interior architects, and contractors backed by transparent 3D project specifications.",
  //   status: "IN DEVELOPMENT",
  //   isLive: false,
  //   category: "Commerce & Trade",
  //   url: "/products/marketplace",
  //   features: [
  //     "Verified trade professional verification system",
  //     "3D spec-to-quote job matching engine",
  //     "Escrow project payments & milestone approvals",
  //   ],
  //   highlightColor: "#0F0F11",
  // },
  // {
  //   id: "ai",
  //   name: "Aspacity AI",
  //   slug: "ai",
  //   tagline: "Neural spatial intelligence, material generation, and lighting physics.",
  //   description:
  //     "Our core AI research platform powering intelligent color harmony suggestions, natural language room re-styling, and real-time light simulation across the entire Aspacity ecosystem.",
  //   status: "RESEARCH & AI",
  //   isLive: false,
  //   category: "AI & Spatial Compute",
  //   url: "/products/ai",
  //   features: [
  //     "Text-to-3D room texture & material synthesis",
  //     "Automated lighting raytracing optimization",
  //     "Intelligent color wheel & room harmony recommendations",
  //   ],
  //   highlightColor: "#FF5500",
  // },
];
