import React from "react";
import { CompanyStory } from "@/components/story/CompanyStory";

export const metadata = {
  title: "About Us & Company History — Aspacity",
  description:
    "Learn about Aspacity, a technology company building focused products for professionals, businesses, and everyday users.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <CompanyStory />
    </div>
  );
}
