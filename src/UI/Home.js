import React from 'react';
import Header from './Header';
import '../CSS/Home.css';

export default class Home extends React.Component {
    render() {
        return(
            <div className="HomeBackground" id="home">
                <Header />
                <div className="content">
                    <div className="centralFont">
                        <div className="typingeffect">
                                <text>Hey, I'm a</text>
                        </div>
                        <p>Software Developer</p>
                    </div>
                    <p>I create <i>elegant</i> & <i>powerful</i> software applications</p>
                </div>
                <div className="fifthFont">Let's build your business together.</div>
            </div>
        );
    }
    InitialPage = () => {
        return(
            <div>
                <div className="nameContainer">
                    <img src={require("../Assets/phonecomputer.png")} />
                </div>
                <br></br>
                <div className="typingeffect">
                        <div className="secondFont">Hey,</div>
                </div>
                    <br></br>
                <div className="typingeffect2">
                        <div className="secondFont">I'm a software developer.</div>
                </div>
                <br></br><br></br><br></br><br></br>
                        <div className="thirdFont">
                            I create
                                <br></br>
                            <mark>elegant </mark> 
                            {" & "}
                            <mark>powerful </mark>
                                <br></br>
                            software applications
                        </div>
                <br></br><br></br><br></br><br></br>
                <div className="fifthFont">Let's build your business together.</div>
            </div>
        );
    }
}