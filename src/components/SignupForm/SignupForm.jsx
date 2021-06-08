import React, { useContext, useState, Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService.js';
import UserContext from '../../context/User';

export default function SignupForm({ history, updateMessage }) {
    const [ credentials, setCredentials ] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
    });

    const { handleSignupOrLogin } = useContext(UserContext);

    const handleChange = (e) => {
        updateMessage('');
        console.log('credentials: ', credentials);
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userService.signup(credentials);
            handleSignupOrLogin();
            history.push('/');
        } catch (err) {
            //Invalid user data (probably duplicate email)
            updateMessage(err.message);
        }
    }
    
    function isFormInvalid() {
        return !(
            credentials.name &&
            credentials.email &&
            credentials.password === credentials.passwordConfirmation
        );
    }

    return (
        <>
            <header className="header-footer">Sign Up</header>

            <form className="form-horizontal" onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            value={credentials.name}
                            name="name"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            value={credentials.email}
                            name="email"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={credentials.password}
                            name="password"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm Password"
                            value={credentials.passwordConfirmation}
                            name="passwordConfirmation"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12 text-center">
                        <button className="btn btn-default" disabled={isFormInvalid()}>
                            Sign Up
                        </button>
                        &nbsp;&nbsp;
                        <Link to="/">Cancel</Link>
                    </div>
                </div>
            </form>
        </>
    )
}

// export default class SignupForm extends Component {
//     state = {
//         name: '',
//         email: '',
//         password: '',
//         passwordConfirmation: '',
//     }

//     handleChange = (e) => {
//         this.props.updateMessage('');
//         this.setState({
//             [e.target.name]: e.target.value,
//         });
//     }

//     handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await userService.signup(this.state);
//             this.props.handleSignupOrLogin();
//             //Successfully signed up 
//             this.props.handleSignupOrLogin();
//             this.props.history.push('/');
//         } catch (err) {
//             //Invalid user data (probably duplicate email)
//             this.props.updateMessage(err.message);
//         }
//     }

//     isFormInvalid() {
//         return !(
//             this.state.name &&
//             this.state.email &&
//             this.state.password === this.state.passwordConfirmation
//         );
//     }

//     render() {
//         return (
//             <div>
//                 <header className="header-footer">Sign Up</header>
//                 <form className="form-horizontal" onSubmit={this.handleSubmit}>
//                     <div className="form-group">
//                         <div className="col-sm-12">
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 placeholder="Name"
//                                 value={this.state.name}
//                                 name="name"
//                                 onChange={this.handleChange}
//                             />
//                         </div>
//                     </div>
//                     <div className="form-group">
//                         <div className="col-sm-12">
//                             <input
//                                 type="email"
//                                 className="form-control"
//                                 placeholder="Email"
//                                 value={this.state.email}
//                                 name="email"
//                                 onChange={this.handleChange}
//                             />
//                         </div>
//                     </div>
//                     <div className="form-group">
//                         <div className="col-sm-12">
//                             <input
//                                 type="password"
//                                 className="form-control"
//                                 placeholder="Password"
//                                 value={this.state.password}
//                                 name="password"
//                                 onChange={this.handleChange}
//                             />
//                         </div>
//                     </div>
//                     <div className="form-group">
//                         <div className="col-sm-12">
//                             <input
//                                 type="password"
//                                 className="form-control"
//                                 placeholder="Confirm Password"
//                                 value={this.state.passwordConfirmation}
//                                 name="passwordConfirmation"
//                                 onChange={this.handleChange}
//                             />
//                         </div>
//                     </div>
//                     <div className="form-group">
//                         <div className="col-sm-12 text-center">
//                             <button className="btn btn-default" disabled={this.isFormInvalid()}>
//                                 Sign Up
//               </button>
//               &nbsp;&nbsp;
//               <Link to="/">Cancel</Link>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         );
//     }
// }