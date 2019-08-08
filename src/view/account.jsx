import React, {Component} from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Header from '../component/header/header';

export default class Account extends Component {
    render() {
        return(
            <>
            <Header/>
            <section className="mobile-p-15 dashboard-pad">
                <div className="container template-page">    
                    <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <h4 className="starting-title text-center">Account</h4>
                    </div> 
                    </div>
                    {/* <!-- // Filter // --> */}
                    <div className="row search-height">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <ul id="clothing-nav" className="nav nav-tabs account_page" role="tablist">
                
                        <li className="nav-item">
                            <Link className="nav-link active show" to="#home" id="home-tab" role="tab" data-toggle="tab" aria-controls="home" aria-expanded="true" aria-selected="true">Personal information</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="#hats" role="tab" id="hats-tab" data-toggle="tab" aria-controls="hats" aria-selected="false">Business information</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="#plan" role="tab" id="plan-tab" data-toggle="tab" aria-controls="plan" aria-selected="false">Current Plan</Link>
                        </li>

                        </ul>
                        {/* <!-- Content Panel --> */}
                        <div id="clothing-nav-content" className="tab-content custom_tab">

                        <div role="tabpanel" className="tab-pane fade active show" id="home" aria-labelledby="home-tab">
                            <form className="account-form">
                            <div className="form-group row">
                                <label htmlFor="staticEmail" className="col-sm-4 col-form-label">First name</label>
                                <div className="col-sm-8">
                                    <input type="text" name="" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputPassword" className="col-sm-4 col-form-label">Last name</label>
                                <div className="col-sm-8">
                                    <input type="text" name="" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group row validate_msg">
                                <label htmlFor="inputPassword" className="col-sm-4 col-form-label">Email</label>
                                <div className="col-sm-8">
                                    <input type="email" className="form-control" id="inputEmail" placeholder="" data-error="Bruh, that email address is invalid" required="" aria-required="true"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputPassword" className="col-sm-4 col-form-label">Password</label>
                                <div className="col-sm-8">
                                    <button type="button" className="btn btn-primary change_password_btn" data-toggle="modal" data-target="#exampleModal">Change password</button>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputPassword" className="col-sm-4 col-form-label">Phone number</label>
                                <div className="col-sm-8">
                                    <input type="tel" className="form-control" id="inputPassword" placeholder=""/>
                                </div>
                            </div>

                            {/* <!-- // Personal Informaton // --> */}
                            
                            <hr className="form_hr"/>
                            <div className="form-group row">
                                <h4 className="form_sub_title col-sm-12">Personal address</h4>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputPassword" className="col-sm-4 col-form-label">Address</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="inputPassword" placeholder=""/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputPassword" className="col-sm-4 col-form-label">City</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="inputPassword" placeholder=""/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputPassword" className="col-sm-4 col-form-label">Postal Code</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="inputPassword" placeholder=""/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputPassword" className="col-sm-4 col-form-label">Country</label>
                                <div className="col-sm-8">
                                <select className="form-control custome_select2">
                                    <option></option>
                                    <option value="usa">United States</option>
                                    <option value="india">India</option>
                                    <option value="uk">United Kingdom</option>
                                </select>
                                </div>
                            </div>

                            {/* <!-- // Personal Informaton // --> */}
                            
                            <hr className="form_hr"/>
                            <div className="form-group row">
                                <h4 className="form_sub_title col-sm-12">Billing address</h4>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputPassword" className="col-sm-4 col-form-label">Address</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="inputPassword" placeholder=""/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputPassword" className="col-sm-4 col-form-label">City</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="inputPassword" placeholder=""/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputPassword" className="col-sm-4 col-form-label">Postal Code</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="inputPassword" placeholder=""/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputPassword" className="col-sm-4 col-form-label">Country</label>
                                <div className="col-sm-8">
                                <select className="form-control custome_select2">
                                    <option></option>
                                    <option value="usa">United States</option>
                                    <option value="india">India</option>
                                    <option value="uk">United Kingdom</option>
                                </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputPassword" className="col-sm-4 col-form-label">VAT Number</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="inputPassword" placeholder=""/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputPassword" className="col-sm-4 col-form-label">Invoice Email Address</label>
                                <div className="col-sm-8">
                                    <input type="email" className="form-control" id="inputPassword" placeholder=""/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-sm-12 text-center">
                                    <button type="button" className="btn btn-secondary verify_btn plan_btn disable">Update</button>
                                    <span className="close-account-text">Close account</span>
                                </div>
                            </div>
                            </form>
                        </div>

                        <div role="tabpanel" className="tab-pane" id="hats" aria-labelledby="hats-tab">
                            <form className="account-form">
                            <div className="form-group row">
                                <label htmlFor="staticEmail" className="col-sm-4 col-form-label">Account type</label>
                                <div className="col-sm-8">
                                <select className="form-control custom__select">
                                    <option>Account type1</option>
                                    <option>Account type2</option>
                                    <option>Account type3</option>
                                    <option>Account type4</option>
                                </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputPassword" className="col-sm-4 col-form-label">Industry</label>
                                <div className="col-sm-8">
                                <select className="form-control custom__select">
                                    <option>Industry1</option>
                                    <option>Industry2</option>
                                    <option>Industry3</option>
                                    <option>Industry4</option>
                                </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputPassword" className="col-sm-4 col-form-label">City</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="inputPassword" placeholder=""/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputPassword" className="col-sm-4 col-form-label">Country</label>
                                <div className="col-sm-8">
                                <select className="form-control custom__select">
                                    <option>Country1</option>
                                    <option>Country2</option>
                                    <option>Country3</option>
                                    <option>Country4</option>
                                </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputPassword" className="col-sm-4 col-form-label">Brand name</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="inputPassword" placeholder=""/>
                                </div>
                            </div>
                            <div className="form-group row file_upload">
                                <label htmlFor="inputPassword" className="col-sm-4 col-form-label label-logo">Logo</label>
                                <div className="col-sm-8">
                                <label className="custome-upload" htmlFor="upload">
                                    <input type="file" className="form-control" id="upload" placeholder="Full Name"/>
                                    <img src={require('../assets/images/upload-icon.png')} id="crop_img" width="82" height="82" className="img-circle"/>
                                </label>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-12 text-center">
                                    <button type="button" className="btn btn-secondary verify_btn plan_btn disable">Update</button>
                                </div>
                            </div>
                            </form>
                        </div>

                        <div role="tabpanel" className="tab-pane" id="plan" aria-labelledby="plan-tab">
                            <form className="account-form plan_change">
                            <div className="form-group row">
                                <label htmlFor="inputPassword" className="col-sm-4 col-form-label">Plan name:</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="inputPassword" placeholder="" value="Basic" readOnly="readonly"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputPassword" className="col-sm-4 col-form-label">Payment type:</label>
                                <div className="col-sm-8">
                                <select className="form-control custom__select" disabled="disabled">
                                    <option>Daily</option>
                                    <option>Monthly</option>
                                    <option>Yearly</option>
                                </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputPassword" className="col-sm-4 col-form-label">Plan price:</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="inputPassword" placeholder="" value="Based on Monthly / Yearly (include discount rate)" readOnly="readonly"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputPassword" className="col-sm-4 col-form-label">Plan expire date:</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="inputPassword" placeholder="" value="25 Aug 2019" readOnly="readonly" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputPassword" className="col-sm-4 col-form-label">Payment date:</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="inputPassword" placeholder="" value="1st of each month" readOnly="readonly"/>
                                </div>
                            </div>
                            <div className="form-group row plan_change_btn">
                                <div className="col-sm-12 text-center">
                                <Link to="/plan">
                                    <button type="button" className="btn btn-secondary verify_btn plan_btn remove_attr">Change plan</button>
                                </Link>
                                </div>
                            </div>
                            </form>
                        </div>

                        </div>

                        </div>



                    </div>
                    </div>
                    {/* <!-- // Filter End // --> */}
                
                </section>
            </>
    )}
}