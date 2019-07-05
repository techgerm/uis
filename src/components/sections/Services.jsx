import React from 'react';
import { Link } from 'react-router-dom';
 
class Services extends React.Component {
    render(){
        return (
            <section id="services" className="services-area  uk-services uk-section">
                <div className="uk-container">
                    <div className="uk-section-title section-title">
                        <span>What We Do</span>
                        <h2>Our Services</h2>
                        <div className="bar"></div>
                    </div>

                    <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@m uk-child-width-1-2@s">
                        <div className="item">
                            <div className="single-services">
                                <div className="icon">
                                    <i className="flaticon-plan"></i>
                                </div>
                                <h3>Digital Branding</h3>

                                <i className="flaticon-right link-btn"></i>

                                <Link to="#" className="link uk-position-cover"></Link>
                            </div>
                        </div>

                        <div className="item">
                            <div className="single-services">
                                <div className="icon">
                                    <i className="flaticon-think"></i>
                                </div>
                                <h3>Creative Solutions</h3>

                                <i className="flaticon-right link-btn"></i>

                                <Link to="#" className="link uk-position-cover"></Link>
                            </div>
                        </div>

                        <div className="item">
                            <div className="single-services">
                                <div className="icon">
                                    <i className="flaticon-shout"></i>
                                </div>
                                <h3>Marketing Solutions</h3>

                                <i className="flaticon-right link-btn"></i>

                                <Link to="#" className="link uk-position-cover"></Link>
                            </div>
                        </div>

                        <div className="item">
                            <div className="single-services">
                                <div className="icon">
                                    <i className="flaticon-analytics-1"></i>
                                </div>
                                <h3>Business Analytics</h3>

                                <i className="flaticon-right link-btn"></i>

                                <Link to="#" className="link uk-position-cover"></Link>
                            </div>
                        </div>

                        <div className="item">
                            <div className="single-services active">
                                <div className="icon">
                                    <i className="flaticon-ux-design"></i>
                                </div>
                                <h3>UX & UI Design</h3>

                                <i className="flaticon-right link-btn"></i>

                                <Link to="#" className="link uk-position-cover"></Link>
                            </div>
                        </div>

                        <div className="item">
                            <div className="single-services">
                                <div className="icon">
                                    <i className="flaticon-camera"></i>
                                </div>
                                <h3>Photography</h3>

                                <i className="flaticon-right link-btn"></i>

                                <Link to="#" className="link uk-position-cover"></Link>
                            </div>
                        </div>

                        <div className="item">
                            <div className="single-services">
                                <div className="icon">
                                    <i className="flaticon-project"></i>
                                </div>
                                <h3>Management</h3>

                                <i className="flaticon-right link-btn"></i>

                                <Link to="#" className="link uk-position-cover"></Link>
                            </div>
                        </div>

                        <div className="item">
                            <div className="single-services">
                                <div className="icon">
                                    <i className="flaticon-chat"></i>
                                </div>
                                <h3>Social Media</h3>

                                <i className="flaticon-right link-btn"></i>

                                <Link to="#" className="link uk-position-cover"></Link>
                            </div>
                        </div>

                        <div className="item">
                            <div className="single-services">
                                <div className="icon">
                                    <i className="flaticon-data"></i>
                                </div>
                                <h3>Data Science</h3>

                                <i className="flaticon-right link-btn"></i>

                                <Link to="#" className="link uk-position-cover"></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Services;