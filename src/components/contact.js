import React, { Component } from 'react';
import { Button } from 'react-mdl';
import '../App.css'
import '../contact.css'
class Contact extends Component {
    render() {
        return(
            <div className="landing-grid">
                <div className="contact-img-div">
                    <img src="https://i.imgur.com/ygVmkfA.png" id="self-contact-img" alt="img-of-self"/>
                </div>
                <div className="contact-text">
                    <div>
                        <p>
                            <h3>I'd Love to Hear From You</h3>
                        </p>
                        <p>
                            Got a project you would like me to work on? Or how about just a friendly chat?
                            <br/>
                            Click on any of the buttons below to reach me.
                        </p>
                        <div className="contact-btns">
                            <a href="mailto: bhavdeepsingh2016@gmail.com" target="_blank" rel="noopener noreferrer"><Button colored ripple id="email-btn">&nbsp;&nbsp;&nbsp;E-mail&nbsp;&nbsp;&nbsp;</Button></a>
                            <a href="https://linkedin.com/in/bhavdeepsinghb" target="_blank" rel="noopener noreferrer"><Button colored ripple id="social-btn"><i class="fab fa-linkedin"></i> </Button></a>
                            <a href="https://github.com/bhavdeepsinghb" target="_blank" rel="noopener noreferrer"><Button colored ripple id="social-btn"><i class="fab fa-github"></i> </Button></a>
                            <a href="https://twitter.com/bhavderpp" target="_blank" rel="noopener noreferrer"><Button colored ripple id="social-btn"><i class="fab fa-twitter"></i> </Button></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;