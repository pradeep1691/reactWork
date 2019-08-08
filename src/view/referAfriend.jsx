import React, {Component} from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Header from '../component/header/header';

export default class ReferAfriend extends Component {
    render(){
        return(
            <>
            <Header/>
            <section className="mobile-p-15 dashboard-pad">
                <div className="container">
                    <div className="row refer_section">
                    <div className="col-12 col-sm-7 col-md-7 col-lg-7">
                        <div className="refer_friend">
                        <h1>Invite new pros <br/>and help us improve <br/>the service</h1>
                        <p>Share the good news with your friend and family ! Kiip In Touch can be used for free and help people better do their job. Share the good news :)</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-5 col-md-5 col-lg-5">
                        <div className="refer_img">
                            <img src={require('../assets/images/refer_friend.png')} className="img-fluid" />
                        </div>
                    </div>
                    </div>
                    <div className="row send_invitation">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <form className="refer_form">
                        <div className="form-group row">
                            <label className="control-label col-sm-12" for="send-invities">Send invites</label>
                            <div className="col-12 col-sm-12">
                            <div className="d-flex alin-item-center justify-content-between">
                                <input type="email" name="" id="send-invities" placeholder="Enter email address" className="form-control" autofocus="" />
                                {/* <div className="multipleInput-container">
                                    <ul>
                                    </ul>
                                    <input type="email" placeholder="Enter email address" /></div> */}
                                <button type="submit" className="btn btn-default btn_green">Send</button>
                            </div>
                            </div>
                        </div>
                        </form>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 no-pad">
                            <span className="line_bar">OR</span>
                        </div>
                        <div className="row">
                        <div className="col-12 col-sm-3 col-md-3 col-lg-3">
                            <div className="social-box text-center">
                            <Link to="/">
                                <img src={require('../assets/images/copy.png')} />
                                <span>Copy invite link</span>
                            </Link>
                            </div>
                        </div>
                        <div className="col-12 col-sm-3 col-md-3 col-lg-3">
                            <div className="social-box text-center">
                            <Link to="/">
                                <img src={require('../assets/images/facebook.png')} />
                                <span>Share on Facebook</span>
                            </Link>
                            </div>
                        </div>
                        <div className="col-12 col-sm-3 col-md-3 col-lg-3">
                            <div className="social-box text-center">
                            <Link to="/">
                                <img src={require('../assets/images/twitter.png')} />
                                <span>Share on Twitter</span>
                            </Link>
                            </div>
                        </div>
                        <div className="col-12 col-sm-3 col-md-3 col-lg-3">
                            <div className="social-box text-center">
                            <Link to="/">
                                <img src={require('../assets/images/whatsapp.png')} />
                                <span>Share on WhatsApp</span>
                            </Link>
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