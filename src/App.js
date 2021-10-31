import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import NotFound from './components/NotFound/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login/Login';
import Header from './components/Home/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import Booking from './components/Booking/Booking';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Shipping from './components/Shipping/Shipping';

function App() {
  return (
   <AuthProvider>
      <BrowserRouter>
        <Header></Header>
      <Switch>
        <Route exact path='/'>
           <Home></Home>
        </Route>
        <Route path='/home'>
           <Home></Home>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <PrivateRoute path="/booking/:serviceId">
           <Booking></Booking>
        </PrivateRoute>
        <PrivateRoute path="/shipping">
           <Shipping></Shipping>
        </PrivateRoute>
        <Route path='*'>
            <NotFound></NotFound>
        </Route>
      </Switch>
    </BrowserRouter>
   </AuthProvider>
  );
}

export default App;
