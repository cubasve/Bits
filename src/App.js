import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import userService from "./utils/userService";
import NavBar from "./components/Navbar/Navbar";
import HabitListPage from "./pages/HabitListPage/HabitListPage";
import HabitEditPage from "./pages/HabitEditPage/HabitEditPage";
import HabitCreationPage from "./pages/HabitCreationPage/HabitCreationPage";

import { HabitProvider } from "./context/HabitContext";
import { UserProvider } from "./context/UserContext";

export default function App({ history }) {
	return (
		<div className="App">
			<UserProvider>
				<NavBar />

				<HabitProvider>
					<Switch>
						<Route exact path="/" render={() => <HomePage />} />

						<Route
							exact
							path="/habitgenerator"
							render={() =>
								userService.getUser() ? (
									<HabitCreationPage />
								) : (
									<Redirect to="/login" />
								)
							}
						/>

						<Route
							exact
							path="/habitgenerator/:id"
							render={({ location }) => <HabitListPage location={location} />}
						/>

						<Route
							exact
							path="/habitgenerator/:id/edit"
							render={(props) => <HabitEditPage {...props} />}
						/>

						<Route
							exact
							path="/signup"
							render={({ history }) => <SignupPage history={history} />}
						/>

						<Route
							exact
							path="/login"
							render={({ history }) => <LoginPage history={history} />}
						/>
					</Switch>
				</HabitProvider>
			</UserProvider>
		</div>
	);
}
