import React, {Component} from 'react';
import Header from '../component/header/header';
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class Plan extends Component{
    render() {
        return(
        <>
        <Header/>
        <section className="mobile-p-15 dashboard-pad blue_section">
            <div className="container">
                <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div className="fair-price-box text-center">
                    <h1>Fair and simple pricing</h1>
                    <h4>Pay only if we help you grow your business</h4>

                    <button type="button" className="btn btn-default try_free_btn">Try it for free</button>
                    <small>No credit card required</small>
                    <p className="trial_text">14 days free trial</p>

                    <div className="audience_target height_input_box"> 
                        <label className="active_label">Monthly</label>
                        <label className="switch">
                        <input type="checkbox" checked />
                        <span className="slider round"></span>
                        </label>
                        <label className="active_label">Yearly</label>
                    </div>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <ul className="plan_list d-flex align-items-center">
                    <li>
                        <div className="plan_packege left_corner">
                        <div className="plan-description">
                            <span className="icon occasional-user"></span>
                            <h5>OCCASIONAL USER</h5>
                            <p><strong>Free</strong> for ever</p>
                            <span>10 leads per month</span>
                        </div>
                        <Link to="/">
                            <button type="button" className="btn btn-default plan_select">Select this plan</button>
                        </Link>
                        </div>
                    </li>
                    <li>
                        <div className="plan_packege top_corner">
                        <span className="icon professional-user"></span>
                        <h5>PROFESSIONAL</h5>
                        <p><strong>19,80$</strong> per month</p>
                        <span>100 leads per month</span>
                        <Link to="/">
                            <button type="button" className="btn btn-default plan_select">Start free trial</button>
                        </Link>
                        </div>
                    </li>
                    <li>
                        <div className="plan_packege left_corner">
                        <span className="icon business-user occasional-user"></span>
                        <h5>BUSINESS</h5>
                        <p><strong>49,60$</strong> per month</p>
                        <span>1000 leads per month</span>
                        <Link to="/">
                            <button type="button" className="btn btn-default plan_select">Start free trial</button>
                        </Link>
                        </div>
                    </li>
                    <li>
                        <div className="plan_packege top_corner">
                        <span className="icon corporate-user professional-user"></span>
                        <h5>CORPORATE</h5>
                        <p><strong>199,40$</strong> per month</p>
                        <span>10000 leads per month</span>
                        <Link to="/">
                            <button type="button" className="btn btn-default plan_select">Start free trial</button>
                        </Link>
                        </div>
                    </li>
                    <li>
                        <div className="plan_packege top_corner">
                        <span className="icon paypreuse-user professional-user"></span>
                        <h5>PAY-PER-USE</h5>
                        <p><strong>0,50$ </strong> per lead</p>
                        <span>Unlmited number of</span>
                        <Link to="/">
                            <button type="button" className="btn btn-default plan_select">Start free trial</button>
                        </Link>
                        </div>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </section>

            <section className="mobile-p-15 dashboard-pad collect_section">
                <div className="container">
                    <div className="row">
                    <div className="col-12 col-md-12 col-sm-12 col-xl-12 col-lg-12">
                        <div className="collect_decs text-center">
                        <h3>Plan to collect more than 10000 leads a month ?</h3>
                        <p>We can find the right pricing strategy for you</p>
                        <Link to="/" className="btn btn-default btn_green" data-toggle="modal" data-target="#myModal2">Contact us</Link>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <section className="mobile-p-15 dashboard-pad kick_start collect_section">
                <div className="container">
                    <div className="row">
                    <div className="col-12 col-md-12 col-sm-12 col-xl-12 col-lg-12">
                        <div className="collect_decs text-center">
                        <h3>Don’t know where to start to launch your offline lead collection marketing campaign ?</h3>
                        <p>We have the right program to help you kickstart your program</p>
                        </div>
                    </div>
                    </div>
                    <div className="row kickstart_box">
                    <div className="col-12 col-md-12 col-sm-12 col-xl-12 col-lg-12">
                        <h2><img src={require('../assets/images/kickstart.png')} />Kickstart your campaign <span><small className="from_text">From</small>1000 $<br/><small className="one-off_text">One-off</small></span></h2>
                    </div>
                    <div className="col-12 col-md-9 col-sm-9 col-xl-9 col-lg-9">
                        <div className="flex_wrap">
                        <ul className="list-inline">
                            <li>Build campaign marketing content</li>
                            <li>Design auto</li>
                            <li>Design support</li>
                        </ul>
                        <ul className="list-inline">
                            <li>Campaign optimisation</li>
                            <li>Onboarding and monthly call</li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-sm-12 col-xl-12 col-lg-12 text-right">
                        <Link to="/" className="btn btn-default btn_green" data-toggle="modal" data-target="#myModal2">Contact us</Link>
                    </div>
                    </div>
                </div>
            </section>

            <section className="mobile-p-15 dashboard-pad plan_detail_section">
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="plan_detail_box">
                        <h3 className="text-center">Packages comparison</h3>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="plan_detail_box">
                        <ul className="list-inline outer_list">
                            <li className="">
                            <ul className="list-inline inner_list">
                                <li><h4>OCCASIONAL USER</h4></li>
                                <li data-index="0" className="color_text feature-list">Sign-Up</li>
                                <li data-index="1" className="bgcolor_text feature-list">FREE for ever</li>
                                <li data-index="2" className="feature-list">0,10$ per lead over plan</li>
                                <li data-index="3" className="feature-list">200 Mega octet</li>
                                <li data-index="4" className="feature-list">20 leads per month</li>
                                <li data-index="5" className="feature-list">Marketing document</li>
                                <li data-index="6" className="disable_list feature-list">Marketing document builder</li>
                                <li data-index="7" className="feature-list">Export leads</li>
                                <li data-index="8" className="feature-list">Export leads</li>
                                <li data-index="9" className="disable_hover"><a href="upgrade_step_1.html" class="btn btn-default login-btn">Sign-Up</a></li>
                                <li data-index="10" className="disable_list feature-list">Auto-response builder</li>
                                <li data-index="11" className="disable_list feature-list">Attach document in auto-response</li>
                                <li data-index="12" className="disable_list feature-list">Artificial Intelligence to parse email content</li>
                                <li data-index="13" className="disable_list feature-list">Own domain emails</li>
                            </ul>
                            </li>
                            <li className="">
                            <ul className="list-inline inner_list">
                                <li className=""><h4>PROFESSIONAL</h4></li>
                                <li data-index="0" className="color_text feature-list">Start free trial</li>
                                <li data-index="1" className="bgcolor_text feature-list">19,80$ per month</li>
                                <li data-index="2" className="feature-list">0,10$ per lead over plan</li>
                                <li data-index="3" className="feature-list">500 Mega octet</li>
                                <li data-index="4" className="feature-list">100 leads per month</li>
                                <li data-index="5" className="feature-list">Marketing document</li>
                                <li data-index="6" className="disable_list feature-list">Marketing document builder</li>
                                <li data-index="7" className="feature-list">Export leads</li>
                                <li data-index="8" className="feature-list">Export leads</li>
                                <li data-index="9" className="disable_hover"><a href="upgrade_step_1.html" class="btn btn-default login-btn">Start free trial</a></li>
                                <li data-index="10" className="disable_list feature-list">Auto-response builder</li>
                                <li data-index="11" className="feature-list">Attach document in auto-response</li>
                                <li data-index="12" className="disable_list feature-list">Artificial Intelligence to parse email content</li>
                                <li data-index="13" className="feature-list">Own domain emails</li>
                            </ul>
                            </li>
                            <li className="">
                            <ul className="list-inline inner_list">
                                <li className=""><h4>Business</h4></li>
                                <li data-index="0" className="color_text feature-list">Start free trial</li>
                                <li data-index="1" className="bgcolor_text feature-list">49,60$ per month</li>
                                <li data-index="2" className="feature-list">0,10$ per lead over plan</li>
                                <li data-index="3" className="feature-list">1 Giga octet</li>
                                <li data-index="4" className="feature-list">1000 leads per month</li>
                                <li data-index="5" className="feature-list">Marketing document</li>
                                <li data-index="6" className="feature-list">Marketing document builder</li>
                                <li data-index="7" className="feature-list">Export leads</li>
                                <li data-index="8" className="feature-list">Export leads</li>
                                <li data-index="9" className="disable_hover"><a href="upgrade_step_1.html" class="btn btn-default login-btn">Start free trial</a></li>
                                <li data-index="10" className="feature-list">Auto-response builder</li>
                                <li data-index="11" className="feature-list">Attach document in auto-response</li>
                                <li data-index="12" className="feature-list">Artificial Intelligence to parse email content</li>
                                <li data-index="13" className="feature-list">Own domain emails</li>
                            </ul>
                            </li>
                            <li className="">
                            <ul className="list-inline inner_list">
                                <li class=""><h4>CORPORATE</h4></li>
                                <li data-index="0" clclassNameass="color_text feature-list">Start free trial</li>
                                <li data-index="1" className="bgcolor_text feature-list">199,40$ per month</li>
                                <li data-index="2" className="feature-list">0,10$ per lead over plan</li>
                                <li data-index="3" className="feature-list">1 Giga octet</li>
                                <li data-index="4" className="feature-list">10000 leads per month</li>
                                <li data-index="5" className="feature-list">Marketing document</li>
                                <li data-index="6" className="feature-list">Marketing document builder</li>
                                <li data-index="7" className="feature-list">Export leads</li>
                                <li data-index="8" className="feature-list">Export leads</li>
                                <li data-index="9" className="disable_hover"><a href="upgrade_step_1.html" class="btn btn-default login-btn">Start free trial</a></li>
                                <li data-index="10" className="feature-list">Auto-response builder</li>
                                <li data-index="11" className="feature-list">Attach document in auto-response</li>
                                <li data-index="12" className="feature-list">Artificial Intelligence to parse email content</li>
                                <li data-index="13" className="feature-list">Own domain emails</li>
                            </ul>
                            </li>
                            <li className="">
                            <ul className="list-inline inner_list">
                                <li className=""><h4>PAY-PER-USE</h4></li>
                                <li data-index="0" className="color_text feature-list">Start free trial</li>
                                <li data-index="1" className="bgcolor_text feature-list">0,50$ per lead</li>
                                <li data-index="2" className="disable_list feature-list">Cost per lead over plan</li>
                                <li data-index="3" className="feature-list">10 Giga octet</li>
                                <li data-index="4" className="feature-list">Unlimited leads</li>
                                <li data-index="5" className="feature-list">Marketing document</li>
                                <li data-index="6" className="feature-list">Marketing document builder</li>
                                <li data-index="7" className="feature-list">Export leads</li>
                                <li data-index="8" className="feature-list">Export leads</li>
                                <li data-index="9" className="disable_hover"><a href="upgrade_step_1.html" class="btn btn-default login-btn">Start free trial</a></li>
                                <li data-index="10" className="feature-list">Auto-response builder</li>
                                <li data-index="11" className="feature-list">Attach document in auto-response</li>
                                <li data-index="12" className="feature-list">Artificial Intelligence to parse email content</li>
                                <li data-index="13" className="feature-list">Own domain emails</li>
                            </ul>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <section className="mobile-p-15 dashboard-pad plan_detail_section faq_section">
                <div className="container">
                    <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="plan_detail_box">
                        <h2 className="text-center">Frequently asked questions</h2>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <div className="faq-box">
                        <h4>This is FAQ question</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, <strong>sunt in culpa qui officia deserunt</strong> </p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <div className="faq-box">
                        <h4>This is FAQ question</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, <strong>sunt in culpa qui officia deserunt</strong> </p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )}
}