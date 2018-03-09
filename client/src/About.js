import React, { Component } from 'react';
// import { Fetch } from 'react-request';
import Flexbox from 'flexbox-react';

import NavBar from './navBar.js';
import FooterBar from './footerBar.js';

import Janessa from "./images/team-cards/001.png";
import Summiyah from "./images/team-cards/002.png";
import Michelle from "./images/team-cards/003.png";
import StaShaun from "./images/team-cards/004.png";

class About extends Component {
  render() {
    return (
        <section className="clear quoteBar">
            <NavBar />
            <Flexbox class="about-content">
                <h1>About GlamPop!</h1>
                <Flexbox>
                    <p>Here at GlamPOP we are dedicated to keeping you Fabulous! Our team has carefully curated an abundance of different looks for you to choose from in our different collections. Whether its a day to day look or you're looking to get more creative we've got you covered. Our dynamic design gives you the ability to like and save your favorite looks to the Vanity of your choice so you can come back later and try your new look! We are dedicated to providing the best experience for you here at GlamPOP so let us capture you with our jaw-dropping makeup looks and get to glamourizing girl!!</p>
                </Flexbox>
                <Flexbox className="team-container">
                    <div className="team-card">
                        <h2>Meet our team!</h2>
                    </div>
                    <div className="team-card">
                        <img src={Janessa} className="team-img" / >
                        <h3>Janessa</h3>
                        <h4>CEO, CTO, COO</h4>
                    </div>
                    <div className="team-card">
                        <img src={Summiyah} className="team-img" / >
                        <h3>Summiyah</h3>
                        <h4>Front End Curator</h4>
                    </div>
                    <div className="team-card">
                        <img src={Michelle} className="team-img" / >
                        <h3>Michelle</h3>
                        <h4>Database Manager</h4>
                    </div>
                    <div className="team-card">
                        <img src={StaShaun} className="team-img" / >
                        <h3>StaShaun</h3>
                        <h4>Creative Director</h4>
                    </div>
                </Flexbox>
            </Flexbox>
            <FooterBar />
        </section>
    );
  }
}

export default About;