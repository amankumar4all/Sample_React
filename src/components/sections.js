import React from 'react';
import {NavLink} from 'react-router-dom';

class Sections extends React.Component{
    render(){
    return(
        <div>
            <body>
            <section className="section">
              <ul>
              <NavLink to="/resume"><li><a><i className="fa fa-file"></i>Resume</a></li></NavLink>
              <NavLink to="/personalInfo"><li><a><i className="fa fa-info"></i>Personal Info</a></li></NavLink>
              <NavLink to="/skills"><li><a><i className="fa fa-briefcase"></i>Skills</a></li></NavLink>
              <NavLink to="/professionalInfo"><li><a><i className="fa fa-user"></i>Professional Info</a></li></NavLink>
              <NavLink to="/eligibility"><li><a><i className="fa fa-book"></i>Eligibility</a></li></NavLink>
              <NavLink to="/otherDetails"><li><a><i className="fa fa-spotify"></i>Other Details</a></li></NavLink>
              </ul>
            </section>
            </body>        
            </div>
    );
}
}
export default Sections;