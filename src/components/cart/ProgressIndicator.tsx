import React from "react";

interface ProgressIndicatorProps {
  currentStep?: number;
  totalSteps?: number;
}

const ProgressIndicator = ({
  currentStep = 1,
  totalSteps = 3,
}: ProgressIndicatorProps) => {
  return (
    <div className="flex items-center justify-center gap-2 w-[200px] h-[40px] bg-white p-4">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${index < currentStep ? "bg-primary" : "bg-gray-200"}`}
          aria-label={`Step ${index + 1} of ${totalSteps}`}
        />
      ))}
    </div>
  );
};

export default ProgressIndicator;
