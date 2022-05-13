import React, { Component } from 'react';
import '../Auth/Login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Login extends Component {
    render() {
        return (
            <div className='Login'>
                <div className='formLogin'>
                    <div className='title'>
                        Login
                    </div>
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Username</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your username' />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter your password' />
                        </div>
                        <button type="submit" className="btn btn-primary">Log in</button>
                    </form>
                    <div className="signWith">
                        <p>
                            Or sign in with:
                        </p>
                        <div className="socialMedia">
                            <a class="socialMediaIcon">
                                <i class="fa-brands fa-facebook-f facebook-icon"></i>
                            </a>
                            <a className="socialMediaIcon ">
                                <i class="fa-brands fa-twitter twitter-icon"></i>
                            </a>
                            <a className="socialMediaIcon me-0">
                                <i className="fa-brands fa-google-plus-g google-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;