import React, {Component} from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Header from '../component/header/header';

export default class PaymentMethod extends Component {
    render() {
        return(
            <>
            <Header/>
            <section className="mobile-p-15 dashboard-pad payment_page">
                <div className="container">
                    <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <h4 className="text-center">PAYMENT METHODS</h4>
                    </div>  
                    </div>
                    <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-12">
                        <div className="kiip-box text-center method_page">
                        <div className="kiip-box-body">
                            <p>Balance due</p>
                        </div>
                        <div className="kiip-box-foot">            
                            <p className="due_balance">Your balance due is <span>0,00 €</span></p>
                            <button className="btn btn-default due_balance_btn" type="button">Pay now</button>
                        </div>
                        </div>
                    </div>
                    </div>
                    
                    <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-12">
                        <div className="kiip-box text-center method_page">
                        <div className="kiip-box-body">
                            <p><span>Billing methods</span><button className="btn btn-default add_new" type="button">Add new</button></p>
                        </div>
                        <div className="kiip-box-payment paypal">            
                            <h4>Primary</h4>
                            <p><img src={require('../assets/images/paypal.jpg')} /><span>PayPal ( me@paypal.com)</span> </p>
                            <div className="dropdown mastercard_modify">
                                <button className="btn btn-secondary dropdown-toggle select-all" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src={require('../assets/images/more-icon.png')} />
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <Link className="dropdown-item" to="/">Edit</Link>
                                    <Link className="dropdown-item trigger-btn" data-toggle="modal" to="#myModal">Delete</Link>
                                </div>
                            </div>
                        </div>
                        <div className="kiip-box-payment other_card">            
                            <h4>Secondary</h4>
                            <p><img src={require('../assets/images/mastercard.png')} /><span>****3781, Expire 10/2022</span> </p>
                            <div className="dropdown mastercard_modify">
                                <button className="btn btn-secondary dropdown-toggle select-all" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src={require('../assets/images/more-icon.png')} />
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <Link className="dropdown-item" to="/">Set as primary</Link>
                                    <Link className="dropdown-item" to="/">Edit</Link>
                                    <Link className="dropdown-item trigger-btn" data-toggle="modal" to="#myModal">Delete</Link>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </>
    )}
}