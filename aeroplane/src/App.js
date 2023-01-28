import { RootLayout } from "./Common/RootLayout/RootLayout";
import { AddFlightForm } from "./Flight/AddFlightForm";
import { FlightSearchForm } from "./Flight/FlightDetails/FlightSearchForm";

function App() {
  return (
    <div className="">
      <RootLayout />
      <h2>Flight Travelling Booking Application</h2>
      <div className="">
        <AddFlightForm />
      </div>
    </div>
  );
}

export default App;
