// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import userService from '../../utils/userService';
// import './LoginPage.css';
// // import { TextField, Button } from '@material-ui/core';

// export default class LoginPage extends Component {
//     state = {
//         email: '',
//         password: '',
//     }

//     handleChange = (e) => {
//         this.setState({ [e.target.name]: e.target.value });
//     }

//     handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await userService.login(this.state);
//             this.props.handleSignupOrLogin();
//             this.props.history.push('/habitgenerator');
//         } catch (err) {
//             alert('Invalid Credentials'); //use modal or toast in apps instead of alert
//             console.error(err);
//         }
//     }

//     render() {
//         return (
//             <div className="LoginPage">
//                 <header className="header-footer">Log In</header>
//                 <form className="form-horizontal" onSubmit={this.handleSubmit}>
//                     <div className="form-group">
//                         <div className="col-sm-12">
//                             {/* <TextField 
//                                 type="email"
//                                 variant="outlined"
//                                 className="form-control"
//                                 label="Email"
//                                 value={this.state.email}
//                                 name="email"
//                                 onChange={this.handleChange}

//                             /> */}
//                             <input 
//                                 type="email" 
//                                 className="form-control" 
//                                 placeholder="Email" 
//                                 value={this.state.email} 
//                                 name="email" 
//                                 onChange={this.handleChange} 
//                                 />
//                         </div>
//                     </div>

//                     <div className="form-group">
//                         <div className="col-sm-12">
//                             {/* <TextField 
//                                 type="password"
//                                 variant="outlined"
//                                 className="form-control"
//                                 label="Password"
//                                 value={this.state.password}
//                                 name="password"
//                                 onChange={this.handleChange}

//                             /> */}
//                             <input 
//                                 type="password" 
//                                 className="form-control" 
//                                 placeholder="Password" 
//                                 value={this.state.password} 
//                                 name="password" 
//                                 onChange={this.handleChange} 
//                                 />
//                         </div>
//                     </div>

//                     <div className="form-group">
//                         <div className="col-sm-12 text-center">
//                             <button className="btn btn-default">Log In</button>
//                             <br />
//                             <Link to="/">Cancel</Link>
//                             <br />
//                             <Link to="/signup">Don't have an account? Sign up!</Link>
//                         </div>
//                     </div>

//                 </form>
//             </div>
//         )
//     }
// }

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import userService from '../../utils/userService';

export default class LoginPage extends Component {
    state = {
        email: '',
        password: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            //Update to call login instead of signup
            await userService.login(this.state);
            this.props.handleSignupOrLogin();
            this.props.history.push('/');
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        return (
            <div className="LoginPage">
                <header className="header-footer">Log In</header>
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                value={this.state.email}
                                name="email"
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                value={this.state.password}
                                name="password"
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12 text-center">
                            <button className="btn btn-default">Log In</button>&nbsp;&nbsp;&nbsp;
                  <Link to="/">Cancel</Link>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}