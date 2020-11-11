import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import {Provider} from 'react-redux';


  const initState = [{id: 123, title: 'Product 1', description: 'asdadadasdd', price: '1010', img: 'img', top: false}, 'n2']

  //func handler
  function productArr(state = initState, action) {
    if(action.type === 'ADD_PRODUCT') {
      return[
        ...state, action.payload
      ]
    }
    return state
  }

  //create store
  const store = createStore(productArr);

  //out action
  store.subscribe(() => {
    console.log(`REDUX STORE: ${store.getState()}`)
  })

  //add item
  store.dispatch({type: 'ADD_PRODUCT', payload: ''})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
