import React, {Component} from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class Login extends Component {
    componentDidMount() {
        document.body.classList.add('before_login');
    }
    componentWillUnmount() {
        document.body.classList.remove('before_login')
    }
    render() {
        return (
            <div className="intro">
                <div className="intro-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 text-center flex-container no-pad">
                                <div className="logo">
                                    <a href="#"><img src={require('./../assets/images/Kiip_iN_logo.png')} /></a>
                                </div>
                                <div className="login-border">
                                    <form className="login-section animated" id="animationSandbox">
                                        <div className="login-form row" id="step-1"> 
                                            <div className="col-12 col-sm-12 col-md-5 col-lg-5 signup-content"> 
                                                <h2>Start engaging with your visitors today</h2>
                                                <p>It’s free</p>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-7 col-lg-7 signup-form">
                                            <div className="form-group text-left">
                                                <p className="signup-title">Sign In or <Link to="./signup">Sign Up</Link></p>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-sm-6 user-input">
                                                    <input type="text" className="form-control" id="inputEmail3" placeholder="First Name" />
                                                    <span className="focus_sprint"></span>
                                                </div>
                                                <div className="col-sm-6">
                                                    <input type="text" className="form-control pad_remove" id="inputEmail3" placeholder="Last Name" />
                                                </div>
                                            </div>
                                            <div className="form-group row email-input">
                                                <div className="col-sm-12">
                                                <input type="email" className="form-control" id="inputPassword3" placeholder="Email address" />
                                                <span className="focus_sprint"></span>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-sm-6 password-input">
                                                <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
                                                <span className="focus_sprint"></span>
                                                </div>

                                                <div className="col-sm-6">
                                                <input type="password" className="form-control pad_remove" id="inputPassword3" placeholder="Confirm Password" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="checkbox checkbox-info col-sm-12">
                                                    <input type="checkbox" id="checkbox-1-1" className="regular-checkbox" />
                                                    <label for="checkbox-1-1"></label>
                                                    <label for="checkbox-1-1"><span>I agree all statements in</span> <a href="#"> terms of services</a></label>
                                                </div>
                                            </div>
                                            <div className="form-group no_height">
                                                    <Link to="/dashboard" className="btn btn-primary login-btn">Create account</Link>
                                                <small>No credit card required</small>
                                            </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
}