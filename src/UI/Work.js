import React from 'react';
import '../CSS/Work.css';

export default class Work extends React.Component {
    render() {
        return(
            <div class="WorkBackground" id="work">
                <h1>My Work</h1>
                { this.AlpineCard() }
            </div>
        );
    }
    AlpineCard = () => {
        return(
            <div class="card">
                <div class="container">
                    <h5>2018</h5>
                    <h4><a href="http://www.alpinevalleyresort.com/" target="_blank">Alpine Valley, Elkhorn, WI</a></h4>
                    <p>Designed a custom built web app reducing the cost, labor, and time</p>
                    <p>required to handle high-school students acquiring rental equipment for skiing/snowboarding.</p>
                    <p>Average savings of $1000+ per year in paper and labor costs</p>
                    <div class="imgDiv">
                        <img src={require('../Assets/avlogo.png')} alt='null' />
                    </div>
                </div>
            </div>
        );
    }
}