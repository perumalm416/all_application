import { Fragment, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { RouterConfigure } from "./Router";
import "./App.css";
import { useDispatch } from "react-redux";
import { flightAction } from "./Store/FlightSlice";


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const flightInfo = async () => {
      try {
        const response = await fetch(
          "https://aeroplane-application-default-rtdb.firebaseio.com/add-flight-info.json"
        );
        const responseInfo = await response.json();
        const flightList = [];
        for (let key in responseInfo) {
          flightList.push({
            flightName: responseInfo[key].flightName,
            origin: responseInfo[key].origin,
            destination: responseInfo[key].destination,
            departureDate: responseInfo[key].departureDate,
            arrivalDate: responseInfo[key].arrivalDate,
            price: responseInfo[key].price,
          });
        }
       
        dispatch(flightAction.newFlightInfo(flightList));
      
      } catch (error) {
        console.log(" Fetch Data from Server was Failed!!!");
      }
    };
    flightInfo();
  }, []);
  return (
    <Fragment>
      <div className="background">
        <RouterProvider router={RouterConfigure} />
      </div>
    </Fragment>
  );
}
export default App;
