import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../context/User';

const Navbar = (/*{ handleLogout }*/) => {
    
    const { user, handleLogout } = useContext(UserContext);
    //console.log('user', user);

    let nav = user ?
        <div>
            <Link to='/' className='NavBar-link' onClick={handleLogout}>LOG OUT</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='/habitgenerator' className='NavBar-link'>HABIT GENERATOR</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <span className='NavBar-welcome'>WELCOME, {user.name}</span>
        </div>
        :
        <div>
            <Link to='/login' className='NavBar-link'>LOG IN</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
            {/* &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='/habitgenerator' className='NavBar-link'>HABIT GENERATOR</Link> */}
        </div>;

    return (
        <div className='NavBar'>
            {nav}
        </div>
    )

}

export default Navbar;