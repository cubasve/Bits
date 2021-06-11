import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../context/User';
import { 
    AppBar, 
    Toolbar, 
    Typography, 
    Button,
    IconButton,
    MenuItem, 
    Menu 
    } from '@material-ui/core';
import LoopIcon from '@material-ui/icons/Loop';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1
    },
    appBar: {
        backgroundColor: 'maroon',
    }
}));

export default function Navbar() {
    const { user, handleLogout } = useContext(UserContext);

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = e => {
        setAnchorEl(e.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    let nav = user ? (
        <div>
            <Button style={{ color: 'white' }} disabled>
                {user.name}
            </Button>
            <IconButton
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleMenu}
                color='inherit'
            >
                <AccountCircle />
            </IconButton>

            <Menu 
                id='menu-appbar'
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horiontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
            >
                <MenuItem component={Link} to='/habitgenerator' onClick={handleClose}>
                    Habit List
                </MenuItem>
                <MenuItem component={Link} to='/' onClick={() => {
                    handleLogout();
                    handleClose();
                }}>
                    Log Out
                </MenuItem>
            </Menu>
        </div>
    ) : (
        <div>
            <Button color="inherit" component={Link} to='/login'>
                Login
            </Button>
            <Button color="inherit" component={Link} to='/signup'>
                Signup
            </Button>
        </div>
    );

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <Button edge='start' color='inherit' component={Link} to='/'>
                        <LoopIcon />
                    </Button>
                    <Typography variant='h6' className={classes.title}>
                        Bits
                    </Typography>
                    {nav}
                </Toolbar>
            </AppBar>
        </div>
    );
}