import React, { Component } from 'react';
import { Grid, Cell, Button } from 'react-mdl';
import '../App.css';

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {matches: window.matchMedia("(max-width:629px)").matches}
    }

    columnNumber() {
        console.log(this.state.matches)
        if(this.state.matches === true) {
            return 4
        }
        else {
            return 3
        }
    }

    render() {
        return(
            <div className="landing-grid" style={{background: '#5ABFC1'}}>
                <Grid className="project-grid">
                    <Cell col={this.columnNumber()} row={5} className="project-cell">
                        <div className="project-img">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAeFBMVEURMij////v8fEIKyBNZl5edW73+fg9WFDk6OYOLyUXNy0SMyns7+6MnJfR19UtSkGrtrNUa2UfPTQmRDtrgHkiQDfFzcvZ3tw1UUiElZB5i4a0vruaqKREXlbf5OJZcGmir6t0h4G+x8SSoZ3N09HCyshme3R/kYyxQUeyAAAHaklEQVR4nO2da3OrKhRA0aAIqPiKkvg2qfn///DGpCfNY5u0aRuh1/WpZ8Y5YY2C7M0GkXGJk69xjFQnxuugumw4Ov+HmRZtTQSbup0PYYKEySY1YRE7CxKpvsQJkTS+CYi4b61knE/dvM/DWVzn7o1IVZSxRrfjyLL0/EsRe+uVU7fqKchua5+J2H4ipm7Sk4jEtz9E/LUGQxUMi5PtSaTyhEad/Aoudv67iNno2T/+QTz3IGL7oa7P1RFe5uYgkrW6dvR/RLW/F7FznV7nIDxuXGRkO9099kNXkiKjKfUX4WKDzF2k79B7giVoa03diB8hRBs8dRt+BIIsOXUbfgSB5HLqNvwIDEX6j1lHdIoJZ2ZmZmZmZmZmZmZm/k9wBqJfFMckgbhIEFCQqVoMQ0URADQlPbtk5QGshFIqC+IYALa1+LgEm9AlJl7c+X9fziwyi/wSs8gs8kvMIrPILzGLzCK/xCwyi/wSs8gs8kv8v0Rs8BL9RMrUB0hL3UToEocAeKlbOgjxCEStZORnRLTINH5KRAdmEdWYRablfbxZHDn8qZ3I0GoWyzK0rGR9JLFqLGvNhl8exULixCve/NNWOjfb5psCnBFeiDABMk2x6DLcBdvKcU3b/pgC7v92QY/LKYpswEUt+ep7QmmE26LLXHASC3M5aaxcgOrFk0ZK47Jvsi9I3IgoEY9wtuzzr9wLRUXoMgx8uBvoJEK5bPMnNFQToUx62TMayomUjfPl3qGgCLMC8K2tmQhlOH/ydqglgkjz9P1QSYQS79n+oZQIX6596Ne1E4nq7jseyohw+dx7UDURGicV9Nv6ieB7N8R2/LTLD3SpDw9taohw1rrQT79rpEWCZTRUYC4lbpuHEeKEIjgY9XCCnog4Yoc4HLEoCtVdH6F8NzZVNNMVXi7OEgd0IdUVQXEz8io0u+R6n6zCK1Y0CtMRj7y+KUxWWUSs4LHX9vvbtRmFRRYyh8esagOUHCssQksf7iI5dGaEwiIMToIazgpKDSosErfwK66roasVFpEeLOKBRy0oLFLCbxGzB5PO6orQEAzV7QyDOWeFRawUEjE7OOessEgCjr7uyCqAyiJg5t3x/ohI5cE7iWaRWWQWeRcZ2W2nnYiz+SOjlpmTvyFib7V7s/dbcNJYhbrdERzA1a0teIK2uiKoLGCRBjzDTmERAgdWht9CZaEKi4yEuvtbAh2xq7AIxSMZ7G0LlBwrLLIgI+kgswsjnRJ0VDYjt8RscKSTSNyOJePtAF8XgqsswsqRJPY+4O12hF+UIyosMpwOPLrwZmfDclXM6OK92pRidUUoa7djIsbwmYxVj6UQcSyEFOUK7FBKiCBOijsihuk6VeZ3QdD5WVYpvRgaJdXD8g3bvVcgqIYIoqQYX9b9FIqIIIbv9RKNRFD8vZqaywLmcEIRJjffqNa6FIn6SQvPwuA73eRcRKzhdYoXibDyOyYKiVCGn6/NVEkEURQ2Txc7nYvIFSjivq7ulxPv8YvxschINuOFuxUok/2Tj9djETslL6yNRxH2umf6/LmI1cFreS8UGVyWdeOPbNv5pAgcp71aZNhchVf5Vx+wc5EdeEtfLoLogg27xILt5x4xN0vzxms/FiHYBuzrTvHyPVbD9iQmcLvJ3/ysck3zpmGmabpVlW23b3lQ7JK6FB/R8D7eBIXHFlx+GT4ckLkkdbtq8s53zAuqrtvfhFUbhjKKrs7NHPYKqCSCDrsi2TIWkpASX1ISQobYd29xs1WSjtWm+9aUJwyc7W+9Ymyz5yIembKlun0xiIwENp1U66iEB1DRjozc+W36VWUWZQC/TM2CaSXCxvIx/lorEVbCL5H9k6XX9/MibyyiKXTq6zSyxtLh9lqnw6b5aNhv+/WLZ4zfQsIJ7j3uBq6jUBHK72z0reqbpS9VoVE57mHmE0zhn4MzPLYSaYysD6sI5XF7L9Rv9Pi4L10ssQdX5hzxEx2GXsoj0Y9MsI64Hpm6kZ+A8zgM7qb1zE6HL0wy2Rfp/SwFtMFJObho3x7kwDIv1qCH7Ge72W2S5QzbWWnxGW8eSau4d6qN4xEdPA7nDJFkvJdkHtEnntpPsvrGh85ZsDM9nqsTLIrL1e0b0d4mOvTzcyhlMtxdTVKyItTNY4Ci2Np02Wksdt5WJdKme1zA+bLcdce+YmYNXmp4O97hLCbJEO06jSUUO4P1a1BKY7wuiraMVDuD9QmYEJp2jis41yKKmnmeP/M18FibVNIDsJi6BT9ChNY6hPyPkagJp27Dj4BR1k/dhh/BQrYWUf8DeLRDRl7r/4plZYMMt/gDIrsMGUZ6uyFHMxjJbXSoLNK8lwznM+1FjKrXOrxBrK6Mg4jdWVp3k8ORLegQOwdYX5P9iDXkZdAxmdEQXTs8k8Wh+uAoYrh5qGk3KYtjRuZdxHCDHtzPrTiR9a++/Z+IYb615PpsP9WJZH+qgj6JGLbb1DHTJ2DkLMLFx2reh8j+8doGidRm+BJWkZ6V4Z2LDCX2xdrCcjjLU11YFEtct5vLbPh/g6WWBQ6c/sEAAAAASUVORK5CYII="
                             alt="django-img"
                             id="django-img"
                            ></img> 
                        </div>
                        <div className="project-desc">
                            <h3>Crypto<br></br>Venture</h3>
                            <p>A web application to predict prices of bitcoin and serve as a discussion forum for cryptocurrency enthusiasts</p>
                            <a href="https://github.com/BhavdeepSinghB/Starburst" target="_blank" rel="noopener noreferrer"><Button raised colored ripple id="github-btn">Github</Button></a>
                        </div>
                    </Cell>
                    <Cell col={this.columnNumber()} row={5} className="project-cell">
                        <div className="project-img">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png"
                             alt="laravel-img"
                             id="laravel-img"
                            ></img> 
                        </div>
                        <div className="project-desc">
                            <h3>Free Freakin Food</h3>
                            <p>A web application to serve as a discussion board for all offers of free food around the SJSU campus</p>
                            <a href="https://github.com/BhavdeepSinghB/FFF/tree/WorkingBackendBranch" target="_blank" rel="noopener noreferrer"><Button raised colored ripple id="github-btn">Github</Button></a>
                        </div>
                    </Cell>
                    <Cell col={this.columnNumber()} row={5} className="project-cell">
                        <div className="project-img">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
                             alt="python-img"
                             id="python-img"
                            ></img> 
                        </div>
                        <div className="project-desc">
                            <h3>TrainBot</h3>
                            <p>A Python based Discord bot to manage creation and distribution of beta invites for the morningstreams website</p>
                            <a href="https://github.com/BhavdeepSinghB/100DaysOfCode/tree/master/TrainBot" target="_blank" rel="noopener noreferrer"><Button raised colored ripple id="github-btn">Github</Button></a>
                        </div>
                    </Cell>
                    <Cell col={this.columnNumber()} row={5} className="project-cell">
                        <div className="project-img">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
                             alt="python-img"
                             id="python-img"
                            ></img> 
                        </div>
                        <div className="project-desc">
                            <h3>CSUEBot</h3>
                            <p>A twitter bot created in Python to automate Social Media management for student organizations</p>
                            <a href="https://github.com/BhavdeepSinghB/CSUEbot" target="_blank" rel="noopener noreferrer"><Button raised colored ripple id="github-btn">Github</Button></a>
                        </div>
                    </Cell>
                    <Cell col={this.columnNumber()} row={5} className="project-cell">
                        <div className="project-img">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
                             alt="python-img"
                             id="python-img"
                            ></img> 
                        </div>
                        <div className="project-desc">
                            <h3>WhoIsOn</h3>
                            <p>A Python based Discord bot created to faciliate grouping up for e-sports teams</p>
                            <a href="https://github.com/BhavdeepSinghB/whoison" target="_blank" rel="noopener noreferrer"><Button raised colored ripple id="github-btn">Github</Button></a>
                        </div>
                    </Cell>
                    <Cell col={this.columnNumber()} row={5} className="project-cell">
                        <div className="project-img">
                            <img src="https://www.pngitem.com/pimgs/m/31-312155_c-programming-language-logo-hd-png-download.png"
                             alt="python-img"
                             id="python-img"
                            ></img> 
                        </div>
                        <div className="project-desc">
                            <h3>The App Sitter</h3>
                            <p>An attempt at a minimal clone of the linux kernel's "init" file. Takes care of shutting down/respawning processes based on time</p>
                            <a href="https://github.com/BhavdeepSinghB/the-app-sitter" target="_blank" rel="noopener noreferrer"><Button raised colored ripple id="github-btn">Github</Button></a>
                        </div>
                    </Cell>
                    <Cell col={this.columnNumber()} row={5} className="project-cell">
                        <div className="project-img">
                            <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                             alt="c-img"
                             id="c-img"
                            ></img> 
                        </div>
                        <div className="project-desc">
                            <h3>Online Portfolio</h3>
                            <p>The website you're viewing right now! Created as an attempt to learn ReactJS</p>
                            <a href="https://github.com/BhavdeepSinghB/bhavdeepsinghb.github.io" target="_blank" rel="noopener noreferrer"><Button raised colored ripple id="github-btn">Github</Button></a>
                        </div>
                    </Cell>
                    <Cell col={this.columnNumber()} row={5} className="project-cell">
                        <div className="project-img">
                            <img src="data:image/png;base64,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"
                             alt="asm-img"
                             id="asm-img"
                            ></img> 
                        </div>
                        <div className="project-desc">
                            <h3>Checkers</h3>
                            <p>A game of single or multiplayer (2) checkers created in pure MIPS assembly.</p>
                            <a href="https://github.com/BhavdeepSinghB/AssemblyCheckers" target="_blank" rel="noopener noreferrer"><Button raised colored ripple id="github-btn">Github</Button></a>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;