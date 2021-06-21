import React, { createContext, useState } from "react";
import userService from "../utils/userService";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const initialUserValue = userService.getUser();
	const [user, setUser] = useState(initialUserValue);

	const handleLogout = () => {
		userService.logout();
		setUser(null);
	};

	const handleSignupOrLogin = () => {
		setUser(userService.getUser());
	};

	const context = {
		user,
		setUser,
		handleLogout,
		handleSignupOrLogin,
	};

	return (
		<UserContext.Provider value={context}>{children}</UserContext.Provider>
	);
};

// const UserContext = React.createContext({
// 	user: {},
// 	setUser: () => {},
// });

// export default UserContext;
