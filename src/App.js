import "./App.css";
import { useState } from "react";
import Container from "./components/container/Container";
import Navigation from "./components/Navigation";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
    const [login, setLogin] = useState(false);

    return (
        <Router>
            <div className="App">
                {/* <Navigation /> */}
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/board" component={Container} />
                    <Route path="/register" component={Register} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
