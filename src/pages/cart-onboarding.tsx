import React from "react";
import { Button } from "../components/ui/button";
import WelcomeHeader from "../components/cart/WelcomeHeader";
import FeatureCardGrid from "../components/cart/FeatureCardGrid";
import ProgressIndicator from "../components/cart/ProgressIndicator";

const CartOnboarding = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center">
      <WelcomeHeader />

      <div
        className="w-full max-w-7xl px-4 py-8 animate-fadeInUp"
        style={{ animationDelay: "0.3s" }}
      >
        <FeatureCardGrid />
      </div>

      <div
        className="flex flex-col items-center gap-8 mt-8 mb-16 animate-fadeInUp"
        style={{ animationDelay: "0.6s" }}
      >
        <ProgressIndicator />

        <Button
          size="lg"
          className="px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
          onClick={() => {
            // Handle get started action
            console.log("Get Started clicked");
          }}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default CartOnboarding;
