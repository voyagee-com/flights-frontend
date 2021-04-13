import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FlightContextProvider } from "../../Contexts/Flight.context";
import Loader from "../../Components/Loader"
import Tickets from "../../Components/Tickets";
import { Filters, OffersContainer } from "./Offers.style";

const Offers = (props) => {

  let { origen, destino, ida, volta, adultos } = useParams();

  const [ loader, setLoader ] = useState('idle')
  const [ flightOffer, setFlightOffer ] = useState([]);

  useEffect(() => {
    const getFlightsUrl = `https://voyageecom.herokuapp.com/flights?originLocationCode=${origen}&destinationLocationCode=${destino}&departureDate=${ida}&returnDate=${volta}&adults=${adultos}&max=${5}`;

    setLoader('loading')
    axios
      .get(getFlightsUrl)
      .then((res) => {
        window.localStorage.setItem('flightz', JSON.stringify(res.data))
        setFlightOffer(res.data);
      })
      .finally(() => {
        setLoader('idle')
      });
  }, []);

  if (loader === 'loading') return (
    <OffersContainer className="container">
      <Loader />
    </OffersContainer>
  )

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
