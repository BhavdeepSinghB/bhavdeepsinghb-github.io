import React, { Component } from 'react';
import '../App.css';
import '../About.css';

class About extends Component {
    render() {
        return(
            <div className="landing-grid">
                <div className="about-img">
                    <div className="img-container">
                        <img id="computer-img" src="https://i.imgur.com/wcT2leh.jpg" alt="me working"></img>
                    </div>
                </div>
                <div className="about-text">
                    <div className="paragraph-text">
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at lacus pharetra, porttitor dolor eu, sollicitudin velit. Vestibulum hendrerit dolor libero, in euismod orci euismod in. Sed sagittis nunc eget elit ultrices, sit amet pretium quam dapibus. In in eros ultricies, fermentum elit in, semper metus. 
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. Vivamus elementum luctus tellus, eu fringilla lorem pharetra porta. Cras risus tellus, facilisis et ipsum sed, auctor blandit erat. Curabitur quis dolor porttitor, tristique metus sed, rutrum leo. 
                            Aliquam erat volutpat. Maecenas eleifend velit tortor, vel accumsan metus imperdiet ultrices. Nulla et nibh libero. Proin risus nulla, euismod lacinia pellentesque ut, tincidunt eu lacus. Quisque mollis eget lacus vitae imperdiet. Vivamus eget libero odio. Vivamus suscipit imperdiet tortor vitae pellentesque. 
                            Fusce sed fermentum magna. Sed sit amet arcu vitae risus egestas vehicula. Phasellus tortor odio, pulvinar quis nisl eget, pretium bibendum lectus. Donec consectetur urna sed nibh pulvinar pretium. Aenean a ex a leo lobortis ornare.  
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;