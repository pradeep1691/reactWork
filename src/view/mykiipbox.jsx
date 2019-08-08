import React, {Component} from 'react';
import Header from '../component/header/header';
import { BrowserRouter as Router, Link } from "react-router-dom";


export default class Mykiipbox extends Component {
    componentDidMount() {
        document.body.classList.add('after_login');
    }
    componentWillUnmount() {
        document.body.classList.remove('after_login')
    }
    constructor(props) {
        super(props);
        
        this.state = {
          current: 1
        };
    }
      
    toggle(index) {
        this.setState({
          current: index
        })
    }
    render() {
        
        return (
            <>
            <Header/>
            <section className="mobile-p-15 dashboard-pad">
                <div className="container">
                    <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <h4 className="text-center page-title">You have 4 Kiip Box</h4>
                    </div>
                    </div>

                    <div className="row search-height">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 no-pad">
                        <div className="login-register-cart-button d-flex align-items-center">

                        <form>
                        <div className="search-wrapper active">
                            <div className="input-holder">
                                <ul>
                                    <li className="search-list">
                                    <input type="search" name="" />
                                    <span className="search_icon"></span>
                                    </li>
                                    <li className="search-list">
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle select-all" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Status <span className="dropdown_ico"></span>
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <Link className="dropdown-item" to="/">Active</Link>
                                        <Link className="dropdown-item" to="/">Deactive</Link>
                                        <Link className="dropdown-item" to="/">Panding</Link>
                                        </div>
                                    </div>
                                    </li>
                                    <li className="search-list">
                                    <button type="button" className="btn btn-default select-all">Select all</button>
                                    </li>
                                    <li className="search-list">
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle select-all" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Action <span className="dropdown_ico"></span>
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <Link className="dropdown-item" to="/">Delete</Link>
                                        <Link className="dropdown-item" to="/">Edit</Link>
                                        </div>
                                    </div>
                                    </li>
                                    <li className="">
                                    Display: <span onClick={this.toggle.bind(this, 1)} className ={`view-changer box_view ${this.state.current === 1 ? 'active' : ''}`} data-attr="gallery"></span>
                                    </li>
                                </ul>
                                <Link className = {`view-changer list_icon ${this.state.current === 2 ? 'active' : ''}`} onClick={this.toggle.bind(this, 2)} data-attr="list-view"></Link>
                            </div>

                            <div className="result-container">

                            </div>
                        </div>
                        </form>
                    </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 text-center">

                    </div>
                    </div>


                    <div className={`row grid_view ${this.state.current === 2 ? 'div_none ': ''}`}>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3">
                        <div className="my-kiip-box row">
                        <div className="checkbox checkbox-info">
                            <input type="checkbox" id="checkbox-1-1" className="regular-checkbox" />
                            <label htmlFor="checkbox-1-1"></label>
                            <label htmlFor="checkbox-1-1"><span>This is the name of Kiip Box</span></label>
                        </div>
                        <img src={require('../assets/images/kiip-box.png')} className="img-fluid img-kiip" />
                        <div className="kiip_content">
                            <p>Email: <span className="font-normal">sephora@kiipintouch.com</span></p>
                            <p>Status: <span className="font-normal">active</span></p>
                            <p>Auto response: <span className="font-normal">none</span></p>
                            <p>Audience: <span className="font-normal">50</span></p>
                        </div>
                        <div className="kiip_img hidden-xs">
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3">
                        <div className="my-kiip-box row">
                        <div className="checkbox checkbox-info">
                            <input type="checkbox" id="checkbox-1-2" className="regular-checkbox" />
                            <label htmlFor="checkbox-1-2"></label>
                            <label htmlFor="checkbox-1-2"><span>This is the name of Kiip Box</span></label>
                        </div>
                        <img src={require('../assets/images/kiip-box.png')} className="img-fluid img-kiip" />
                        <div className="kiip_content">
                            <p>Email: <span className="font-normal">sephora@kiipintouch.com</span></p>
                            <p>Status: <span className="font-normal">active</span></p>
                            <p>Auto response: <span className="font-normal">none</span></p>
                            <p>Audience: <span className="font-normal">50</span></p>
                        </div>
                        <div className="kiip_img hidden-xs">
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3">
                        <div className="my-kiip-box row">
                        <div className="checkbox checkbox-info">
                            <input type="checkbox" id="checkbox-1-3" className="regular-checkbox" />
                            <label htmlFor="checkbox-1-3"></label>
                            <label htmlFor="checkbox-1-3"><span>This is the name of Kiip Box</span></label>
                        </div>
                        <img src={require('../assets/images/kiip-box.png')} className="img-fluid img-kiip" />
                        <div className="kiip_content">
                            <p>Email: <span className="font-normal">sephora@kiipintouch.com</span></p>
                            <p>Status: <span className="font-normal">active</span></p>
                            <p>Auto response: <span className="font-normal">none</span></p>
                            <p>Audience: <span className="font-normal">50</span></p>
                        </div>
                        <div className="kiip_img hidden-xs">
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3">
                        <div className="my-kiip-box row">
                        <div className="checkbox checkbox-info">
                            <input type="checkbox" id="checkbox-1-4" className="regular-checkbox" />
                            <label htmlFor="checkbox-1-4"></label>
                            <label htmlFor="checkbox-1-4"><span>This is the name of Kiip Box</span></label>
                        </div>
                        <img src={require('../assets/images/kiip-box.png')} className="img-fluid img-kiip" />
                        <div className="kiip_content">
                            <p>Email: <span className="font-normal">sephora@kiipintouch.com</span></p>
                            <p>Status: <span className="font-normal">active</span></p>
                            <p>Auto response: <span className="font-normal">none</span></p>
                            <p>Audience: <span className="font-normal">50</span></p>
                        </div>
                        <div className="kiip_img hidden-xs">
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 text-center">
                        <Link to="/" className="btn btn-default add_btn">+</Link>
                    </div>
                    </div>
                    
                    <div className={`row list_view_box my-kiip-box ${this.state.current === 1 ? 'div_none ': ''}`}>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 no-pad">



                        <table className="table audience_table">
                        <thead>
                            <tr>
                            <th colSpan="1">Box Title</th>
                            <th>Box Image</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Auto response</th>
                            <th>Audience</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td  colSpan="1">
                                <div className="checkbox checkbox-info">
                                <input type="checkbox" id="checkbox-1-01" className="regular-checkbox" />
                                <label htmlFor="checkbox-1-01"></label>
                                <label htmlFor="checkbox-1-01"><span>This is the name of Kiip Box</span></label>
                                </div>
                            </td>
                            <td><img src={require('../assets/images/kiip-box.png')} className="img-fluid" width="150" /></td>
                            <td className="kiip_content">
                                <p> <span className="font-normal">sephora@kiipintouch.com</span></p>
                            </td>
                            <td className="kiip_content">
                                <p> <span className="font-normal">active</span></p>
                            </td>
                            <td className="kiip_content">
                                <p> <span className="font-normal">none</span></p>
                            </td>
                            <td className="kiip_content">
                                <p><span className="font-normal">50</span></p>
                            </td>
                            </tr>
                            <tr>
                            <td  colSpan="1">
                                <div className="checkbox checkbox-info">
                                <input type="checkbox" id="checkbox-1-08" className="regular-checkbox" />
                                <label htmlFor="checkbox-1-08"></label>
                                <label htmlFor="checkbox-1-08"><span>This is the name of Kiip Box</span></label>
                                </div>
                            </td>
                            <td><img src={require('../assets/images/kiip-box.png')} className="img-fluid" width="150" /></td>
                            <td className="kiip_content">
                                <p> <span className="font-normal">sephora@kiipintouch.com</span></p>
                            </td>
                            <td className="kiip_content">
                                <p> <span className="font-normal">active</span></p>
                            </td>
                            <td className="kiip_content">
                                <p> <span className="font-normal">none</span></p>
                            </td>
                            <td className="kiip_content">
                                <p><span className="font-normal">50</span></p>
                            </td>
                            </tr>
                            <tr>
                            <td  colSpan="1">
                                <div className="checkbox checkbox-info">
                                <input type="checkbox" id="checkbox-1-06" className="regular-checkbox" />
                                <label htmlFor="checkbox-1-06"></label>
                                <label htmlFor="checkbox-1-06"><span>This is the name of Kiip Box</span></label>
                                </div>
                            </td>
                            <td><img src={require('../assets/images/kiip-box.png')} className="img-fluid" width="150" /></td>
                            <td className="kiip_content">
                                <p> <span className="font-normal">sephora@kiipintouch.com</span></p>
                            </td>
                            <td className="kiip_content">
                                <p> <span className="font-normal">active</span></p>
                            </td>
                            <td className="kiip_content">
                                <p> <span className="font-normal">none</span></p>
                            </td>
                            <td className="kiip_content">
                                <p><span className="font-normal">50</span></p>
                            </td>
                            </tr>
                            <tr>
                            <td  colSpan="1">
                                <div className="checkbox checkbox-info">
                                <input type="checkbox" id="checkbox-1-02" className="regular-checkbox" />
                                <label htmlFor="checkbox-1-02"></label>
                                <label htmlFor="checkbox-1-02"><span>This is the name of Kiip Box</span></label>
                                </div>
                            </td>
                            <td><img src={require('../assets/images/kiip-box.png')} className="img-fluid" width="150" /></td>
                            <td className="kiip_content">
                                <p> <span className="font-normal">sephora@kiipintouch.com</span></p>
                            </td>
                            <td className="kiip_content">
                                <p> <span className="font-normal">active</span></p>
                            </td>
                            <td className="kiip_content">
                                <p> <span className="font-normal">none</span></p>
                            </td>
                            <td className="kiip_content">
                                <p><span className="font-normal">50</span></p>
                            </td>
                            </tr>
                            <tr>
                            <td  colSpan="1">
                                <div className="checkbox checkbox-info">
                                <input type="checkbox" id="checkbox-1-03" className="regular-checkbox" />
                                <label htmlFor="checkbox-1-03"></label>
                                <label htmlFor="checkbox-1-03"><span>This is the name of Kiip Box</span></label>
                                </div>
                            </td>
                            <td><img src={require('../assets/images/kiip-box.png')} className="img-fluid" width="150" /></td>
                            <td className="kiip_content">
                                <p> <span className="font-normal">sephora@kiipintouch.com</span></p>
                            </td>
                            <td className="kiip_content">
                                <p> <span className="font-normal">active</span></p>
                            </td>
                            <td className="kiip_content">
                                <p> <span className="font-normal">none</span></p>
                            </td>
                            <td className="kiip_content">
                                <p><span className="font-normal">50</span></p>
                            </td>
                            </tr>
                            <tr>
                            <td  colSpan="1">
                                <div className="checkbox checkbox-info">
                                <input type="checkbox" id="checkbox-1-04" className="regular-checkbox" />
                                <label htmlFor="checkbox-1-04"></label>
                                <label htmlFor="checkbox-1-04"><span>This is the name of Kiip Box</span></label>
                                </div>
                            </td>
                            <td><img src={require('../assets/images/kiip-box.png')} className="img-fluid" width="150" /></td>
                            <td className="kiip_content">
                                <p> <span className="font-normal">sephora@kiipintouch.com</span></p>
                            </td>
                            <td className="kiip_content">
                                <p> <span className="font-normal">active</span></p>
                            </td>
                            <td className="kiip_content">
                                <p> <span className="font-normal">none</span></p>
                            </td>
                            <td className="kiip_content">
                                <p><span className="font-normal">50</span></p>
                            </td>
                            </tr>
                            <tr>
                            <td colSpan="6">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
                                    <Link to="/" className="btn btn-default add_btn list_add">+</Link>
                                </div>
                            </td>
                            </tr>


                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                </section>
            </>
        )}
    }
