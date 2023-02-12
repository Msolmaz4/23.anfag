import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/reset.css';

import App from './App';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './stores';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';


//burada redux bagliyacagiyz 
//thunk tanitiyoruz
 const store = createStore(rootReducer,applyMiddleware(thunk))

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    
  </React.StrictMode>
);


