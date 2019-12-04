import React from 'react';
import {Route,Switch,NavLink} from 'react-router-dom';
import './App.css';

import Header from "./components/header";
import {home} from './components/home';
import {resume} from './components/resume';
import personalInfo from './components/personalInfo';
import {skills} from './components/skills';
import {eligibility} from './components/eligibility';
import {otherDetails} from "./components/otherDetails";
import {professionalInfo} from "./components/professionalInfo";

import './../node_modules/font-awesome/css/font-awesome.min.css';

// import { resume } from '@fortawesome/free-solid-svg-icons';



class App extends React.Component {

  render(){
  return (
    <div>
      <Header /> 
      <Switch>
        <Route path="/" exact component={home}/>
        <Route path="/resume" exact component={resume}/>
        <Route path="/personalInfo" exact component={personalInfo}/>
        <Route path="/skills" exact component={skills}/>
        <Route path="/professionalInfo" exact component={professionalInfo}/>
        <Route path="/eligibility" exact component={eligibility}/>
        <Route path="/otherDetails" exact component={otherDetails}/>
      </Switch>
    </div>
  );
  }
}

export default App;
