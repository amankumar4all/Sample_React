import React from 'react';
import {NavLink} from 'react-router-dom';

export const home =(props)=>{
    return(
        <div>
            <h1>This Is Home, Upload your <NavLink className="link" to="/resume">Resume</NavLink></h1>
        </div>
    );
}