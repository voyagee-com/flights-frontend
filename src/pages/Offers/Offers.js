import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FlightContextProvider } from "../../Contexts/Flight.context";
import Search from "../../Components/Search";
import Tickets from "../../Components/Tickets";
import { Filters, OffersContainer } from "./Offers.style";

const Offers = (props) => {
  let { origen, destino, ida, volta, adultos } = useParams();

  const [flightOffer, setFlightOffer] = useState([]);

  useEffect(() => {
    const getFlightsUrl = `http://localhost:3333/flights?originLocationCode=${origen}&destinationLocationCode=${destino}&departureDate=${ida}&returnDate=${volta}&adults=${adultos}&max=${5}`;

    axios
      .get(getFlightsUrl)
      .then((res) => {
        setFlightOffer(res.data);
        console.log(res.data);
      })
      .finally(() => {
        console.log("Findou");
      });
  }, []);

  return (
    <FlightContextProvider value={flightOffer}>
      <OffersContainer className="container">
        <Filters>
          <h2>Filter</h2>
        </Filters>
        <div>
          {flightOffer.map(({ id, itineraries, price }) => (
            <Tickets key={id} id={id} itineraries={itineraries} price={price} />
          ))}
        </div>
      </OffersContainer>
    </FlightContextProvider>
  );
};

export default Offers;
