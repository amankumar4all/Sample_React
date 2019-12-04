import React from 'react';
import {NavLink} from 'react-router-dom';

import Sections from "./sections";
import './../css/resume.css';

export const eligibility =(props)=>{
    return(
        <div>
            <Sections />
            <p><NavLink className="link" to="/professionalInfo">Back to professionalInfo</NavLink></p>

            <h1>This is your Eligibility conditions and go for your <NavLink className="link" to="/otherDetails">otherDetails</NavLink></h1>
        </div>
    );
}