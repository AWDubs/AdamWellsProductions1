import React from 'react';
import '../CSS/Skills.css';

export default class Home extends React.Component {
    render() {
        return(
            <div className="skills" id="skills">
                <h1>Services I Provide</h1>
                <div className="skillscontainer">
                    <div className="skillshorizontal">
                        <img src={require("../Assets/all.png")} alt='null' />
                        <ul>
                            <li>
                                <img src={require("../Assets/computer_icon.png")} alt='null' />
                                <div>
                                    <h3>Websites</h3>
                                    <div className="skillslanguages">
                                        <text>React.js</text>
                                        <br className="skillsBreakLine" />
                                        <text>HTML</text>
                                        <br className="skillsBreakLine" />
                                        <text>CSS</text>
                                        <br className="skillsBreakLine" />
                                        <text>JavaScript</text>
                                    </div>
                                </div>
                            </li>
                            
                            <li>
                                <img src={require("../Assets/phone_icon.png")} alt='null' />
                                <div>
                                    <h3>Mobile Apps</h3>
                                    <div className="skillslanguages">
                                        <text>React Native</text>
                                    </div>
                                </div>
                            </li>
                        
                            <li>
                                <img src={require("../Assets/server_icon.png")} alt='null' />
                                <div>
                                    <h3>Server & Backend</h3>
                                    <div className="skillslanguages">
                                        <text>Microsoft Azure</text>
                                        <br className="skillsBreakLine" />
                                        <text>C#</text>
                                        <br className="skillsBreakLine" />
                                        <text>Python</text>
                                        <br className="skillsBreakLine" />
                                        <text>SQL</text>
                                        <br className="skillsBreakLine" />
                                        <text>C++</text>
                                        <br className="skillsBreakLine" />
                                        <text>Java</text>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

Card = (text) => {
    return(
        <div class="card">
            <div class="container">
                <h3><b>{text}</b></h3> 
            </div>
        </div>
    );
}
OriginalSkills = () => {
    return(
        <div>
                <div class="row">
                    <div class="column"><h2>Websites</h2></div>
                    <div class="column"><h2>Mobile Applications</h2></div>
                    <div class="column"><h2>Server & Backend</h2></div>
                </div>
                <div class="row">
                    <div class="column">
                        { this.Card("React.js") }
                        <br></br>
                        <div class="arrow-down"></div>
                        <br></br>
                        { this.Card("HTML") }
                        { this.Card("CSS") }
                        { this.Card("JavaScript") }
                        <br></br><br></br>
                    </div>
                    <div class="column">
                        { this.Card("React Native") }
                        <br></br>
                        <div class="arrow-down"></div>
                        <br></br>
                        <div class="horizontal">
                            { this.Card("Android") }
                            { this.Card("iOS") }
                        </div>
                        <br></br><br></br>
                    </div>
                    <div class="column">
                        { this.Card("Microsoft Azure") }
                        <br></br><br></br>
                        { this.Card("Node.js") }
                        <br></br><br></br>
                        { this.Card("C#") }
                        <br></br><br></br>
                        { this.Card("Python") }
                        <br></br><br></br>
                        { this.Card("SQL") }
                    </div>
                </div>
                <br></br>
            </div>
    );
}
}