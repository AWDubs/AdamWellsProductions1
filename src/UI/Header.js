import React from 'react';
import '../CSS/Header.css';

export default class Header extends React.Component {
    render() {
        return(
            <div className="header">
                <div className="nameCard"><p>Adam Wells</p></div>
                <img src={require("../Assets/AW.png")} alt='null' />
                <ul>
                    <li><a href="#skills">Services</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul> 
            </div>
        );
    }
    nameCard = () => {
        return(
            <div className="nameCard horizontal">
                <img src={require("../Assets/Adam.jpg")} alt='null' />
                <p>Adam<br></br>Wells</p>
            </div>
        );
    }
}