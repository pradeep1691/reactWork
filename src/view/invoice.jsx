import React, {Component} from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Header from '../component/header/header';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default class Invocie extends Component {
    constructor(props) {
        super(props);
        this.state = {
          startDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(date) {
        this.setState({
          startDate: date
        });
    }
    render() {
        return(
            <>
            <Header/>
            <section className="mobile-p-15 dashboard-pad payment_page">
                <div className="container">
                    <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <h4 className="text-center">INVOICES</h4>
                    </div>  
                    </div>
                    <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-12">
                        <div className="kiip-box text-center">
                        <div className="kiip-box-body">
                            <p>Overview</p>
                        </div>
                        <div className="kiip-box-foot">   
                            <ul className="list-inline invoice_list">
                                <li><p>Total invoiced is <span>150,00 €</span></p></li>
                                <li><p>Last invoice is <span>150,00 €</span></p></li>
                                <li><p>Next invoice estimate: <span>150,00 €</span></p></li>
                            </ul>   
                        </div>
                        </div>
                    </div>
                    </div>
                    
                    <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-12">
                        <div className="kiip-box text-center">
                            <div className="kiip-box-body">
                                <p><span>Download invoice</span></p>
                                <p className="sub-description">If you'd like to keep an electronic record of your invoice you can download a copy in Adobe PDF format. You can open PDF files using Adobe Reader.</p>
                            </div>
                        <form className="invoice_form">
                            <div className="form-group row">
                            <label htmlFor="staticEmail" className="col-sm-5 col-form-label">End date:</label>
                            <div className="col-sm-7">
                                <div className="input-group date">
                                    <DatePicker selected={this.state.startDate} onChange={this.handleChange} />
                                </div>
                            </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="staticEmail" className="col-sm-5 col-form-label">Number of months:</label>
                                <div className="col-sm-7">
                                <select className="form-control custom__select">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                </select>
                                </div>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>

                    <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-12">
                        <div className="kiip-box text-center">
                        <div className="kiip-box-body">
                            <p><span>View an invoice</span></p>
                        </div>
                        <form className="invoice_form">
                            <div className="form-group row">
                            <label for="staticEmail" className="col-sm-4 col-form-label">Select date:</label>
                            <div className="col-sm-5">
                                <div className="input-group date">
                                    <DatePicker selected={this.state.startDate} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="col-sm-3 no-pad">
                                <button type="submit" className="btn btn-default display-btn">Display</button>
                            </div>
                            </div>
                            <div className="table-responsive invoice_table">
                            <table className="table">
                                <tbody>
                                <tr>
                                    <td colspan="2" className="first-td-row">Invoice #2248256-2017-03-30-10:</td>
                                </tr>
                                <tr>
                                    <td><span className="bold_text">Invoice Number:</span></td>
                                    <td>2248256-2017-03-30-10</td>
                                </tr>
                                <tr>
                                    <td><span className="bold_text">Statement Period:</span></td>
                                    <td><span className="start_date">2017-03-30</span> - <span className="end_date">2017-03-30</span></td>
                                </tr>
                                <tr>
                                    <td><span className="bold_text">Total Amount Due:</span></td>
                                    <td>$0.00</td>
                                </tr>
                                <tr>
                                    <td><span className="bold_text">Username:</span></td>
                                    <td>yveyot</td>
                                </tr>
                                <tr>
                                    <td><span className="bold_text">Account:</span></td>
                                    <td>"Test Account"</td>
                                </tr>
                                <tr>
                                    <td className=""><span className="bold_text">Address:</span><button className="btn-default btn address_edit">edit</button></td>
                                    <td className="">
                                    <address>
                                        Yves Yota Tchoffo<br/>
                                        15 rue richard lenoir<br/>
                                        Paris, lle-de-France 75011<br/>
                                        (FR)
                                    </address>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border_btm"><span className="bold_text">Make Payment To:</span></td>
                                    <td className="border_btm">
                                    <address>
                                        DreamHost<br/>
                                        PMB #257<br/>
                                        417 Associated Rd,<br/>
                                        Brea, CA 92821<br/>
                                        USA
                                    </address>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            </>
    )}
}