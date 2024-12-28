import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ShoppingCart, Trash, CreditCard } from "lucide-react";

interface FeatureCardProps {
  title?: string;
  description?: string;
  icon?: React.ComponentType;
}

const defaultIcons: Record<string, React.ComponentType> = {
  "Add to Cart": ShoppingCart,
  "Remove Items": Trash,
  "Checkout Process": CreditCard,
};

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

const FeatureCard = ({
  title = defaultFeatures[0].title,
  description = defaultFeatures[0].description,
  icon: Icon = defaultIcons[defaultFeatures[0].title],
}: FeatureCardProps) => {
  return (
    <Card className="w-[360px] h-[280px] bg-white transition-all duration-300 hover:shadow-lg group cursor-pointer">
      <CardHeader className="text-center">
        {Icon && (
          <div className="flex justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
            <Icon className="w-12 h-12 text-primary transition-colors duration-300 group-hover:text-primary/80" />
          </div>
        )}
        <CardTitle className="text-xl font-semibold transition-colors duration-300 group-hover:text-primary">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center text-muted-foreground transition-opacity duration-300 group-hover:opacity-90">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
