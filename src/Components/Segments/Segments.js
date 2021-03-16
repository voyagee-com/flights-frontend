import React from "react";
import Icons from "../Icons";
import {
  StyledSegments,
  Duration,
  AirportTime,
  Carrier,
} from "./Segments.style";

const Segments = ({ duration, departureData, arrivalData, stops, title }) => {
  const toHourDisplay = (datetime) => {
    const options = { hour: "2-digit", minute: "2-digit", timeZone: "UTC" };
    // const options = { hour: 'number', minute: 'number' }
    const convertedDateTime = new Date(datetime).toLocaleTimeString(
      "en-US",
      options
    );
    return convertedDateTime;
  };

  const toDateDisplay = (datetime) => {
    const options = { weekday: "short", month: "long", day: "numeric" };
    const convertedDateTime = new Date(datetime).toLocaleDateString(
      "en-US",
      options
    );
    return convertedDateTime;
  };

  const toDuration = (durationData) => {
    const ddd = durationData.replace(/[A-Z]{2}/, "").replace(/[A-Z]/, "H ");
    return ddd;
  };

  return (
    <StyledSegments>
      <Carrier>
        <h3>{title}</h3>
        <p>
          <Icons icon={departureData.carrierCode} />
          <time dateTime={departureData.departure.at}>
            {toDateDisplay(departureData.departure.at)}
          </time>
        </p>
      </Carrier>
      <AirportTime>
        <span>{departureData.departure.iataCode}</span>
        <time dateTime={departureData.departure.at}>
          {toHourDisplay(departureData.departure.at)}
        </time>
      </AirportTime>
      <Duration>
        <time>{toDuration(duration)}</time>
        <span>
          {stops === 1
            ? `Direct flight`
            : stops - 1 === 2
            ? `${stops - 1} Stops`
            : `${stops - 1} Stop`}
        </span>
      </Duration>
      <AirportTime>
        <span>{arrivalData.arrival.iataCode}</span>
        <time dateTime={arrivalData.arrival.at}>
          {toHourDisplay(arrivalData.arrival.at)}
        </time>
      </AirportTime>
    </StyledSegments>
  );
};

export default Segments;
