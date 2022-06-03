// import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";

import { FormattedMessage } from 'react-intl';

import React, { Component } from 'react';
import '../Auth/Login.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }

    }
    handleUserName = (event) => {
        this.setState({
            username: event.target.value,
        })
    }
    handlePassWord = (event) => {
        this.setState({
            password: event.target.value,
        })
    }
    handleSubmit = () => {
        console.log("username:", this.state.username, "password:", this.state.password)

    }
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
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Enter your username'
                                onChange={(event) => this.handleUserName(event)} />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter your password'
                                onChange={(event) => this.handlePassWord(event)} />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={() => { this.handleSubmit() }}>Log in</button>
                    </form>
                    <div className="signWith" style={{ textAlign: 'center' }}>
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