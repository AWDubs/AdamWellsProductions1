/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import '../CSS/About.css';

export default class About extends React.Component {
    render() {
        return(
            <div className="about" id="about">
                <h1></h1>
                    <div className="horizontal">
                        <img src={require('../Assets/Adam.jpg')} alt=''/>
                        <div className="card">
                            <div className="container">
                                <h1>My name is Adam Wells</h1>
                                <p>I am 22 years old, and I am currently a senior
                                    studying Software Engineering & Spanish Language
                                    at the University of Wisconsin-Platteville.
                                    <br></br><b>Se habla Español.</b></p>
                                <br></br>
                                <p>I specialize in creating software to help drive your business: 
                                    <br></br>
                                    from website & mobile app design, to back-end API coding, automation scripting, and much more.</p>
                                <br></br>
                                <p>I am located in Wisconsin, but I am looking for remote work as well.</p>
                            </div>
                        </div>
                    </div>
                <h1></h1>
            </div>
        );
    }
}