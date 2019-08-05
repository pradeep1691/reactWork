import React, {Component} from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";


function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom" id="#mainNav">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/dashboard"><img src={require('../../assets/images/logo-icon.png')} /></Link>
                <button className="navbar-toggler custom-navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className=""><i className="fas fa-bars"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="custom-navbar-nav navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/mykiipbox">KiipBox</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/template">Templates</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">My Documents</Link>
                    </li>
                    <li className="nav-btn">
                        <Link className="btn header-btn custom-btn-blue" to="/plan">Upgrade plan</Link>
                    </li>
                    <li className="nav-btn">
                        <Link to="/" className="btn header-btn custom-btn-skyblue">Create a KiipBox</Link>
                    </li>
                    <li className="nav-btn">
                        <Link to="/" className="btn header-btn custom-btn-white">Refer a friend</Link>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" id="dropdown-1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="avtar"><img src={require('../../assets/images/user-img.png')} /></span>
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="dropdown-1">
                        <Link className="dropdown-item" to="/">Account</Link>
                        <Link className="dropdown-item" to="/">Setting</Link>
                        <Link className="dropdown-item" to="/">Payment method</Link>
                        <Link className="dropdown-item" to="/">Invoices</Link>
                        <Link className="dropdown-item" to="/">Logout</Link>
                    </div>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}


export default Header;
