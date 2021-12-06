import logo from "./logo.svg";
import React from "react";
import MainScreen from "./components/MainScreen/MainScreen";
import MainEmpty from "./components/MainEmpty/MainEmpty";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import SignIn from "./components/SignIn/SignIn";
import {Route, Switch} from "react-router";
import Hotel from "./components/Hotel/Hotel";
import {BrowserRouter} from 'react-router-dom';
import MainFooter from "./components/MainFooter/MainFooter";

function App(props) {
  console.log(props);
  return (
    <BrowserRouter>
      <Switch>
        <Route path={`/`} exact >
          {!props.user.isAuthorizationRequired ? <MainScreen></MainScreen> : <SignIn />}
        </Route>
        <Route path={`/offer/:id`} exact render={({match}) => {
          return (
            <Hotel offerId={match.params.id}></Hotel>
          );
        }} />
      </Switch>
      <MainFooter></MainFooter>
    </BrowserRouter>
  )
}
function mapStateToProps(state) {
  return {
    user: state.user,
  };
}
function mapDispatchToProps() {
  return {};
}
App.propTypes = {
  user: PropTypes.object,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
