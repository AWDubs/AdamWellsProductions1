import React from 'react';
import '../CSS/Contact.css';

export default class Contact extends React.Component {
    render() {
        return(
            <div className="contact" id="contact">
                <h1>Contact Info</h1>
                <h2>I create software to help expand your business</h2>
                <h3>Need a software solution?</h3>
                <h3>Contact me at:</h3>
                <div className="contact_center">
                    <h4>
                        <a href="mailto:wellsadam82@gmail.com">wellsadam82@gmail.com</a>
                    </h4>
                    <h4>
                        <a href="https://www.linkedin.com/in/adam-m-wells" target="_blank">Linkedin.com/in/adam-m-wells</a>
                    </h4>
                </div>
            </div>
        );
    }
}