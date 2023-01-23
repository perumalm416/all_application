
import './App.css';
import { RootLayout } from './Common/RootLayout/RootLayout';
import { AccountPage } from './Component/Account/Account';
import { FlightSearchForm } from './FlightDetails/FlightSearchForm';

function App() {
  return (
    <div className="">
      <RootLayout/>
      <h2>Flight Travelling Booking Application</h2>
      {/* <AccountPage/> */}
      <FlightSearchForm/>
    </div>
  );
}

export default App;
