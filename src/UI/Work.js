import React from 'react';
import '../CSS/Work.css';

export default class Work extends React.Component {
    render() {
        return(
            <div className="WorkBackground" id="work">
                <h1>My Work</h1>
                { this.FamilyConnections_Card() }
                <br></br>
                { this.Alpine_Card() }
            </div>
        );
    }
    Alpine_Card = () => {
        return(
            <div className="card">
                <div className="container">
                    <h5>2018</h5>
                    <h4><a href="http://www.alpinevalleyresort.com/" target="_blank">Alpine Valley, Elkhorn, WI</a></h4>
                    <p>Designed a custom built web app reducing the cost, labor, and time</p>
                    <p>required to handle high-school students acquiring rental equipment for skiing/snowboarding.</p>
                    <p>Average savings of $1000+ per year in paper and labor costs</p>
                    <div className="imgDiv">
                        <img src={require('../Assets/avlogo.png')} alt='null' />
                    </div>
                </div>
            </div>
        );
    }
    JonathonLittle_Card = () => {
        return(
            <div className="card">
                <div className="container">
                    <h5>2019</h5>
                    <h4><a href="https://pokercoaching.com/" target="_blank">PokerCoaching, CA</a></h4>
                    <p>Reverse engineered existing app with no access to code</p>
                    <p>Recreated the original app in React Native</p>
                    <p>Created new cross platform mobile application in React Native</p>
                    <div className="imgDiv">
                        <img src={require('../Assets/family-connections-logo.png')} alt='null' />
                    </div>
                </div>
            </div>
        );
    }
    FamilyConnections_Card = () => {
        return(
            <div className="card">
                <div className="container">
                    <h5>2020</h5>
                    <h4><a href="http://familyconnectionsswwi.org/" target="_blank">Family Connections of Southwest Wisconsin, Platteville, WI</a></h4>
                    <p>Migrated WordPress website to a different web host</p>
                    <p>Optimized speed and fixed connection issues</p>
                    <p>Added additional features & changes to WordPress website</p>
                    <div className="imgDiv">
                        <img src={require('../Assets/family-connections-logo.png')} alt='null' />
                    </div>
                </div>
            </div>
        );
    }
}