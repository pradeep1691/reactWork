import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from '../component/header/header';
export default class TemplateResponse extends Component {
    componentDidMount() {
        document.body.classList.add('after_login');
    }
    componentWillUnmount() {
        document.body.classList.remove('after_login')
    }
    render() {
        return (<>
            <Header />
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

                                    <div className="overflow_div custom-filter-table">
                                        <table className="table">
                                            <thead>
                                                <tr>

                                                    <th>
                                                        <div className="checkbox checkbox-info">
                                                            <input type="checkbox" id="checkbox-1-1" className="regular-checkbox" />
                                                            <label for="checkbox-1-1"></label>
                                                        </div>
                                                    </th>

                                                    <th colspan="2">
                                                        <ul className="list-inline">
                                                            <li>
                                                                <select className="form-control">
                                                                    <option>Folders</option>
                                                                    <option>Folders1</option>
                                                                </select>
                                                            </li>
                                                            <li>
                                                                <span>Sort by</span>
                                                            </li>
                                                            <li>
                                                                <select className="form-control">
                                                                    <option>Newest first</option>
                                                                    <option>Oldest first</option>
                                                                </select>
                                                            </li>
                                                            <li className="search_template">
                                                                <div className="input-group">
                                                                    <input type="text" className="form-control" placeholder="Search saved templates" />
                                                                    <div className="input-group-append">
                                                                        <button className="btn btn-secondary" type="button">
                                                                            <i className="fa fa-search"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>

                                                    <td>
                                                        <div className="checkbox checkbox-info">
                                                            <input type="checkbox" id="checkbox-1-2" className="regular-checkbox" />
                                                            <label for="checkbox-1-2"></label>
                                                        </div>
                                                    </td>

                                                    <td colspan="2">
                                                        <div className="create-box-with-img">
                                                            <ul className="list-inline">
                                                                <li className="template_imgbox">
                                                                    <img src={require('../assets/images/template-small.jpg')} width="90" />
                                                                </li>
                                                                <li className="template_decs">
                                                                    <h4>Untitled Template</h4>
                                                                    <p><span>Last edited</span> on May 01, 2019 10:03 pm by Yves Yota Tchoffo Drag and drop</p>
                                                                </li>
                                                                <li className="template_editbtn">
                                                                    <button className="btn btn-secondary">Edit</button>
                                                                    <button className="btn btn-secondary"><i className="fa fa-angle-down"></i></button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </td>

                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div role="tabpanel" className="tab-pane fade" id="hats" aria-labelledby="hats-tab">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>);
    }
}
