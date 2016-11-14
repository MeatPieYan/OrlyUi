import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { Provider } from "react-redux";

import Catagory from './component/pages/Catagory';
import Home from './component/pages/Home';
import Layout from './component/Layout';
import store from './store';

import './style/reset.scss';
import './style/main.scss';

const app = document.getElementById('app');

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
	    <Route path="/" component={Layout}>
	      <IndexRoute component={Home}></IndexRoute>
				<Route path="Catagory/:year" name="Catagory" component={Catagory}></Route>
	    </Route>
	  </Router>
	</Provider>, app);
