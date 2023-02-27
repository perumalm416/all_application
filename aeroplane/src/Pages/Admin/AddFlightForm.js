import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
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

const flightNameList = [
  "AirAsia",
  "AirIndia",
  "AirIndiaExpress",
  "GoFirst",
  "IndiGo",
  "SpiceJet",
  "Vistara",
  "Saudia",
];

export const AddFlightForm = () => {
  const [selectedOriginPlace, setSelectedOriginPlace] = useState();
  const dispatch = useDispatch();
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
    console.log(event.target.value);
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
    const postConfigure = {
      url: "https://aeroplane-application-default-rtdb.firebaseio.com/add-flight-info.json",
      data: flightDetails,
      methodType: "POST",
      headers: { "Content-Type": "application/json" },
    };
    dispatch({ type: "ADD_FLIGHT_INFO", payload: postConfigure });
    
    setAddFlightInput(() => {
      return {
        flightName: "",
        origin: "",
        destination: "",
        departureDate: "",
        arrivalDate: "",
        price: "",
      };
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
                <option selected disabled>
                  Select Flight
                </option>
                {flightNameList.map((flightName, index) => (
                  <option key={index} value={flightName}>
                    {flightName}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input
                type="number"
                id="price"
                name="price"
                value={flightInput.price}
                onChange={onPriceHandler}
              />
            </div>
            <div>
              <label htmlFor="depatureDate">Depature</label>
              <input
                type="date"
                id="depatureDate"
                name="depatureDate"
                value={flightInput.departureDate}
                onChange={onDepartureDateHandler}
              />
            </div>
            <div>
              <label htmlFor="arrivalDate">Arrival</label>
              <input
                type="date"
                id="arrivalDate"
                name="arrivalDate"
                value={flightInput.arrivalDate}
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
            <button type="submit" className={cssStyle.AddBtn}>
              Add Flight
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};
