import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import createStore from './createStore';
import manageArtwork from './reducers/manageArtwork';
import { BrowserRouter as Router} from 'react-router-dom';
import { createStore } from 'redux';
//import thunk from 'redux-thunk';
import { Provider } from 'react-redux'; 

const store = createStore(manageArtwork);

    ReactDOM.render(      
       <Provider store={store}>
        <Router>
          
            <App/>
          
        </Router>
        </Provider>
        ,
      document.getElementById('root')
    );
  
  store.dispatch({ type: '@@init' });

serviceWorker.unregister();
