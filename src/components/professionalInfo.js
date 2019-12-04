import React from 'react';
import {NavLink} from 'react-router-dom';
import './../css/resume.css';
import Sections from './sections';


export const professionalInfo =(props)=>{
    return(
        <div>
            <Sections />
            <p><NavLink className="link" to="/">Back to Home</NavLink></p>

            <h1>This is your resume and go for your <NavLink className="link" to="/personalInfo">Personal Info</NavLink></h1>
        </div>
    );
}