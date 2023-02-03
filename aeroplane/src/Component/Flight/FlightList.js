import { Fragment } from "react"



export const FlightList=(props)=>{
    const flightInfo=props.flightInfo;
    return<Fragment>
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
            {flightInfo &&
              flightInfo.map((flightInfo, index) => {
                return (
                  <tr key={index}>
                    <td>{++index}</td>
                    <td>{flightInfo.flightName}</td>
                    <td>{flightInfo.departureDate}</td>
                    <td>{flightInfo.arrivalDate}</td>
                    <td>{flightInfo.origin}</td>
                    <td>{flightInfo.destination}</td>
                    <td>{flightInfo.price}</td>
                    <td></td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </Fragment>
}