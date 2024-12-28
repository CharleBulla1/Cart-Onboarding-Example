import React from "react";
import FeatureCard from "./FeatureCard";

interface FeatureCardGridProps {
  features?: Array<{
    title: string;
    description: string;
  }>;
}

const defaultFeatures = [
  {
    title: "Add to Cart",
    description: "Easily add items to your cart with a single click",
  },
  {
    title: "Remove Items",
    description: "Quickly remove items you no longer want",
  },
  {
    title: "Checkout Process",
    description: "Seamless and secure checkout experience",
  },
];

const FeatureCardGrid = ({
  features = defaultFeatures,
}: FeatureCardGridProps) => {
  return (
    <div className="w-full max-w-[1200px] h-[400px] mx-auto bg-background p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureCardGrid;
