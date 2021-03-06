import React from 'react'
import { render } from 'react-dom'
import { hashHistory, Router,IndexRoute, Route, Link } from 'react-router'

import data from './techData.json';

import {} from './css/materialize.css';
import {} from 'materialize-css';
import {} from './css/main.css';

// console.log(data.frontEnd[0].links[0].name);

import App from './components/App';
import ItemDisplay from './components/ItemDisplay';
import ItemListDisplay from './components/ItemListDisplay';

function run() {
render((
  <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={() => <ItemDisplay data={data}/>} />
        <Route path="tech/:techName" component={(props) => <ItemListDisplay itemData={data} {...props}/>} />
      </Route>
  </Router>
), document.getElementById('root'))
}

const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) {
  run();
} else {
  window.addEventListener('DOMContentLoaded', run, false);
}
