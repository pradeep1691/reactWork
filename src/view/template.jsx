import React, {Component} from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";
import Header from '../component/header/header';

export default class Template extends Component {
    render() {
        return (
            <>
            <Header/>
            <section className="mobile-p-15 dashboard-pad">
                <div className="container template-page">    
                    <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <h4 className="starting-title text-center">TEMPLATES</h4>
                        <p className="use_template text-center">Use your templates to create your marketing content and branded automatic response email</p>
                    </div> 
                    </div>
                    <div className="row search-height templates_tab">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <ul id="clothing-nav" className="nav nav-tabs" role="tablist">
                
                        <li className="nav-item">
                            <Link className="nav-link active show" to="#home" id="home-tab" role="tab" data-toggle="tab" aria-controls="home" aria-expanded="true" aria-selected="true">Automatic response email</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="#hats" role="tab" id="hats-tab" data-toggle="tab" aria-controls="hats" aria-selected="false">Marketing flyer</Link>
                        </li>

                        </ul>
                        <div className="col-12 col-sm-12 col-lg-12 col-xl-12 col-md-12 text-right">
                        <Link to="/template_response" className="btn btn-default btn_green create_template_btn">Create a new template</Link>
                        </div>
                        
                        <div id="clothing-nav-content" className="tab-content custom_tab">

                        <div role="tabpanel" className="tab-pane fade active show" id="home" aria-labelledby="home-tab">
                            <p className="text-center create_text">You don’t have any template yet, <Link to="/template_response" className="anchore_color">create one now</Link>  </p>
                        </div>

                        <div role="tabpanel" className="tab-pane fade" id="hats" aria-labelledby="hats-tab">
                            
                        </div>

                        </div>

                        </div>



                    </div>
                    </div>
                    
                
                </section>
                </>
        )}
}