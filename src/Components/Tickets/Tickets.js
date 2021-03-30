import React, { useContext } from "react";
import { Button } from "@voyage/artigas-ds";
import { FlightContext } from "../../Contexts/Flight.context";
import Itinerary from "../Itinerary";
import { Ticket, ItineraryGroup, Price } from "./Tickets.style";

const toCurrency = (number) => {
  const convertedCurrency = new Intl.NumberFormat("en-US").format(number);
  return convertedCurrency;
};

const Tickets = ({ itineraries, price, id }) => {
  const { flightOffer } = useContext(FlightContext);
  const [start, finish] = itineraries;

  const handleClick = (event, id) => {
    // console.log(event);
    const selectedOffer = flightOffer.filter((flight) => flight.id === id);
    dispatchEvent(
      new CustomEvent("flightOffer", {
        detail: selectedOffer,
      })
    );
  };

  return (
    <Ticket>
      <ItineraryGroup>
        <Itinerary title="Depart" itinerary={start} />
        <Itinerary title="Return" itinerary={finish} />
      </ItineraryGroup>
      <Price>
        <span>{toCurrency(price.grandTotal)}</span>
        <Button onClick={(e) => handleClick(e, id)}>Continue</Button>
      </Price>
    </Ticket>
  );
};

export default Tickets;
