import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import createStore from './createStore';
import manageArtwork from './reducers/manageArtwork';
import { BrowserRouter as Router} from 'react-router-dom';

const store = createStore(manageArtwork);

function render() {
    ReactDOM.render(
        <Router>
       
      <App store={store} />
      </Router>,
      document.getElementById('root')
    );
  };
  
  export const renderer = { render: render };
  
  store.dispatch({ type: '@@init' });

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
