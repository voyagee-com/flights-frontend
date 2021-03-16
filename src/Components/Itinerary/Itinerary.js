import React from "react";
import Segments from "../Segments";
import { StyledItinerary } from "./Itinerary.style";

const Itinerary = ({ title, itinerary }) => {
  const { duration, segments } = itinerary;
  const stops = segments.length;
  const { length, 0: firstStep, [length - 1]: lastStep } = segments;
  // const { departure } = firstStep
  // const { arrival } = lastStep
  const departureData = {
    departure: firstStep.departure,
    carrierCode: firstStep.carrierCode,
  };
  const arrivalData = {
    arrival: lastStep.arrival,
    carrierCode: lastStep.carrierCode,
  };

  return (
    <StyledItinerary>
      <Segments
        title={title}
        duration={duration}
        departureData={departureData}
        arrivalData={arrivalData}
        stops={stops}
      />
      <div>
        <p>Sem bagagem</p>
      </div>
    </StyledItinerary>
  );
};

export default Itinerary;
