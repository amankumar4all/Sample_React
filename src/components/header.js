import React from 'react';
import {NavLink} from 'react-router-dom';

class Header extends React.Component{
    render(){
    return(
        <div className="App">
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
        <script src="https://use.fontawesome.com/6914a0c693.js"></script>
          <header className="header">
            <left className="left">
            <NavLink to="/">
            <ul className="navigation">
              <li className="box1"></li>
              <li className="box2"></li>
              <li><b><a href="#">Recruitify</a></b></li>
            </ul>
            </NavLink>
            </left>
            
            <right className="right">
              <ul className="navigation">
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Feature</a></li>
                <li><a href="#">Term & Condition</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Sign Up</a></li>
              </ul>
            </right>
          </header>
          
            </div>
    );
    }
}

export default Header;