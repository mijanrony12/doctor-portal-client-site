import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Homes/Home/Home';
function App() {
  return (
    <div>
          <Router>
                  <Switch>
                    <Route path="/users">
                      <Home></Home>
                    </Route>
                    <Route path="/">
                      <Home />
                    </Route>
            </Switch>
         </Router>
    </div>
  );
}

export default App;
