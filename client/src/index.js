import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import store from "./store";
import {Provider} from "react-redux";
import WeatherWidget from "./components/WeatherWidget";
import Layout from "./components/dummy/Layout";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout>
        <WeatherWidget />
      </Layout>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
