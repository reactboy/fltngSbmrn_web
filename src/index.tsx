import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import * as serviceWorker from "./serviceWorker";

import { Home, Feeds, Bookmarks, NotFound } from "./sections";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/feeds" component={Feeds} />
                <Route exact path="/bookmarks" component={Bookmarks} />
                <Route path="/not-found" component={NotFound} />
            </Switch>
        </Router>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
