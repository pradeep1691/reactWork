import React, {Component} from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Header from '../component/header/header';

export default class UpreadePlan extends Component {
    componentDidMount() {
        document.body.classList.add('after_login');
    }
    componentWillUnmount() {
        document.body.classList.remove('after_login')
    }
    render() {
        return(
            <>
            <Header/>
            <section className="mobile-p-15 dashboard-pad">
                <div className="container template-page">    
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                            <h4 className="upgrade-title text-center">Upgrade your account</h4>
                        </div> 
                    </div>
                    
                    <div className="row search-height upgrade_planpage">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <ul id="clothing-nav" className="nav nav-tabs" role="tablist">
                
                            <li className="nav-item">
                                <Link className="nav-link" to="#plan" id="plan-tab" role="tab" data-toggle="tab" aria-controls="plan" aria-expanded="true" aria-selected="true">1. <span>Plan</span></Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active show" to="#payment" role="tab" id="payment-tab" data-toggle="tab" aria-controls="payment" aria-selected="false">2. <span>Payment</span>  </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="#confirmation" role="tab" id="confirmation-tab" data-toggle="tab" aria-controls="confirmation" aria-selected="false">3. <span>Confirmation</span>  </Link>
                            </li>

                        </ul>
                        
                        <div id="clothing-nav-content" className="tab-content custom_tab">

                         <div role="tabpanel" className="tab-pane fade" id="plan" aria-labelledby="plan-tab">

                        

                        </div> 

                        <div role="tabpanel" className="tab-pane fade active show" id="payment" aria-labelledby="payment-tab">
                            <div className="row">
                            <div className="col-12 col-sm-8 col-md-8 col-lg-8">
                            
                            <div className="accordion" id="accordionExample">
                            <div className="card plan-box">
                                <div className="card-header" id="headingOne">
                                <h2 className="">
                                    <button className="btn btn-link purple" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <h5 className="text-center"><span className="step_check pull-left"></span>Contact Address</h5>
                                    </button>
                                </h2>
                                </div>

                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div className="card-body">
                                    <div className="">
                                    <form>
                                        <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label className="custom_label" htmlFor="inputEmail4">First name</label>
                                            <input type="text" className="form-control" id="inputEmail4" placeholder="" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="custom_label" htmlFor="inputPassword4">Last name</label>
                                            <input type="text" className="form-control" id="inputPassword4" placeholder="" />
                                        </div>
                                        </div>

                                        <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label className="custom_label" htmlFor="inputEmail4">Address</label>
                                            <input type="text" className="form-control" id="inputEmail4" placeholder="" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="custom_label" htmlFor="inputPassword4">City</label>
                                            <input type="text" className="form-control" id="inputPassword4" placeholder="" />
                                        </div>
                                        </div>

                                        <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label className="custom_label" htmlFor="inputEmail4">Postal Code</label>
                                            <input type="text" className="form-control" id="inputEmail4" placeholder="" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="custom_label" htmlFor="inputPassword4">Country</label>
                                            <select className="form-control custome_select2">
                                                <option></option>
                                                <option value="usa">United States</option>
                                                <option value="india">India</option>
                                                <option value="uk">United Kingdom</option>
                                            </select>
                                        </div>
                                        </div>

                                        <div className="form-row d-flex align-items-center">
                                        <div className="form-group col-md-6">
                                            <div className="checkbox checkbox-info">
                                            <input type="checkbox" id="checkbox-1-1" className="regular-checkbox" />
                                            <label htmlFor="checkbox-1-1"></label>
                                            <label htmlFor="checkbox-1-1"><span>Use this address for billing</span></label>
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6 text-right">
                                            <button type="submit" className="btn btn-primary btn_green plan_btn disable">Continue to billing</button>
                                        </div>
                                        </div>

                                    </form>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="card plan-box">
                                <div className="card-header" id="headingTwo">
                                <h2 className="">
                                    <button className="btn btn-link collapsed gray" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">                      
                                    <h5 className="text-center"><span className="step_check pull-left"></span>Billing Address</h5>
                                    </button>
                                </h2>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div className="card-body">
                                    
                                    <div className="">
                                    <form>
                                        <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label className="custom_label" htmlFor="inputEmail4">First name</label>
                                            <input type="text" className="form-control" id="inputEmail4" placeholder="" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="custom_label" htmlFor="inputPassword4">Last name</label>
                                            <input type="text" className="form-control" id="inputPassword4" placeholder="" />
                                        </div>
                                        </div>

                                        <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label className="custom_label" htmlFor="inputEmail4">Address</label>
                                            <input type="text" className="form-control" id="inputEmail4" placeholder="" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="custom_label" htmlFor="inputPassword4">City</label>
                                            <input type="text" className="form-control" id="inputPassword4" placeholder="" />
                                        </div>
                                        </div>

                                        <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label className="custom_label" htmlFor="inputEmail4">Postal Code</label>
                                            <input type="text" className="form-control" id="inputEmail4" placeholder="" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="custom_label" htmlFor="inputPassword4">Country</label>
                                            <select className="form-control custome_select2">
                                                <option></option>
                                                <option value="usa">United States</option>
                                                <option value="india">India</option>
                                                <option value="uk">United Kingdom</option>
                                            </select>
                                        </div>
                                        </div>

                                        <div className="form-row d-flex align-items-end">
                                        <div className="form-group col-md-6">
                                            <label className="custom_label" htmlFor="inputEmail4">VAT Number</label>
                                            <input type="text" className="form-control" id="inputEmail4" placeholder="" />
                                        </div>
                                        <div className="form-group col-md-6 text-right">
                                            <button type="submit" className="btn btn-primary btn_green plan_btn disable">Continue to billing</button>
                                        </div>
                                        </div>

                                    </form>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="card plan-box">
                                <div className="card-header" id="headingThree">
                                <h2 className="">
                                    <button className="btn btn-link collapsed gray" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <h5 className="text-center"><span className="step_check pull-left"></span>Payment method</h5>
                                    </button>
                                </h2>
                                </div>
                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <div className="card-body payment_method">
                                    <div className="">
                                    <form>
                                        <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <div className="custom-control custom-radio">
                                            <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                                            <label className="custom-control-label" htmlFor="customRadio1">Credit Card</label>
                                            <div className="card_info">
                                                <ul>
                                                <li>
                                                    Visa, MasterCard, American Express or Discover billed in
                                                </li>
                                                <li>
                                                    <div className="dropdown">
                                                    <button className="btn btn-secondary dropdown-toggle select-all" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        US Dollars
                                                    </button>
                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        <Link className="dropdown-item" to="#">Euro</Link>
                                                        <Link className="dropdown-item" to="#">Australian dollar</Link>
                                                        <Link className="dropdown-item" to="#">Canadian dollar</Link>
                                                        <Link className="dropdown-item" to="#">New Zealand dollar</Link>
                                                    </div>
                                                    </div> 
                                                </li>
                                                </ul>
                                                <div className="form-row payment_form">
                                                <div className="col-12 col-sm-12 col-md-4">
                                                    <label className="custom_label_payment">Credit Card Number</label>
                                                    <input type="text" className="form-control payment_input" placeholder="" />
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-4">                   
                                                    <label className="custom_label_payment">Expiration Date</label>
                                                    <div className="row">
                                                    <div className="col-6">
                                                        <select type="text" className="form-control custome_select2 payment_input">
                                                            <option>01</option>
                                                            <option>02</option>
                                                            <option>03</option>
                                                            <option>04</option>
                                                            <option>05</option>
                                                            <option>06</option>
                                                            <option>07</option>
                                                            <option>08</option>
                                                            <option>09</option>
                                                            <option>10</option>
                                                            <option>11</option>
                                                            <option>12</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-6 no-pad">
                                                        <select type="text" className="form-control custome_select2 payment_input">
                                                            <option>2019</option>
                                                            <option>2020</option>
                                                            <option>2021</option>
                                                            <option>2022</option>
                                                            <option>2023</option>
                                                            <option>2024</option>
                                                            <option>2025</option>
                                                            <option>2026</option>
                                                            <option>2027</option>
                                                            <option>2028</option>
                                                            <option>2029</option>
                                                            <option>2030</option>
                                                        </select>
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 btn_group">
                                                    <button type="submit" className="btn btn_green btn-primary btn_gray">Save</button>
                                                    <button type="submit" className="btn btn-primary btn_cancle">Cancel</button>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>                          
                                        </div>
                                        <hr className="custom_hr" />
                                        <div className="form-row">
                                        <div className="form-group col-md-12 m-b0">
                                            <div className="custom-control custom-radio">
                                            <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                                            <label className="custom-control-label" htmlFor="customRadio2">
                                                <img src={require('../assets/images/paypal_payment.png')} />
                                            </label>
                                            <div className="card_info">
                                                <ul>
                                                <li>
                                                    PayPal balance, eCheck, credit and more
                                                </li>
                                                </ul>
                                                <div className="col-12 btn_group no-pad">
                                                    <button type="submit" className="btn btn-primary btn_green plan_btn color_blue disable">Connect To PayPal</button>
                                                </div>
                                            </div>
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

                        <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                            <div className="plan-box right-sidebar">
                                <h5 className="text-center">Plan chosen name</h5>
                                <p className="text-center sub-title-billing">Billed monthly</p>
                                <hr/>
                                <ul className="d-flex list-inline plan-amount">
                                    <li>Plan chosen name at</li>
                                    <li>$20.00</li>
                                </ul>
                                <ul className="d-flex list-inline plan-amount">
                                    <li>Prorated</li>
                                    <li>$7.00</li>
                                </ul>
                                <ul className="d-flex list-inline plan-amount">
                                    <li>Sales tax</li>
                                    <li>$0.00</li>
                                </ul>
                                <hr/>
                                <ul className="d-flex list-inline due-amount plan-amount">
                                    <li>Due now </li>
                                    <li>$7.00</li>
                                </ul>
                                <hr/>
                                <div className="receipt_email">
                                    <p>Your receipt will be sent to xxxx@xxx.com</p>
                                    <Link to="/">Edit</Link>
                                </div>
                                <div className="form-group text-center">
                                    <button type="submit" className="btn preview btn-primary btn_green plan_btn disable">Pay now</button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div role="tabpanel" className="tab-pane fade" id="confirmation" aria-labelledby="confirmation-tab">
                           
                            <div className="alert-message alert-message-success alert-custom">
                                <h4>Alert Message Success</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s.<strong> strong message</strong>.
                                </p>
                            </div>

                            
                            <div className="alert-message alert-message-danger alert-custom">
                            <h4>Alert Message Danger</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. For performance reasons, the Tooltip and Popover data-apis are opt-in, meaning <strong>strong message</strong>.</p>
                            </div>
                        
                            <div className="alert-message alert-message-warning alert-custom">
                            <h4>Alert Message Warning</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                Ipsum has been the industry's standard dummy text ever since the 1500s.<strong> strong
                                message</strong>.</p>
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