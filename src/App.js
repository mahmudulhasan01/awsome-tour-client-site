
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Admin from './Components/Admin/Admin';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import MenageOrder from './Components/MenageOrder/MenageOrder';
import MyBooking from './Components/MyBooking/MyBooking';
import Navbar from './Components/Navbar/Navbar';
import Notfound from './Components/NotFound/Notfound';
import PraivateRoute from './Components/PraivateRoute/PraivateRoute';
import TourSpot from './Components/TourSpot/TourSpot';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="">
     <AuthProvider>
     <BrowserRouter>
      <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/places/:id">
            <TourSpot></TourSpot>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PraivateRoute path="/mybooking">
            <MyBooking></MyBooking>
          </PraivateRoute>
          <PraivateRoute path="/admin">
            <Admin></Admin>
          </PraivateRoute>
          <PraivateRoute path="/menageorder">
            <MenageOrder></MenageOrder>
          </PraivateRoute>
          <Route exact path='*'>
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
