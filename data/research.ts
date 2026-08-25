export interface ResearchTopic {
  id: string;
  code: string;
  title: string;
  category: "3D Neural Rendering" | "Spatial Interfaces" | "Generative Materials" | "Trade Ecosystems";
  summary: string;
  status: "Active Research" | "Exploratory Phase" | "Prototyping";
}

export const RESEARCH_TOPICS: ResearchTopic[] = [
  {
    id: "r1",
    code: "RES-3D-01",
    title: "Real-Time WebGL Ray-Traced Light Physics",
    category: "3D Neural Rendering",
    summary:
      "Investigating ultra-lightweight web-based global illumination models to render natural daylight scattering and specular reflections in standard web browsers at 60 FPS.",
    status: "Active Research",
  },
  {
    id: "r2",
    code: "RES-AI-02",
    title: "Neural Material & Paint Sheen Synthesis",
    category: "Generative Materials",
    summary:
      "Developing machine learning models trained on physical paint light reflectance data to predict how custom emulsion, gloss, and satin finishes absorb light across different humidity levels.",
    status: "Prototyping",
  },
  {
    id: "r3",
    code: "RES-UI-03",
    title: "Zero-Latency Spatial Gesture Interfaces",
    category: "Spatial Interfaces",
    summary:
      "Designing responsive 3D viewport control systems that normalize multi-touch gestures, mouse drag, and keyboard navigation seamlessly across mobile and desktop displays.",
    status: "Active Research",
  },
  {
    id: "r4",
    code: "RES-TR-04",
    title: "Decentralized Specification-to-Procurement Networks",
    category: "Trade Ecosystems",
    summary:
      "Exploring automated translation pipelines that turn interactive 3D color/material choices into itemized bill-of-quantities for local supplier networks.",
    status: "Exploratory Phase",
  },
];
