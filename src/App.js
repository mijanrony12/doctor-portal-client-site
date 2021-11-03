import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Homes/Home/Home';
import Appointment from './Pages/Appointments/Appointment/Appointment';
function App() {
  return (
    <div>
          <Router>
                  <Switch>
                    <Route path="/users">
                      <Home></Home>
                    </Route>
                    <Route exact path="/">
                      <Home />
                       </Route>
                    <Route path="/appointment">
                        <Appointment></Appointment>
                    </Route>
            </Switch>
         </Router>
    </div>
  );
}

export default App;
