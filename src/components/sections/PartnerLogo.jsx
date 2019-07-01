import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';
import partnerOne from '../../assets/images/partner-one.png';
import partnerTwo from '../../assets/images/partner-two.png';
import partnerThree from '../../assets/images/partner-three.png';
import partnerFour from '../../assets/images/partner-four.png';
import partnerFive from '../../assets/images/partner-five.png';
import partnerSix from '../../assets/images/partner-six.png';

const options = {
    loop: true,
    nav: false,
    dots: false,
    smartSpeed: 2000,
    margin: 30,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='flaticon-back'></i>",
        "<i class='flaticon-right'></i>"
    ],
    responsive: {
        0: {
            items: 2
        },
        576: {
            items: 3
        },
        768: {
            items: 4
        },
        1200: {
            items: 6
        }
    }
}
 
class PartnerLogo extends React.Component {
    render(){
        return (
            <div className="partner-area uk-section uk-padding-remove-top">
                <div className="uk-container">
                    {/* <div className="partner-slides owl-carousel owl-theme"> */}
                    <OwlCarousel 
                        className="partner-slides owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="item">
                            <Link to="#">
                                <img src={partnerOne} alt="Partner" />
                            </Link>
                        </div>

                        <div className="item">
                            <Link to="#">
                                <img src={partnerTwo} alt="Partner" />
                            </Link>
                        </div>

                        <div className="item">
                            <Link to="#">
                                <img src={partnerThree} alt="Partner" />
                            </Link>
                        </div>

                        <div className="item">
                            <Link to="#">
                                <img src={partnerFour} alt="Partner" />
                            </Link>
                        </div>

                        <div className="item">
                            <Link to="#">
                                <img src={partnerFive} alt="Partner" />
                            </Link>
                        </div>

                        <div className="item">
                            <Link to="#">
                                <img src={partnerSix} alt="Partner" />
                            </Link>
                        </div>
                        </OwlCarousel>
                    {/* </div> */}
                </div>
            </div>
        );
    }
}
 
export default PartnerLogo;