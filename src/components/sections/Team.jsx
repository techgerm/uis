import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';
import teamOne from '../../assets/images/team1.jpg';
import teamTwo from '../../assets/images/team2.jpg';
import teamThree from '../../assets/images/team3.jpg';
import teamFour from '../../assets/images/team4.jpg';
import teamFive from '../../assets/images/team5.jpg';

const options = {
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 2000,
    margin: 15,
    autoplayHoverPause: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        786: {
            items: 2
        },
        1200: {
            items: 5
        }
    }
}
 
class Team extends React.Component {
    render(){
        return (
            <section id="team" className="team-area  uk-team uk-section">
                <div className="uk-container">
                    <div className="uk-section-title section-title">
                        <span>Meet Our Experts</span>
                        <h2>Our Team</h2>
                        <div className="bar"></div>

                        <Link to="#" className="uk-button uk-button-default">View All</Link>
                    </div>
                </div>

                <OwlCarousel 
                    className="team-slides owl-carousel owl-theme"
                    {...options}
                >
                    <div className="single-team">
                        <ul className="team-social">
                            <li><Link to="#"><i className="flaticon-logo"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-twitter"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-linkedin"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-logo-1"></i></Link></li>
                        </ul>

                        <img src={teamOne} alt="team" />

                        <div className="team-content">
                            <h3>Josh Buttler</h3>
                            <span>Content Writter</span>
                        </div>
                    </div>

                    <div className="single-team">
                        <ul className="team-social">
                            <li><Link to="#"><i className="flaticon-logo"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-twitter"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-linkedin"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-logo-1"></i></Link></li>
                        </ul>

                        <img src={teamTwo} alt="team" />

                        <div className="team-content">
                            <h3>David Warner</h3>
                            <span>UX/UI Desinger</span>
                        </div>
                    </div>

                    <div className="single-team">
                        <ul className="team-social">
                            <li><Link to="#"><i className="flaticon-logo"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-twitter"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-linkedin"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-logo-1"></i></Link></li>
                        </ul>

                        <img src={teamThree} alt="team" />

                        <div className="team-content">
                            <h3>Emili Lucy</h3>
                            <span>Project Manager</span>
                        </div>
                    </div>

                    <div className="single-team">
                        <ul className="team-social">
                            <li><Link to="#"><i className="flaticon-logo"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-twitter"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-linkedin"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-logo-1"></i></Link></li>
                        </ul>

                        <img src={teamFour} alt="team" />

                        <div className="team-content">
                            <h3>Steven Smith</h3>
                            <span>Marketing Manager</span>
                        </div>
                    </div>

                    <div className="single-team">
                        <ul className="team-social">
                            <li><Link to="#"><i className="flaticon-logo"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-twitter"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-linkedin"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-logo-1"></i></Link></li>
                        </ul>

                        <img src={teamFive} alt="team" />

                        <div className="team-content">
                            <h3>Steve Eva</h3>
                            <span>Creative Desinger</span>
                        </div>
                    </div>

                    <div className="single-team">
                        <ul className="team-social">
                            <li><Link to="#"><i className="flaticon-logo"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-twitter"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-linkedin"></i></Link></li>
                            <li><Link to="#"><i className="flaticon-logo-1"></i></Link></li>
                        </ul>

                        <img src={teamOne} alt="team" />

                        <div className="team-content">
                            <h3>Josh Buttler</h3>
                            <span>Content Writter</span>
                        </div>
                    </div>
                </OwlCarousel>
            </section>
        );
    }
}
 
export default Team;