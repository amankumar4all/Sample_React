import React from 'react';
import {NavLink} from 'react-router-dom';
import './../css/resume.css';
import Sections from './sections';


export const otherDetails =(props)=>{
    return(
        <div>
            <Sections/>
            <p><NavLink className="link" to="/">Back to Home</NavLink></p>

            <h1>Fill your other details and <NavLink className="link" to="/">Submit here</NavLink></h1>
        </div>
    );
}