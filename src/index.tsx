import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {Provider} from "react-redux";
import {store} from "./module/redux/store";
import { persistStore } from "redux-persist";
import {PersistGate} from "redux-persist/integration/react";

export let persistor = persistStore(store);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>


);

