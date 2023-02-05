import { Fragment, useState } from "react";
import { FlightList } from "./FlightList";
import cssStyle from "./AddFlightForm.module.css";

const originPlace = [
  "Chennai",
  "Salem",
  "Coimbatore",
  "Madurai",
  "Bangalore",
  "Mumbai",
  "Delhi",
];

export const AddFlightForm = () => {
  const [selectedOriginPlace, setSelectedOriginPlace] = useState();
  const [flightInfo, setFlightInfo] = useState([]);
  const [flightInput, setAddFlightInput] = useState({
    flightName: "",
    origin: "",
    destination: "",
    departureDate: "",
    arrivalDate: "",
    price: "",
  });

  const destinationPlace = originPlace.filter(
    (place) => place !== selectedOriginPlace
  );

  const onFlightSelectHandler = (event) => {
    setAddFlightInput((prevState) => {
      return { ...prevState, flightName: event.target.value };
    });
  };
  const onOriginPlaceHandler = (event) => {
    setSelectedOriginPlace(event.target.value);
    setAddFlightInput((prevState) => {
      return { ...prevState, origin: event.target.value };
    });
  };
  const onDestinationPlaceHandler = (event) => {
    setAddFlightInput((prevState) => {
      return { ...prevState, destination: event.target.value };
    });
  };
  const onArrivalDateHandler = (event) => {
    setAddFlightInput((prevState) => {
      return { ...prevState, arrivalDate: event.target.value };
    });
  };
  const onDepartureDateHandler = (event) => {
    setAddFlightInput((prevState) => {
      return { ...prevState, departureDate: event.target.value };
    });
  };
  const onPriceHandler = (event) => {
    setAddFlightInput((prevState) => {
      return { ...prevState, price: event.target.value };
    });
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const flightDetails = {
      flightName: flightInput.flightName,
      origin: flightInput.origin,
      destination: flightInput.destination,
      departureDate: flightInput.departureDate,
      arrivalDate: flightInput.arrivalDate,
      price: flightInput.price,
    };
    console.log(flightDetails);
    setFlightInfo((prevState) => {
      return [...prevState, flightDetails];
    });
  };
  return (
    <Fragment>
      <div className={cssStyle.container}>
        <form onSubmit={onSubmitHandler}>
          <h2>New Flight Details</h2>
          <div className={cssStyle.dblDisplayField}>
            <div>
              <label htmlFor="flightSelect">Flight Name</label>
              <select
                id="flightSelect"
                type="dropdown"
                onChange={onFlightSelectHandler}
              >
                <option>select flight</option>
                <option>flight 1</option>
                <option>flight 2</option>
              </select>
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input
                type="number"
                id="price"
                name="price"
                onChange={onPriceHandler}
              />
            </div>
            <div>
              <label htmlFor="depatureDate">Depature</label>
              <input
                type="date"
                id="depatureDate"
                name="depatureDate"
                onChange={onDepartureDateHandler}
              />
            </div>
            <div>
              <label htmlFor="arrivalDate">Arrival</label>
              <input
                type="date"
                id="arrivalDate"
                name="arrivalDate"
                onChange={onArrivalDateHandler}
              />
            </div>
            <div>
              <label htmlFor="originPlace">From</label>
              <select
                id="originPlace"
                type="dropdown"
                name="originPlace"
                onChange={onOriginPlaceHandler}
              >
                <option disabled selected>
                  Setect Origin
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
                  Select Destination
                </option>
                {destinationPlace.map((place, index) => (
                  <option value={place} key={index}>
                    {place}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <button type="submit" className={cssStyle.AddBtn}>Add Flight</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};
