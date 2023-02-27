import { Fragment } from "react";
import { useSelector } from "react-redux";

export const SearchFlightInfo = () => {
  const flightCtx = useSelector((state) => state.flightSearch);

  const {
    origin,
    destination,
    noOfPassengers,
    departureDate,
    returnDate,
    classtype,
  } = flightCtx.flightSearchInfo;
  return (
    <Fragment>
      <div>Search Flight Info</div>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>No of passengers</th>
            <th>Departure date</th>
            <th>Return date</th>
            <th>Class type</th>
            <th></th> 
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{origin}</td>
            <td>{destination}</td>
            <td>{noOfPassengers}</td>
            <td>{departureDate}</td>
            <td>{returnDate}</td>
            <td>{classtype}</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};
