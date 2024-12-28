import React from "react";
import { ShoppingCart } from "lucide-react";

interface WelcomeHeaderProps {
  title?: string;
  subtitle?: string;
}

const WelcomeHeader = ({
  title = "Welcome to Your Shopping Cart",
  subtitle = "Discover a seamless shopping experience with our smart cart features",
}: WelcomeHeaderProps) => {
  return (
    <div className="w-full h-[300px] bg-white flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <div className="mb-8 animate-scaleIn">
        <ShoppingCart className="w-16 h-16 text-primary" />
      </div>

      <h1
        className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary animate-fadeInUp"
        style={{ animationDelay: "0.3s" }}
      >
        {title}
      </h1>

      <p
        className="text-lg md:text-xl text-center text-muted-foreground max-w-2xl animate-fadeInUp"
        style={{ animationDelay: "0.5s" }}
      >
        {subtitle}
      </p>

      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20">
          <ShoppingCart className="w-full h-full" />
        </div>
        <div className="absolute bottom-10 right-10 w-16 h-16">
          <ShoppingCart className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeHeader;
