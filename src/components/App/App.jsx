import { match } from "assert";
import React from "react";
import Hotel from "../Hotel/Hotel";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainScreen from "c:/users/holyd/onedrive/desktop/myprojects/react/html/six-cities/src/components/mainscreen/mainscreen";
const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainScreen></MainScreen>
        </Route>
        <Route
          path="/offer/:id"
          exact
          render={({ match }) => {
            return <Hotel offerId={match.params.id}></Hotel>;
          }}
        ></Route>
        {/* <Route exact path ={`/favs`}
        render ={() => }></Route> */}
        <Route>
          <React.Fragment>
            <h1>
              404.
              <br />
              <small>Sorry, nothing found</small>
            </h1>
          </React.Fragment>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
