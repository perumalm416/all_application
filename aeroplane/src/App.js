import "./App.css";
import { PassengerForm } from "./Common/Passenger/PassengerForm";
import { RootLayout } from "./Common/RootLayout/RootLayout";
import { AccountPage } from "./Component/Account/Account";
import { FlightSearchForm } from "./FlightDetails/FlightSearchForm";

function App() {
  return (
    <div className="">
      <RootLayout />
      <h2>Flight Travelling Booking Application</h2>
      <div className="">
        <FlightSearchForm />
      </div>
    </div>
  );
}

export default App;
