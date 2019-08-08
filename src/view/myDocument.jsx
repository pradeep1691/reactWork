import React, {Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Header from '../component/header/header';

export default class MyDocument extends Component {
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
    render(){
        return(
            <>
            <Header/>
            <section className="mobile-p-15 dashboard-pad">
                <div className="container">    
                    <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <h4 className="text-center page-title">You have 1 document</h4>
                    </div> 
                    </div>
                    
                    <div className="row search-height">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="login-register-cart-button d-flex align-items-center">
                        
                        <form>
                        <div className="search-wrapper active">
                            <div className="input-holder card_repo_list">
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
                                <a className={`view-changer list_icon ${this.state.current === 2 ? 'active' : ''}`} onClick={this.toggle.bind(this, 2)} data-attr="list-view"></a>
                            </div>
                            
                            <div className="result-container">

                            </div>
                        </div>
                        </form>
                    </div>
                    </div>
                    </div>
                    <div className="row">
                    
                    </div>
                    
                    <div className={`row grid_view content_card_repo ${this.state.current === 2 ? 'div_none ': ''}`}>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3">
                        <div className="my-kiip-box row">
                        <div className="checkbox checkbox-info">
                            <input type="checkbox" id="checkbox-1-1" className="regular-checkbox" />
                            <label htmlFor="checkbox-1-1"></label>
                            <label htmlFor="checkbox-1-1"><span>This is content card title</span></label>
                        </div>
                        <img src={require('../assets/images/kiip-box.png')} className="img-fluid img-kiip" />
                        <div className="kiip_content">
                            <p>Code:  <span className="font-normal">#1234</span></p>
                            <p>Status: <span className="font-normal">active</span></p>
                            <p>Downloads: <span className="font-normal">200</span></p>
                            <p>Documents: <span className="font-normal">5</span></p>
                        </div>
                        <div className="kiip_img hidden-xs">
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 text-center d-flex align-items-center justify-content-center">
                        <Link to="/createAkiipbox" className="btn btn-default add_btn">+</Link>
                    </div>
                    </div>
                    
                    <div className={`row list_view_box my-kiip-box ${this.state.current === 1 ? 'div_none ': ''}`}>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 no-pad">
                        <table className="table audience_table">
                        <thead>
                            <tr>
                            <th colSpan="1">Card Title</th>
                            <th>Card Image</th>
                            <th>Code</th>
                            <th>Status</th>
                            <th>Downloads</th>
                            <th>Documents</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td colSpan="1">
                                <div className="checkbox checkbox-info">
                                <input type="checkbox" id="checkbox-1-01" className="regular-checkbox" />
                                <label htmlFor="checkbox-1-01"></label>
                                <label htmlFor="checkbox-1-01"><span>This is content card title</span></label>
                                </div>
                            </td>
                            <td><img src={require('../assets/images/kiip-box.png')} className="img-fluid" width="150" /></td>
                            <td className="kiip_content">
                                <p> <span className="font-normal">#1234</span></p>
                            </td>
                            <td className="kiip_content">
                                <p> <span className="font-normal">Active</span></p>
                            </td>
                            <td className="kiip_content">
                                <p> <span className="font-normal">200</span></p>
                            </td>
                            <td className="kiip_content">
                                <p><span className="font-normal">5</span></p>
                            </td>
                            </tr>
                            <tr>
                            <td colSpan="1">
                                <div className="checkbox checkbox-info">
                                <input type="checkbox" id="checkbox-1-08" className="regular-checkbox" />
                                <label htmlFor="checkbox-1-08"></label>
                                <label htmlFor="checkbox-1-08"><span>This is content card title</span></label>
                                </div>
                            </td>
                            <td><img src={require('../assets/images/kiip-box.png')} className="img-fluid" width="150" /></td>
                            <td className="kiip_content">
                                <p> <span className="font-normal">#1234</span></p>
                            </td>
                            <td className="kiip_content">
                                <p> <span className="font-normal">Active</span></p>
                            </td>
                            <td className="kiip_content">
                                <p> <span className="font-normal">200</span></p>
                            </td>
                            <td className="kiip_content">
                                <p><span className="font-normal">5</span></p>
                            </td>
                            </tr>
                            <tr>
                            <td colSpan="1">
                                <div className="checkbox checkbox-info">
                                <input type="checkbox" id="checkbox-1-06" className="regular-checkbox" />
                                <label htmlFor="checkbox-1-06"></label>
                                <label htmlFor="checkbox-1-06"><span>This is content card title</span></label>
                                </div>
                            </td>
                            <td><img src={require('../assets/images/kiip-box.png')} className="img-fluid" width="150" /></td>
                            <td className="kiip_content">
                                <p> <span className="font-normal">#1234</span></p>
                            </td>
                            <td className="kiip_content">
                                <p> <span className="font-normal">Active</span></p>
                            </td>
                            <td className="kiip_content">
                                <p> <span className="font-normal">200</span></p>
                            </td>
                            <td className="kiip_content">
                                <p><span className="font-normal">5</span></p>
                            </td>
                            </tr>
                            <tr>
                            <td colSpan="1">
                                <div className="checkbox checkbox-info">
                                <input type="checkbox" id="checkbox-1-02" className="regular-checkbox" />
                                <label htmlFor="checkbox-1-02"></label>
                                <label htmlFor="checkbox-1-02"><span>This is content card title</span></label>
                                </div>
                            </td>
                            <td><img src={require('../assets/images/kiip-box.png')} className="img-fluid" width="150" /></td>
                            <td className="kiip_content">
                                <p> <span className="font-normal">#1234</span></p>
                            </td>
                            <td className="kiip_content">
                                <p> <span className="font-normal">Active</span></p>
                            </td>
                            <td className="kiip_content">
                                <p> <span className="font-normal">200</span></p>
                            </td>
                            <td className="kiip_content">
                                <p><span className="font-normal">5</span></p>
                            </td>
                            </tr>
                            <tr>
                            <td colSpan="1">
                                <div className="checkbox checkbox-info">
                                <input type="checkbox" id="checkbox-1-03" className="regular-checkbox" />
                                <label htmlFor="checkbox-1-03"></label>
                                <label htmlFor="checkbox-1-03"><span>This is content card title</span></label>
                                </div>
                            </td>
                            <td><img src={require('../assets/images/kiip-box.png')} className="img-fluid" width="150" /></td>
                            <td className="kiip_content">
                                <p> <span className="font-normal">#1234</span></p>
                            </td>
                            <td className="kiip_content">
                                <p> <span className="font-normal">Active</span></p>
                            </td>
                            <td className="kiip_content">
                                <p> <span className="font-normal">200</span></p>
                            </td>
                            <td className="kiip_content">
                                <p><span className="font-normal">5</span></p>
                            </td>
                            </tr>
                            <tr>
                            <td colSpan="1">
                                <div className="checkbox checkbox-info">
                                <input type="checkbox" id="checkbox-1-04" className="regular-checkbox" />
                                <label htmlFor="checkbox-1-04"></label>
                                <label htmlFor="checkbox-1-04"><span>This is content card title</span></label>
                                </div>
                            </td>
                            <td><img src={require('../assets/images/kiip-box.png')} className="img-fluid" width="150" /></td>
                            <td className="kiip_content">
                                <p> <span className="font-normal">#1234</span></p>
                            </td>
                            <td className="kiip_content">
                                <p> <span className="font-normal">Active</span></p>
                            </td>
                            <td className="kiip_content">
                                <p> <span className="font-normal">200</span></p>
                            </td>
                            <td className="kiip_content">
                                <p><span className="font-normal">5</span></p>
                            </td>
                            </tr>
                            <tr>
                            <td colSpan="6">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
                                    <Link to="/createAkiipbox" className="btn btn-default add_btn list_add">+</Link>
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