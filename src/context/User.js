import React from 'react';
import userService from '../utils/userService';

const initialUserValue = userService.getUser();

const UserContext = React.createContext({
    user: initialUserValue,
    setUser: () => {},
});

export default UserContext;