import React from 'react';
import footerShape from '../../assets/images/footer-shape1.png';
 
class Newsletter extends React.Component {

    state = {
        term: ''
    };

    onFormSubmit = (e) => {
        e.preventDefault();
    }

    render(){
        return (
            <section className="subscribe-area uk-section  uk-subscribe bg-gray">
                <div className="uk-container">
                    <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-1@s">
                        <div className="item">
                            <h3>Subscribe to our newsletter</h3>
                        </div>

                        <div className="item">
                            <form 
                                className="newsletter-form"
                                onSubmit={this.onFormSubmit}
                            >
                                <input 
                                    type="email" 
                                    className="uk-input" 
                                    placeholder="name@gmail.com" 
                                    value={this.state.term}
                                    onChange={v => this.setState({ term: v.target.value })}
                                />

                                <button 
                                    type="submit" 
                                    className="uk-button uk-button-default"
                                >
                                    Subscribe Now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="shape">
                    <img src={footerShape} alt="shape" />
                </div>
            </section>
        );
    }
}
 
export default Newsletter;