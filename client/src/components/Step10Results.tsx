import { useEffect, useState } from "react";
import { StepProps } from "../types/types";

function Step10Results({
  currentStep,
  setCurrentStep,
  userResponses,
  setUserResponses,
  questionPrompts,
  setQuestionPrompts,
  apiResponse,
  setApiResponse,
}: StepProps) {
  console.log(apiResponse);

  const [hasResponse, setHasResponse] = useState(false);

  useEffect(() => {
    if (apiResponse && apiResponse.destination) {
      setHasResponse(true);
    }
  }, [apiResponse]);

  return (
    <>
      {hasResponse && (
        <>
          <div>
            <h1>{apiResponse?.destination.location}</h1>
            <h2>{apiResponse?.destination.overview}</h2>
            {apiResponse?.destination.things_to_do.map((destination) => {
              return (
                <>
                  <h2>{destination.destination_name}</h2>
                  <p>{destination.description}</p>
                </>
              );
            })}
            <ul>
              <li>{apiResponse?.destination.time_to_go}</li>
              <li>{apiResponse?.destination.estimated_cost}</li>
              <li>{apiResponse?.destination.helpful_tips}</li>
            </ul>
          </div>
          <div>
            <h1>{apiResponse?.second_destination.location}</h1>
            <h2>{apiResponse?.second_destination.overview}</h2>
            {apiResponse?.second_destination.things_to_do.map((destination) => {
              return (
                <>
                  <h2>{destination.destination_name}</h2>
                  <p>{destination.description}</p>
                </>
              );
            })}
            <ul>
              <li>{apiResponse?.destination.time_to_go}</li>
              <li>{apiResponse?.destination.estimated_cost}</li>
              <li>{apiResponse?.destination.helpful_tips}</li>
            </ul>
          </div>
        </>
      )}
    </>
  );
}

export default Step10Results;
