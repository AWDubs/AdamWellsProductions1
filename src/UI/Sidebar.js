import React from 'react';
import '../CSS/Sidebar.css';

export default class About extends React.Component {
    render() {
        return(
            <div>
                <div className="sidenav">
                    <a href="mailto:wellsadam82@gmail.com">
                    <img src={require('../Assets/email.png')} alt='null'/></a>
                    <br></br>
                    <a href="https://www.linkedin.com/in/adam-m-wells" target="_blank">
                    <img src={require('../Assets/linkedin.png')} alt='null'/></a>
                </div>
            </div>
        );
    }
}