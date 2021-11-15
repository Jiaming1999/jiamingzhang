import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';

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
          "bio": "React follower, do some front end work",
          "contactmessage": "Here to contact me",
          "email": "qq1104382148@gmail.com",
          "phone": "217-904-4877",
          "address": {
            "street": "This is a secret",
            "city": "U.S.",
            "state": "Himitsu",
            "zip": "Eyes only"
          },
          "website": "https://jiaming1999.github.io/jiamingzhang/",
          "resumedownload": "N/A",
          "social": [
            {
              "name": "facebook",
              "url": "http://facebook.com/",
              "className": "fa fa-facebook"
            },
            {
              "name": "twitter",
              "url": "http://twitter.com",
              "className": "fa fa-twitter"
            },
            {
              "name": "linkedin",
              "url": "https://www.linkedin.com/",
              "className": "fa fa-linkedin"
            },
            {
              "name": "instagram",
              "url": "http://instagram.com/",
              "className": "fa fa-instagram"
            },
            {
              "name": "github",
              "url": "http://github.com/",
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
              "description": "Algorithm/Data Structure/Virtual Reality/Augmented Reality"
            }
          ],
          "work": [
            {
              "company": "Awesome Design Studio",
              "title": "Senior UX God ",
              "years": "March 2010 - Present",
              "description": "Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know."
            },
            {
              "company": "Super Cool Studio",
              "title": "Junior bug fixer",
              "years": "March 2007 - February 2010",
              "description": "Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know."
            }
          ],
          "skills": [
            {
              "name": "Git",
              "level": "60%"
            },
            {
              "name": "Illustrator",
              "level": "55%"
            },
            {
              "name": "ReactJs",
              "level": "50%"
            },
            {
              "name": "CSS",
              "level": "90%"
            },
            {
              "name": "HTML5",
              "level": "80%"
            },
            {
              "name": "VueJs",
              "level": "50%"
            },
            {
              "name": "MongoDB",
              "level": "80%"
            }
          ]
        },
        "portfolio": {
          "projects": [
            {
              "title": "Canadian Wanderlust",
              "category": "My Travel Blog for my post-university travels",
              "image": "canadian-wanderlust.jpg",
              "url": "https://www.canadianwanderlust.com"
            },
            {
              "title": "Fury Fighting Gear",
              "category": "(offline now) A fighting gear company I started",
              "image": "fury-fighting-gear.jpg",
              "url": "http://www.timbakerdev.com"
            },
            {
              "title": "Original Thai Food",
              "category": "Website I built for a restaurant I like in Thailand",
              "image": "original-thai-food.jpg",
              "url": "http://www.timbakerdev.com/originalthaifood.github.io"
            },
            {
              "title": "Resume Website",
              "category": "A React based resume website template",
              "image": "resume-website.jpg",
              "url": "http://www.timbakerdev.com"
            },
            {
              "title": "Smirkspace",
              "category": "(MVP Only) A React and Meteor based chat University project.",
              "image": "smirkspace.jpg",
              "url": "http://www.smirkspace.com"
            }
          ]
        },
        "testimonials": {
          "testimonials": [
            {
              "text": "Here you should write some nice things that someone has said about you. No lies though, employers can tell when you are lying.",
              "user": "Kareem Abdul Jabbar"
            },
            {
              "text": "That Tim Baker must be one of the most brilliant developers I've ever met! It is amazing that nobody has hired him yet. Hey you, you should hire this guy, he may be fresh out of University and have zero on the job experience but I am confident that he will be one of your best developers in no time!",
              "user": "Steve Wozniak... impersonator"
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
        <Portfolio data={this.state.resumeData.portfolio} />
        <Testimonials data={this.state.resumeData.testimonials} />
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
