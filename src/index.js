import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import {Provider} from 'react-redux';
import {Operation} from './store/reducers/app';
import thunk from 'redux-thunk'
import {compose} from 'recompose';
import {createApi} from './api/api';
import {applyMiddleware} from 'redux';
import rootReducer from './store/reducers/root-reducer';
import {changeAuthRequired, login} from './store/reducers/user';



const api = createApi();

let store = createStore(rootReducer, compose(applyMiddleware(thunk.withExtraArgument(api))));

store.dispatch(Operation.loadAllOffers())

store.dispatch(changeAuthRequired())
console.log(store.getState())

ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
