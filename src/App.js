import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Homes/Home/Home';
import Appointment from './Pages/Appointments/Appointment/Appointment';
import Login from './Pages/LoginPage/Login/Login';
function App() {
  return (
    <div>
          <Router>
                  <Switch>
                    <Route path="/">
                      <Home></Home>
                    </Route>
                    <Route exact path="/home">
                      <Home />
                       </Route>
                    <Route path="/appointment">
                        <Appointment></Appointment>
                    </Route>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
            </Switch>
         </Router>
    </div>
  );
}

export default App;
