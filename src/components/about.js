import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                        <p>
                            Hello! My name is Bhavdeep Singh and I'm a senior studying Computer Science at <a href="https://www.sjsu.edu/" target="_blank" rel="noopener noreferrer">
                                San Jose State University</a>.    
                        </p>
                        <h4><strong>What do I do and what's in it for you?</strong></h4>
                        <p>
                            My goal is to use my skills as a software developer to solve problems. I believe that with my skill set, hard work, determination and tenacity,
                            I will be an asset to your organization<br></br><br></br>
                            <strong>I love solving problems</strong>, whether it's finding out the most effecient way to write a piece of code or finding the 
                            fastest way to beat the next level on a video game. I love the challenge of diving deep into the problem, understanding it and  
                            <em> finding a solution.</em> Perhaps that is why I enjoy playing video games and studying Philosophy in my spare time. <br></br><br></br>
                            I also enjoy my time as a tutor, supplemental instruction leader and mentor. Leading by example, I firmly believe in the phrase
                            "actions speak louder than words" and aim to emoby it with high quality, robust and scalable solutions, as demonstrated in my 
                            <Link to={process.env.PUBLIC_URL + "/projects"}> projects</Link>
                            <br></br><br></br>
                            Wondering if I would be a good fit for your company? Check out my <Link to={process.env.PUBLIC_URL + "/resume"}>resumé</Link> and 
                            <a href="https://linkedin.com/in/bhavdeepsinghb" target="_blank" rel="noopener noreferrer"> LinkedIn profile</a>!
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;