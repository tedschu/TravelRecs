import { StepProps } from "../types/types";

function Step9Results({
  currentStep,
  setCurrentStep,
  userResponses,
  setUserResponses,
  questionPrompts,
  setQuestionPrompts,
}: StepProps) {
  console.log(userResponses);

  return (
    <>
      <p>Here's the results</p>
    </>
  );
}

export default Step9Results;
