import React from 'react';


export const FilledData=(props)=>{
     console.log(props);
     console.log(props.item.firstName);
    return(
        <div>
            Full Name: &nbsp;
           {props.item.firstName} &nbsp;
           {props.item.middleName} &nbsp;
           {props.item.lastName}  
           <h5>Date Of Birth : {props.item.date}&nbsp;{props.item.month}&nbsp;{props.item.year}</h5> 
           <p>Permanent Address : {props.item.p}  </p>
           <p>Location : {props.item.lo}</p>
           <p>Temporary : {props.item.l}</p>
           <p>Country : {props.item.c}</p>
           <p>Landline : {props.item.la}</p>
           <p>Mobile : {props.item.m}</p>

       </div>
    )

}


