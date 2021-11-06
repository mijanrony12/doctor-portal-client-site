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
import Register from './Pages/LoginPage/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRouter from './Pages/LoginPage/PrivateRouter/PrivateRouter';
import DashBord from './Pages/DashBord/DashBord/DashBord';
function App() {
  return (
    <div>
         <AuthProvider>
                   <Router>
                        <Switch>
                          <Route exact path="/">
                            <Home></Home>
                          </Route>
                          <Route exact path="/home">
                            <Home />
                            </Route>
                          <PrivateRouter path="/appointment">
                              <Appointment></Appointment>
                          </PrivateRouter>
                          <PrivateRouter path="/dashbord">
                              <DashBord></DashBord>
                          </PrivateRouter>
                          <Route path="/login">
                              <Login></Login>
                          </Route>
                          <Route path="/register">
                              <Register></Register>
                          </Route>
                    </Switch>
             </Router>
       </AuthProvider>
    </div>
  );
}

export default App;
