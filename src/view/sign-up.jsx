import React, {Component} from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class Signup extends Component {
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
                            <div className="col-sm-12 text-center flex-container signup_step no-pad">
                                <div className="logo">
                                    <Link to="/"><img src={require('./../assets/images/Kiip_iN_logo.png')} /></Link>
                                </div>
                                <div className="login-border">
                                <form className="login-section animated" id="animationSandbox">            
                                    <div className="login-form row step-one" id="step-1"> 
                                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 signup-content">
                                        <img src={require('./../assets/images/happy-person-img.png')} /> 
                                        <h2>Welcome onboard (First name) !</h2>
                                        <p>Tell us a bit more about you so that we can better help you grow your audience</p>
                                    </div>  
                                    <div className="col-12 col-sm-12 col-md-8 col-lg-8 signup-form"> 
                                        <div className="form-group tab-list">
                                            <ul className="list-inline first-row">
                                            <li>You are an</li>
                                            <li className="active">
                                                <input type="radio" id="radio-1-1" name="radio-1-set" className="regular-radio" checked />
                                                <label for="radio-1-1"><span>Individual</span></label>
                                            </li>
                                            <li>
                                                <input type="radio" id="radio-1-2" name="radio-1-set" className="regular-radio" />
                                                <label for="radio-1-2"><span>Professional</span></label>
                                            </li>
                                            <li>
                                                <input type="radio" id="radio-1-31" name="radio-1-set" className="regular-radio" />
                                                <label for="radio-1-31"><span>Company</span></label>
                                            </li>
                                            </ul>
                                            <ul className="list-inline second-row">
                                            <li>operating in</li>
                                            <li>
                                                <select className="form-control">
                                                <option>Industry</option>  
                                                </select>
                                            </li>
                                            <li>and located in</li>
                                            <li>
                                                <input type="text" name="" placeholder="City" className="city_input" />
                                            </li>
                                            <li>
                                                <select className="form-control">
                                                <option>Country</option>  
                                                </select>
                                            </li>
                                            </ul>
                                            <ul className="list-inline third-row">
                                            <li>Customize your branding with</li>
                                            <li><input type="text" name="" placeholder="Your brand name" className="form-control" /></li>
                                            <li>and a nice logo</li>
                                            </ul>
                                            
                                            
                                        </div>
            
                                        <div className="form-group row file_upload">
                                            <div className="col-sm-12">
                                            <label className="custome-upload" for="upload">
                                                <input type="file" className="form-control" id="upload" placeholder="Full Name" />
                                                <img src={require('./../assets/images/upload-icon.png')} id="crop_img" width="82" height="82" class="img-circle" />
                                            </label>
                                            </div>
                                        </div>
                                        <div className="form-group no_height">
                                            <Link to="/dashboard" className="btn btn-primary login-btn">Let’s go</Link>
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