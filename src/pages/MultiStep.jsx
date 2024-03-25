// MultiStep.js
import React, { useState } from "react";
import StepOne from "../components/StepOne";
import StepTwo from "../components/StepTwo";
import StepThree from "../components/StepThree";
import StepFour from "../components/StepFour";
import StepFive from "../components/StepFive";
import StepSix from "../components/StepSix";
import StepSeven from "../components/StepSeven";

const MultiStep = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleFormData = (data) => {
    setFormData({ ...formData, ...data });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepOne
            onNext={handleNext}
            onFormDataChange={handleFormData}
            currentStep={currentStep}
          />
        );
      case 2:
        return (
          <StepTwo
            onPrev={handlePrev}
            onNext={handleNext}
            onFormDataChange={handleFormData}
            currentStep={currentStep}
          />
        );
      case 3:
        return (
          <StepThree
            onPrev={handlePrev}
            onNext={handleNext}
            onFormDataChange={handleFormData}
            currentStep={currentStep}
          />
        );
      case 4:
        return (
          <StepFour
            onPrev={handlePrev}
            onNext={handleNext}
            onFormDataChange={handleFormData}
            currentStep={currentStep}
          />
        );
      case 5:
        return (
          <StepFive
            onPrev={handlePrev}
            onNext={handleNext}
            onFormDataChange={handleFormData}
            currentStep={currentStep}
          />
        );
      case 6:
        return (
          <StepSix
            onPrev={handlePrev}
            onNext={handleNext}
            onFormDataChange={handleFormData}
            currentStep={currentStep}
          />
        );
      case 7:
        return (
          <StepSeven
            onPrev={handlePrev}
            formData={formData}
            currentStep={currentStep}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mt-5">
      <h2>Multi-Step Form</h2>
      {renderStep()}
    </div>
  );
};

export default MultiStep;
