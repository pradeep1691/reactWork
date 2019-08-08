import React, {Component} from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Header from '../component/header/header';

export default class CreateAkiipbox extends Component {
    render() {
        return(
            <>
            <Header/>
            <section className="mobile-p-15 dashboard-pad">
                <div className="container"> 
                    <div className="row">
                    <div className="col-12 col-sm-12 col-lg-12 col-md-12">
                        <h4 className="text-center create_box_title">CREATE A KIIPBOX</h4>
                    </div>
                    </div>   
                    <div className="row detail_box paid_customer">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <h4 className="text-center create_kiip_title">Customize your Kiip Box</h4>
                    </div>
                    <div className="col-12 col-sm-2 col-lg-2 col-md-2"></div>
                    <div className="col-12 col-sm-8 col-md-8 col-lg-8">
                        <div className="kiip_content">
                        <p className="audience_target custom_kiip height_box">
                            <input type="text" name="" placeholder="Enter your kiip Box name" className="form-control" />
                        </p>
                        <p className="audience_target height_box">
                            <span>Cover image:</span> 
                            <span className="add_side_upload add_box">
                            <label>
                                <span><img src={require('../assets/images/white-upload.png')} /></span>
                            </label>      
                            </span>
                        </p>
                        </div>
                    </div> 
                    <div className="col-12 col-sm-2 col-lg-2 col-md-2"></div>
                    {/* <!-- =================================== --> */}
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <hr className=""/>  
                    </div>
                    {/* <!-- =================================== --> */}
                    <div className="col-12 col-sm-2 col-lg-2 col-md-2"></div>
                    <div className="col-12 col-sm-8 col-md-8 col-lg-8">
                        <div className="auto_response_section">
                        <p className="text-center response_title">Auto response</p>
                        <p className="text-center fns_italic">Don’t miss a chance to make a good first impression with a response for each new sign-up. </p>
                        
                        <form>
                        <ul className="list-inline d-flex autoresponse_list justify-content-between first-row">
                            <li className="first_select"><strong>Select autoresponse type:</strong></li>
                            <li className="">
                            <input type="radio" id="radio-1-1" name="radio-1-set" className="regular-radio"/>
                            <label htmlFor="radio-1-1"></label>
                            <label htmlFor="radio-1-1"><span className="bold_text">None.</span> No autoresponse email will be sent to new subscribers</label>
                            </li>
                            <li>
                            <input type="radio" id="radio-1-2" name="radio-1-set" className="regular-radio"/>
                            <label htmlFor="radio-1-2"></label>
                            <label htmlFor="radio-1-2"><span className="bold_text">Single.</span> Send a short standardized email to your subscribers</label>
                            </li>
                            <li>
                            <input type="radio" id="radio-1-3" name="radio-1-set" className="regular-radio"/>
                            <label htmlFor="radio-1-3"></label>
                            <label htmlFor="radio-1-3"><span className="bold_text">Branded.</span> Customize your autoresponse email to your branding</label>
                            </li>
                        </ul>
                        </form>

                        <p className="fns_italic col-12">
                            <Link to="/upgradePlan" className="color_text">Upgrade</Link> to unlock premium features
                        </p>

                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 no-pad">
                            <hr className=""/>  
                        </div>

                        <div className="simple_select">
                            <p className="text-center response_title normal_opacity">Attach documents to your autoresponse</p>
                            <div className="disabled_section">
                            <p className="text-center fns_italic">Increase brand awarness and loyaulty by offering your new audience a special piece of content at signup</p>
                            <form>
                            <ul className="list-inline d-flex autoresponse_list justify-content-between first-row">
                                <li className="first_select"><strong>Select document type:</strong></li>
                                <li className="">
                                    <input type="radio" id="radio-1-100" name="radio-1-set" className="regular-radio"/>
                                    <label htmlFor="radio-1-100"></label>
                                    <label htmlFor="radio-1-100"><span className="bold_text">None.</span> No document is attached to autoresponse</label>
                                </li>
                                <li>
                                    <input type="radio" id="radio-1-200" name="radio-1-set" className="regular-radio"/>
                                    <label htmlFor="radio-1-200"></label>
                                    <label htmlFor="radio-1-200"><span className="bold_text">Single.</span> Select the document you want to attach</label>
                                </li>
                                <li>
                                    <input type="radio" id="radio-1-300" name="radio-1-set" className="regular-radio"/>
                                    <label htmlFor="radio-1-300"></label>
                                    <label htmlFor="radio-1-300"><span className="bold_text">On demand.</span> Let your audience choose the documents they want to receive</label>
                                </li>                                
                            </ul>
                            </form>
                            <h5 className="planSelect_title">Select document:</h5>
                            <div className="dropdown autoresponse_dropdown col-12 col-sm-12 col-xl-6 col-md-6 no-pad no-pad single_select" style={{display: "none"}}>
                                <button className="btn btn-secondary dropdown-toggle select-all" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Select a document <span className="dropdown_ico"></span>
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <Link className="dropdown-item" to="/">Document 1</Link>
                                    <Link className="dropdown-item" to="/">Document 2</Link>
                                    <Link className="dropdown-item" to="/">Document 3</Link>
                                </div>
                            </div>

                            <div className="on_demand" style={{display: "none"}}>
                                <div className="dropdown autoresponse_dropdown col-12 col-sm-12 col-xl-8 col-md-8 no-pad">
                                <button className="btn btn-secondary dropdown-toggle select-all" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    All active documents are available to subscribers 
                                </button>
                                
                                </div>
                                <p className="fns_italic text-left">When sending subscription email to your KiipBox user will also send reference code (i.e #12345) of the document they want to be attached in autoresponse.</p>
                            </div>
                            </div>

                            <p className="fns_italic col-12 no-pad">
                            <Link to="/upgradePlan" className="color_text">Upgrade</Link> to unlock premium features.
                            </p>
                        </div>

                        


                        

                        </div>  
                    </div> 
                    <div className="col-12 col-sm-2 col-lg-2 col-md-2"></div>
                    {/* <!-- =================================== --> */}
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <hr className="" />  
                    </div>
                    {/* <!-- =================================== --> */}
                    <div className="col-12 col-sm-2 col-lg-2 col-md-2"></div>
                    <div className="col-12 col-sm-8 col-lg-8 col-md-8">
                        <div className="contact_email">
                        <h4 className="text-center">Kiip Box contact email</h4>
                        <p className="text-center fns_italic">Define what email address your audience will use to subscribe to your KiipBox</p>


                        <ul className="list-inline d-flex autoresponse_list justify-content-between first-row">
                            <li className="first_select"><strong>Select contact email type:</strong></li>
                            <li className="">
                                <input type="radio" id="radio-1-12" name="radio-1-set" className="regular-radio"/>
                                <label htmlFor="radio-1-12"></label>
                                <label htmlFor="radio-1-12"><span className="bold_text">@kiipintouch.</span> It’s simple and free</label>
                            </li>
                            <li>
                                <input type="radio" id="radio-1-23" name="radio-1-set" className="regular-radio"/>
                                <label htmlFor="radio-1-23"></label>
                                <label htmlFor="radio-1-23" className="align_width"><span className="bold_text">@yourowndomain.</span> Best way to be on your audience white list. No more spam folder</label>
                            </li>
                        </ul>

                        <ul className="list-inline d-flex autoresponse_list justify-content-between first-row">
                            <li className="first_select"><strong>Type your email:</strong></li>
                            <li className="active">
                            <div className="form-row d-flex align-items-center">
                            <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                                <input type="email" className="form-control get_free_input" placeholder="Customize your email"/>
                            </div>
                            <div className="col">
                                <p style={{margin: "0 0 0"}}>@kiipintouch.com</p>
                            </div>
                            </div>
                            </li>
                            {/* <!--  --> */}
                            <li className="unactive" style={{display: "none"}}>
                            <div className="form-row d-flex align-items-center">
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                <input type="email" className="form-control get_free_input" placeholder="abc@yourowndomain.com"/>
                            </div>
 
                            <div className="col-12">
                                <p className="bold_text">On next screen you will set-up an email redirection from your own email to a given email address. So make sure your email is not used for any other purpose.</p>
                            </div>
                            </div>
                            </li>
                        </ul>

                        </div>
                    </div>
                    <div className="col-12 col-sm-2 col-lg-2 col-md-2"></div>
                    </div>

                    {/* <!-- // Auto response setting // -->
                    
                    <!-- // Guidance document // --> */}
                    <div className="row btn_section">      
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 text-center">
                        <button type="button" className="btn btn-default cancle_btn">Cancel</button>
                        <button type="button" className="btn btn-default create_btn">
                            <span className="first_check_radio">Create my KiipBox</span>
                            <span className="second_check_radio" style={{display: "none"}}>Confirm email address</span>
                        </button>
                    </div>
                    </div>
                </div>
                </section>
            </>
    )}
}