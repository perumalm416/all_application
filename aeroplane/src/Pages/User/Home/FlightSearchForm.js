import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { flightSearchAction } from "../../../Store/UserFlightSlice";
import cssStyle from "./FlightSearchForm.module.css";

const FormElement = styled.form`
  & input,
  &select,
  label {
    display: block;
    width: 300px;
  }
`;

const originPlace = [
  "Chennai",
  "Salem",
  "Coimbatore",
  "Madurai",
  "Bangalore",
  "Mumbai",
  "Delhi",
];

export const FlightSearchForm = () => {
  const [selectedOriginPlace, setSelectedOriginPlace] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [flightSearchInput, setFlightSearchInput] = useState({
    origin: "",
    destination: "",
    noOfPassengers: "",
    departureDate: "",
    returnDate: "",
    classtype: "",
  });

  const destinationPlace = originPlace.filter(
    (place) => place !== selectedOriginPlace
  );

  const onOriginPlaceHandler = (event) => {
    setSelectedOriginPlace(event.target.value);
    setFlightSearchInput((prevState) => {
      return { ...prevState, origin: event.target.value };
    });
  };
  const onDestinationPlaceHandler = (event) => {
    setFlightSearchInput((prevState) => {
      return { ...prevState, destination: event.target.value };
    });
  };
  const onNoOfPassengersHandler = (event) => {
    setFlightSearchInput((prevState) => {
      return { ...prevState, noOfPassengers: event.target.value };
    });
  };
  const onDepartureDateHandler = (event) => {
    setFlightSearchInput((prevState) => {
      return { ...prevState, departureDate: event.target.value };
    });
  };
  const onReturnDateHandler = (event) => {
    setFlightSearchInput((prevState) => {
      return { ...prevState, returnDate: event.target.value };
    });
  };
  const onClassTypeHandler = (event) => {
    setFlightSearchInput((prevState) => {
      return { ...prevState, classtype: event.target.value };
    });
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const userFlightInput = {
      origin: flightSearchInput.origin,
      destination: flightSearchInput.destination,
      noOfPassengers: flightSearchInput.noOfPassengers,
      departureDate: flightSearchInput.departureDate,
      returnDate: flightSearchInput.returnDate,
      classtype: flightSearchInput.classtype,
    };

    dispatch(flightSearchAction.flightSearchInfo(userFlightInput));
    navigate("/flight-search-info");
  };
  return (
    <Fragment>
      <div>
        <h3>Round trip</h3>
      </div>
      <form className={cssStyle.container} onSubmit={onSubmitHandler}>
        <div className={cssStyle.dblDisplayField}>
          <div>
            <label htmlFor="originPlace">From</label>
            <select
              id="originPlace"
              type="dropdown"
              name="originPlace"
              onChange={onOriginPlaceHandler}
            >
              <option disabled selected>
                ------Setect Origin------
              </option>
              {originPlace.map((place, index) => (
                <option value={place} key={index}>
                  {place}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="destinationPlace">To</label>
            <select
              id="destinationPlace"
              type="dropdown"
              name="destinationPlace"
              placeholder="Destination"
              onChange={onDestinationPlaceHandler}
            >
              <option disabled selected>
                ------Select Destination------
              </option>
              {destinationPlace.map((place, index) => (
                <option value={place} key={index}>
                  {place}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="noOfPassengers">No of Passengers</label>
            <input
              id="noOfPassengers"
              type="number"
              min="1"
              max="60"
              placeholder="No of passengers"
              onChange={onNoOfPassengersHandler}
            />
          </div>
          <div>
            <label htmlFor="departureDate">Departure</label>
            <input
              id="departureDate"
              type="date"
              onChange={onDepartureDateHandler}
            />
          </div>
          <div>
            <label htmlFor="returnDate">Return</label>
            <input id="returnDate" type="date" onChange={onReturnDateHandler} />
          </div>
          <div>
            <label htmlFor="classType">Travel Class</label>
            <select
              id="classType"
              type="dropdown"
              name="classType"
              onChange={onClassTypeHandler}
            >
              <option disabled selected>
                ------Class Type------
              </option>
              <option value="First Class">First Class</option>
              <option value="Business Class">Business Class</option>
              <option value="Economy Class">Economy Class</option>
            </select>
          </div>
        </div>
        <button className={cssStyle.submitBtn} type="submit" id="searchFlight">
          Search Flight
        </button>
      </form>
    </Fragment>
  );
};
