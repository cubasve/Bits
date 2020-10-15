import React from 'React';

const NavBar = props => {
    let nav = props.user ?
        <div>
            <Link to="" className="NavBar-link" onClick={props.handleLogout}>LOG OUT</Link>
            <span className="NavBar-welcome">WELCOME, {props.user.name}</span>
        </div>
        :
        <div>
            <Link to='/login' className="NavBar-link">LOG IN</Link>
            <Link to='/signup' className="NavBar-link">SIGN UP</Link>
        </div>

    return (<div className="NavBar">{nav}</div>);
}