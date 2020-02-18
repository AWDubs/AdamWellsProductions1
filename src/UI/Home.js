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
                    <div className="fifthFont">Let's build your business together.</div>
                </div>
                
            </div>
        );
    }
}