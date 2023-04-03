import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6 text-left'>
                            <h5>About As</h5>
                            <p>I started my salon portfolio to show up my area of intrest.
                                I started my career as a Software Developer after gratuating with computer science degree in 2018 but I never get enough time to work on my portfolio.
                            </p>
                        </div>
                        <div className='col-sm-6 text-right'>
                            <h5>Follow</h5>
                            <FontAwesomeIcon icon="fa-brands fa-instagram" />
                            <a href='#'>LINKEDIN</a>
                        </div>

                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;