import React, { Component } from 'react';
import "../Resume.css";

class Resume extends Component {
    render() {
        return(
            <div className="resume-container">
                <div className="resume-main">
                    <iframe id="resume-frame" title="resume" src="https://www.dropbox.com/s/h4wvdtg60rg35ts/BhavdeepSinghResume.pdf?raw=1"></iframe>
                </div>
            </div>
        )
    }
}

export default Resume;