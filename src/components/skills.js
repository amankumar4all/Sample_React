import React from 'react';
import {NavLink} from 'react-router-dom';
import Sections from './sections';

import FilledDataMap from './FilledDataMap';



export const skills =(props)=>{
    return(
        <div>
            <Sections />
            <h1>Your previous saved Data.</h1>
            <FilledDataMap />

        </div>
    );
}