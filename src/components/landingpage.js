import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import $ from 'jquery';
//TODO: <!--Change image to vector illustration-->

class Landing extends Component {
    render() {
        var terms = ["Aspiring Software Developer", "Computer Science Student", "Computer Science Tutor", "Supplemental Instruction Leader", "Overwatch Team Captain"];
        function rotateTerm() {
        var ct = $("#rotate").data("term") || 0;
        $("#rotate").data("term", ct === terms.length -1 ? 0 : ct + 1).text(terms[ct]).fadeIn()
                    .delay(1500).fadeOut(200, rotateTerm);
        }
        $(rotateTerm);
        return(
            <div style={{width: '100%', margin: 'auto'}}>   
                <Grid className="landing-grid" style={{overflow: 'hidden'}}>
                    <Cell col={6}>
                        <div className="banner-text">
                                <h1> Hi, I'm Bhavdeep! </h1>
                                <h3 id="rotate"> Aspiring Software Developer </h3>
                                <hr />
                                <div className="social-links">
                                    <a href="https://github.com/bhavdeepsinghb" rel="noopener noreferrer" target="_blank">
                                        <i class="fab fa-github"></i>
                                    </a>
                                    
                                    <a href="https://www.linkedin.com/in/bhavdeepsinghb/" rel="noopener noreferrer" target="_blank">
                                        <i class="fab fa-linkedin"></i>
                                    </a>
                                    
                                    <a href="https://twitter.com/bhavderpp" rel="noopener noreferrer" target="_blank">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                    
                                    <a href="https://medium.com/@bhavderp" rel="noopener noreferrer" target="_blank">
                                        <i class="fab fa-medium"></i>
                                    </a>
                                </div>
                        </div>
                    </Cell>
                    <Cell col={6}>
                        <div className="img-content">
                            <img 
                                src="https://i.imgur.com/YwnAGMh.png"
                                alt="avatar"
                                id="optionalstuff"
                                className="avatar-img"
                            />
                            <div className="img-credit">
                                    Image courtesy: <a href="https://www.devrant.com">DevRant</a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;