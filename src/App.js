
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import About from './components/About/About/About';

import NotFound from './components/NotFound/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
           <Home></Home>
        </Route>
        <Route path='/home'>
           <Home></Home>
        </Route>
        <Route path='/about'>
            <About></About>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='*'>
            <NotFound></NotFound>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
