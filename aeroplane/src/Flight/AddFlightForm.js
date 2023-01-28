import { Fragment, useState } from "react";

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
  const [addFlightInput, setAddFlightInput] = useState({
    flightName: "",
    origin: "",
    destination: "",
    departureDate: "",
    returnDate: "",
    price: "",
  });

  const destinationPlace = originPlace.filter(
    (place) => place !== selectedOriginPlace
  );

  const onFlightSelectHandler = (event) => {
    setAddFlightInput((prevState) => {
      return;
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
  const onArrivalDateHandler = (event) => {};
  const onDepartureDateHandler = (event) => {};
  const onPriceHandler = (event) => {};
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Fragment>
      <form onSubmit={onSubmitHandler}>
        <h2>New Flight Details</h2>
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
          <button type="submit">Add Flight</button>
        </div>
      </form>
      {/* table =========================== */}
      <div>
        <h3>Flight Lists</h3>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Flight Name</th>
              <th>Depature</th>
              <th>Arrival</th>
              <th>Origin</th>
              <th>Destination</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};
