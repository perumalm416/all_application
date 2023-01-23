import { Fragment, useState } from "react";

export const FlightSearchForm = () => {
  const [selectedOriginPlace, setSelectedOriginPlace] = useState();
  const originPlace = [
    "Chennai",
    "Salem",
    "Coimbatore",
    "Madurai",
    "Bangalore",
    "Mumbai",
    "Delhi",
  ];
  const destinationPlace = originPlace.filter(
    (place) => place !== selectedOriginPlace
  );
  console.log(destinationPlace);

  const onSelectedOriginPlace = (event) => {
    setSelectedOriginPlace(event.target.value);
  };
  const onSelectedODestinationPlace = (event) => {};
  return (
    <Fragment>
      <div>
        <h3>Round trip</h3>
      </div>
      <form>
      
        <div>
          <label htmlFor="originPlace">From</label>
          <select
            id="originPlace"
            type="dropdown"
            name="originPlace"
            onClick={onSelectedOriginPlace}
          >
            <option disabled>Setect Origin</option>
            {originPlace.map((place) => (
              <option value={place}>{place}</option>
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
            onClick={onSelectedODestinationPlace}
          >
            <option disabled>Select Destination</option>
            {destinationPlace.map((place) => (
              <option value={place}>{place}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="noOfPassengers">To</label>
          <input
            id="noOfPassengers"
            type="number"
            min="1"
            max="60"
            placeholder="No of passengers"
          />
        </div>
        <div>
          <label htmlFor="departureDate">Departure</label>
          <input id="departureDate" type="date" />
        </div>
        <div>
          <label htmlFor="returnDate">Return</label>
          <input id="returnDate" type="date" />
        </div>
        <div>
          <label htmlFor="classType">Travel Class</label>
          <select id="classType" type="dropdown" name="classType">
            <option disabled>Class Type</option>
            <option value="First Class">First Class</option>
            <option value="Business Class">Business Class</option>
            <option value="Economy Class">Economy Class</option>
          </select>
        </div>
        <div>
          <button type="submit" id="searchFlight">Search Flight</button>
        </div>
      </form>
    </Fragment>
  );
};
