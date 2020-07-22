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
                            <h3>I'd love to hear from you</h3>
                        </p>
                        <p>
                            Got a project you would like me to work on? Or how about just a friendly chat?
                            <br/>
                            Click on any of the buttons below to reach me.
                        </p>
                        <div className="contact-btns">
                            <Button colored ripple id="email-btn">&nbsp;&nbsp;&nbsp;E-mail&nbsp;&nbsp;&nbsp;</Button>
                            <Button colored ripple id="social-btn"><i class="fab fa-linkedin"></i> </Button>
                            <Button colored ripple id="social-btn"><i class="fab fa-github"></i> </Button>
                            <Button colored ripple id="social-btn"><i class="fab fa-twitter"></i> </Button>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;