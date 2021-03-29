import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { Button, DateTime, Input } from '@voyage/artigas-ds'
import Counter from '../Counter'
import { airportList } from "./airportList";
import { StyledDataList, Form } from "./Search.styled";

let initialSearchData = {
  originLocationCode: "",
  destinationLocationCode: "",
  departureDate: "",
  returnDate: "",
  adults: 2,
};

const Search = () => {
  const history = useHistory();
  const inputEl = useRef(null);
  const [searchData, setSeachData] = useState(initialSearchData);
  const [showList, setShowList] = useState(false);
  const [airport, setAirport] = useState([]);
  const [fieldFocus, setFieldFocus] = useState("");
  const [minData, setMinData] = useState();
  const [dateTimeType, setDateTimeType] = useState("text");

  const today = new Date();
  const day = String(today.getDate() + 1).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();

  const tomorrow = `${year}-${month}-${day}`;

  const minRetunDate = (dateTime) => {
    const newDate = new Date();
    newDate.setDate(dateTime.getDate() + 2);
    setMinData(newDate.toISOString().split("T")[0]);
  };

  const updateSearchData = (name, value) => {
    console.log("updateSearchData", name, value);
    let internalObject = {
      ...searchData,
      [name]: value,
    };
    // if(addressFormData[name].validate) {
    //   internalObject[name].error = Validate(value, addressFormData[name].validate)
    // }

    setSeachData(internalObject);
  };

  const filterAirport = (value) => {
    console.log("entrou aqui");
    const filtred = airportList.filter(
      (airport) =>
        airport.iataCode.includes(value) ||
        airport.airportName.includes(value) ||
        airport.airportCity.includes(value) ||
        airport.airportUF.includes(value)
    );

    if (filtred.length !== 0) {
      setAirport(filtred);
      return;
    }
  };

  const handleList = (event) => {
    const { id, value } = event.target;

    updateSearchData(id, value);
    setShowList(false);
  };

  // const handleBlur = (event) => {
  //   // const { textLength } = event.target;
  //   // // console.log(textLength);
  //   // if (textLength > 0) {
  //   //   setSrOnly(true);
  //   // }
  //   // setShowList(false)
  // };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log( name, value);
    // if ( name === 'originLocationCode' || name === 'destinationLocationCode' ) {

    // }

    if (name === "departureDate") {
      const { valueAsDate } = inputEl.current;
      minRetunDate(valueAsDate);
    }

    filterAirport(value);
    updateSearchData(name, value);
  };

  const handleFocus = (event) => {
    setAirport(airportList);
    setShowList(true);
    setFieldFocus(event.target.name);
  };

  const handleClick = (event) => {
    event.preventDefault();
    const {
      originLocationCode,
      destinationLocationCode,
      departureDate,
      returnDate,
      adults,
    } = searchData;

    history.push(
      `/tickets/${originLocationCode}-${destinationLocationCode}/${departureDate}/${returnDate}/${adults}`
    );
  };

  // const handleDataFocus = (event) => {
  //   const { type } = event.target;

  //   if (type === "text") {
  //     setDateTimeType("date");
  //   }
  // };

  return (
    <Form>
      <Input
        label="from"
        id="originLocationCode"
        value={searchData.originLocationCode}
        placeholder="Departure airport"
        onBlur={(e) => handleBlur(e)}
        onChange={(e) => handleChange(e)}
        onFocus={(e) => handleFocus(e)}
      />

      <Input
        label="To"
        id="destinationLocationCode"
        value={searchData.destinationLocationCode}
        placeholder="Arrival airport"
        onBlur={(e) => handleBlur(e)}
        onChange={(e) => handleChange(e)}
        onFocus={(e) => handleFocus(e)}
      />

      <StyledDataList display={showList}>
        {airport.map((x) => (
          <span>
            {x.airportCity}, {x.airportUF}
            <option
              id={fieldFocus}
              onClick={(e) => handleList(e)}
              value={x.iataCode}
            >
              {`${x.airportName}, (${x.iataCode})`}
            </option>
          </span>
        ))}
      </StyledDataList>

      <DateTime
        label="Depart"
        id="departureDate"
        type={dateTimeType}
        ref={inputEl}
        min={tomorrow}
        placeholder="Choose departure date"
        onBlur={(e) => handleBlur(e)}
        onChange={(e) => handleChange(e)}
      />

      <DateTime
        label="Return"
        id="returnDate"
        type={dateTimeType}
        min={minData}
        placeholder="Choose return date"
        onBlur={(e) => handleBlur(e)}
        onChange={(e) => handleChange(e)}
      />
      <Counter 
        label="Passengers" 
        id="adults"
        value={searchData.adults}
        onChange={(e) => handleChange(e)}
      />

      {/* <label htmlFor="adults">passengers</label>
      <input
        id="adults"
        name="adults"
        type="number"
        value={searchData.adults}
        onChange={(e) => handleChange(e)}
      /> */}

      <button onClick={(e) => handleClick(e)}>Buscar</button>
    </Form>
  );
};
export default Search;
