import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import Redirect from "./redirect";
import { Component, createContext, useContext } from "react";

export class App extends Component {
	componentDidMount() {
		

		console.log("loaded");
	}

	render() {
		return (
			<div className="App">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="login" element={<Login />} />
          <Route path="redirect" element={<Redirect />} />
				</Routes>
			</div>
		);
	}
}

export default App;
