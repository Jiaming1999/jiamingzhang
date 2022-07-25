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
          "name": "Joel Zhang",
          "occupation": "Graduate Student at Univerity of Illinois",
          "description": "Master student in Computer Science",
          "image": "profile.jpeg",
          "bio": "Born in Wuhan, love gym, tennis, and traveling. Primarily experienced in development with JavaScript, Flow, TypeScript, React, React Native and GraphQL. Also have some experience in full stack development with Python and Java.",
          "contactmessage": "Here to contact me",
          "email": "qq1104382148@gmail.com",
          "phone": "217-904-4877",
          "address": {
            "street": "Im not sure yet.",
            "city": "U.S.",
            "state": "IL",
            "zip": "61820"
          },
          "website": "https://jiaming1999.github.io/jiamingzhang/",
          "resumedownload": "https://drive.google.com/file/d/1DM5rSui4bJH1dXla1gpensxnBUiF4kQA/view?usp=sharing",
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
              "url": "https://www.linkedin.com/in/yoshiaki233/",
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
          "skillmessage": "Currently I am actively seeking for a software engineer job focusing in javascript development on spring 2023. My experience technologies includes: React, React Native, Relay, Flow, JavaScript and TypeScript.",
          "education": [
            {
              "school": "University Of Illinois Urbana Champaign",
              "degree": "Masters in Computer Science",
              "graduated": "Decemeber 2022",
              "description": "Python opensource flaky testing/Distributed System/Networking/User Interaction"
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
              "company": "Meta",
              "title": "Software Development - Front End Engineer Intern",
              "years": "May 2022 - Aug 2022",
              "description": " As a Front End Engineer which shares the responsibilities of Software Engineer in Meta, I have spent 12 weeks developing a tool for developers involved in the new facebook.com development. Letting engineers have a better debug and development experience is my first prioritized mission."
            },
            {
              "company": "Univerisity of Illinois Urbana Champiagn Undergrad Research Assistant",
              "title": "Software Development - Front End Engineer",
              "years": "Nov 2019 - May 2021",
              "description": "The ScribeAR project team was led by Dr. Lawrance Angrave. The scope of the final product was to develop an AR glasses application to capture human speech in real-time and automatically transfer speech into subtitles on the AR glasses. My job is to develop an user interface for the project using React.js."
            },
          ],
          "skills": [
            {
              "name": "Flow",
              "level": "80%"
            },
            {
              "name": "JavaScript",
              "level": "80%"
            },
            {
              "name": "TypeScript",
              "level": "70%"
            },
            {
              "name": "Python",
              "level": "70%"
            },
            {
              "name": "React",
              "level": "80%"
            },
            {
              "name": "React Native",
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
