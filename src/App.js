import "./App.css";
import AuthProvider from "./Components/Context/AuthProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Pages/Shared/Header/Header";
import Home from "./Components/Pages/Home/Home";
import PlaceBooking from "./Components/Pages/PlaceBooking/PlaceBooking";
import Login from "./Components/Pages/Login/Login/Login";
import ManageBooking from "./Components/Pages/ManageBooking/ManageBooking";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Spot from "./Components/Pages/Spot/Spot";
import SpotDetails from "./Components/Pages/Spot/SpotDetails/SpotDetails";
import AddVacationSpot from "./Components/Pages/AddVacationSpot/AddVacationSpot";
import Footer from "./Components/Pages/Shared/Footer/Footer";
import MyBookings from "./Components/Pages/MyBookings/MyBookings";
import NotFound from "./Components/Pages/NotFound/NotFound";

function App() {
  return (
    <AuthProvider>
      {/* Routing started */}
      <Router>
        {/* header */}
        <Header></Header>
        {/* Switching start */}
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/spot">
            <Spot></Spot>
          </Route>
          <PrivateRoute path="/addspot">
            <AddVacationSpot></AddVacationSpot>
          </PrivateRoute>
          <Route path="/spotdetails/:spotId">
            <SpotDetails></SpotDetails>
          </Route>
          <Route path="/spotdetails/:spotId">
            <SpotDetails></SpotDetails>
          </Route>
          <PrivateRoute path="/booking">
            <PlaceBooking></PlaceBooking>
          </PrivateRoute>
          <PrivateRoute path="/mybookings">
            <MyBookings></MyBookings>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/manage">
            <ManageBooking></ManageBooking>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
