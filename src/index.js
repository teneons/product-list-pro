import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reduser from './reducers';

  //create store
  const store = createStore(reduser);

  //out action
  // store.subscribe(() => {
  //   console.log(`REDUX STORE: ${store.getState()}`)
  // })


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
