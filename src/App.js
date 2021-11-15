import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Testimonials from './Components/Testimonials';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {
        "main": {
          "name": "Jiaming Zhang",
          "occupation": "Graduate Student at Univerity of Illinois",
          "description": "First year master student in Computer Science",
          "image": "profilepic.jpg",
          "bio": "Born in Wuhan, love gym, tennis, cars, games, and anime. Favorite anime: Gundam and RevueStarlight. Currently playing: Apex Legends. Interested in front end developing with Reactjs. Can write some TypeScript as well. Currently learning Java with Springboot and Vuejs",
          "contactmessage": "Here to contact me",
          "email": "qq1104382148@gmail.com",
          "phone": "217-904-4877",
          "address": {
            "street": "This is a secret",
            "city": "U.S.",
            "state": "IL",
            "zip": "Eyes only"
          },
          "website": "https://jiaming1999.github.io/jiamingzhang/",
          "resumedownload": "N/A",
          "social": [
            {
              "name": "facebook",
              "url": "https://www.facebook.com/jiaming.zhang.712/",
              "className": "fa fa-facebook"
            },
            {
              "name": "twitter",
              "url": "https://twitter.com/NerdyJoel",
              "className": "fa fa-twitter"
            },
            {
              "name": "linkedin",
              "url": "https://www.linkedin.com/in/jiaming-zhang-06baaa170/",
              "className": "fa fa-linkedin"
            },
            {
              "name": "instagram",
              "url": "https://www.instagram.com/jiaming3207/",
              "className": "fa fa-instagram"
            },
            {
              "name": "github",
              "url": "http://github.com/Jiaming1999",
              "className": "fa fa-github"
            }
          ]
        },
        "resume": {
          "skillmessage": "I am trying to find a software employer job and in frontend more preferrably. Interested tech: Java with Springboot, JavaScript and TypeScript with React.",
          "education": [
            {
              "school": "University Of Illinois Urbana Champaign",
              "degree": "Masters in Computer Science",
              "graduated": "Decemeber 2022",
              "description": "Topics in flaky testing/Distributed System/Networking"
            },
            {
              "school": "University Of Illinois Urbana Champaign",
              "degree": "Bachelor in Math and Computer Science",
              "graduated": "April 2021",
              "description": "Algorithm/Data Structure/Virtual Reality/Augmented Reality/Web Development"
            }
          ],
          "work": [
            {
              "company": "ScribeAR Research Team",
              "title": "FrontEnd Developer",
              "years": "Nov 2019 - May 2021",
              "description": "Front End Developer, responsible of developing user interaction interface for the Scribe AR glasses web application."
            },
            {
              "company": "FreeTitle",
              "title": "FrontEnd Developer",
              "years": "Sept 2020 - Jan 2021",
              "description": "Member of Team Front End 2, responsible of developing the static web part of forum of Free Title website."
            }
          ],
          "skills": [
            {
              "name": "Git",
              "level": "60%"
            },
            {
              "name": "Python",
              "level": "70%"
            },
            {
              "name": "ReactJs",
              "level": "80%"
            },
            {
              "name": "JavaScript",
              "level": "70%"
            },
            {
              "name": "Java",
              "level": "60%"
            },
            {
              "name": "VueJs",
              "level": "40%"
            },
            {
              "name": "MongoDB",
              "level": "70%"
            }
          ]
        },
        "portfolio": {
          "projects": [
          ]
        },
        "testimonials": {
          "testimonials": [
            {
              "text": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
              "user": "Winston Churchill"
            },
            {
              "text": "Death is nothing, but to live defeated and inglorious is to die daily.",
              "user": "Napoleon Bonaparte"
            }
          ]
        }
      }
    };
    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Testimonials data={this.state.resumeData.testimonials} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
