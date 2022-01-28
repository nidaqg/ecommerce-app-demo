import React from 'react';
import ReactDOM from 'react-dom';

//import provider and store to wrap app in so entire app has access to redux
//store. similar to context API
import { Provider } from "react-redux";
import {store, persistor} from './Redux/Store';
//import what we need from redux persist
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
