import React, {Component} from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Header from '../component/header/header';

export default class Setting extends Component {
    render(){
        return(
            <>
            <Header/>
            <section className="mobile-p-15 dashboard-pad">
                <div className="container">
                    <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-12">
                        <div className="setting-page">
                        <h4 className="text-center">SETTINGS</h4>
                        <div className="form-group tab-list">
                            <ul className="list-inline first-row">
                                <li>KiipBox audience reports</li>
                                <li className="active">
                                    <input type="radio" id="radio-1-1" name="radio-1-set" className="regular-radio" defaultChecked/>
                                    <label htmlFor="radio-1-1"><span>Daily</span></label>
                                </li>
                                <li>
                                    <input type="radio" id="radio-1-2" name="radio-1-set" className="regular-radio"/>
                                    <label htmlFor="radio-1-2"><span>Weekly</span></label>
                                </li>
                                <li>
                                    <input type="radio" id="radio-1-3" name="radio-1-set" className="regular-radio"/>
                                    <label htmlFor="radio-1-3"><span>Monthly</span></label>
                                </li>
                            </ul>
                            <ul className="list-inline third-row">
                                <li>Marketing email</li>
                                <li>
                                    <label className="switch">
                                        <input type="checkbox" defaultChecked/>
                                    <span className="slider round"></span>
                                    </label>
                                </li>
                                </ul>
                                <ul className="list-inline third-row">
                                <li>Notification</li>
                                <li>
                                    <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider round"></span>
                                    </label>
                                </li>
                            </ul>
                            <ul className="list-inline third-row status_list">
                                <li>Language</li>
                                <li>
                                    <select className="form-control custome_select2">
                                        <option>English</option>
                                        <option>Spanish</option>
                                        <option>Portuguese</option>
                                    </select>
                                </li>
                            </ul>
                        </div>
                        <div className="form-group row update-form">
                            <button className="btn btn-default create_btn">Update</button> 
                            {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                            Change Password
                            </button>  */}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </>
    )}
}