import React, {Component} from 'react';
import Header from '../component/header/header';
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class Dashboard extends Component {
    componentDidMount() {
        document.body.classList.add('after_login');
    }
    componentWillUnmount() {
        document.body.classList.remove('after_login')
      }
    render() {
        return (
            <>
            <Header/>
                        
            <section className="mobile-p-15 dashboard-pad">
                <div className="container">
                    <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <h4 className="text-center page-title">Monitor your activity and metrics</h4>
                    </div> 
                    </div>
                    <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6 col-12">
                        <div className="kiip-box text-center">
                        <div className="kiip-box-body">
                            <p>Number of Kiip Box</p>
                            <h1>10</h1>
                        </div>
                        <div className="kiip-box-foot">
                            <button className="btn btn-default">Create a Kiip Box</button>
                            <Link className="btn btn-default" to="/">See my Kiip Box</Link>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6 col-12">
                        <div className="kiip-box text-center">
                        <div className="kiip-box-body">
                            <p>Total  audience</p>
                            <h1>1000</h1>
                        </div>
                        <div className="kiip-box-foot">
                            <button className="btn btn-default" type="button">Export list</button>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6 col-12">
                        <div className="kiip-box text-center">
                        <div className="kiip-box-body">
                            <p>Today new audience</p>
                            <h1>10</h1>
                        </div>
                        <span className="budge success">+8%</span>
                        <div className="kiip-box-foot">
                            <button className="btn btn-default" type="button">Export list</button>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6 col-12">
                        <div className="kiip-box text-center">
                        <div className="kiip-box-body">
                            <p>This month new audience</p>
                            <h1>1000</h1>
                        </div>
                        <span className="budge danger">+5%</span>
                        <div className="kiip-box-foot">
                            <p className="btn btn-default">Plan limit: 800</p>
                            <button className="btn btn-default" type="button">Export list</button>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6 col-12">
                        <div className="kiip-box text-center">
                        <div className="kiip-box-body">
                            <p>Memory usage</p>
                            <h1>50<span>mo</span></h1>
                        </div>
                        <span className="budge normal">+25%</span>
                        <div className="kiip-box-foot">
                            <p className="btn btn-default">Plan limit: 200mo</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6 col-12">
                        <div className="kiip-box text-center">
                        <div className="kiip-box-body">
                            <p>This month new leads</p>
                            <h1>1000</h1>
                        </div>
                        <span className="budge danger">+5%</span>
                        <div className="kiip-box-foot">
                            <button className="btn btn-default" type="button">Export list</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                </>
            )}
}