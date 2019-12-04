import React from 'react';
import {Redirect,NavLink} from 'react-router-dom';
import './../../node_modules/font-awesome/css/font-awesome.min.css';
import './../css/personalInfo.css';
import Sections from './sections';
import {store} from '../store/store'

class personalInfo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      sex: ''
    };
  }
  
  saveData(event){
    var eventValue=event.target.innerHTML;
    if(eventValue=="Save"){
      store.dispatch({
        type:'Save' ,
        payload:{
          item:{
            firstName:this.refs.firstName.value,
            middleName:this.refs.middleName.value,
            lastName:this.refs.lastName.value,
            p:this.refs.p.value,
            t:this.refs.t.value,
            lo:this.refs.lo.value,
            c:this.refs.c.value,
            la:this.refs.la.value,
            m:this.refs.m.value,
            date:this.refs.date.value,
            month:this.refs.month.value,
            year:this.refs.year.value
          } 
        }
      })
    }
  }
  
    

    render(){
        return(
            
    <div className="App">
    <Sections />
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
    <script src="https://use.fontawesome.com/6914a0c693.js"></script>
      {/* <header className="header">
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
      </header> */}
      <body>
        {/* <section className="section">
          <ul>
          <NavLink to="/resume"><li><a><i className="fa fa-file"></i>Resume</a></li></NavLink>
          <NavLink to="/personalInfo"><li><a><i className="fa fa-info"></i>Personal Info</a></li></NavLink>
          <NavLink to="/skills"><li><a><i className="fa fa-briefcase"></i>Skills</a></li></NavLink>
          <li><a><i className="fa fa-user"></i>Professional Info</a></li>
          <li><a><i className="fa fa-book"></i>Eligibility</a></li>
          <li><a><i className="fa fa-spotify"></i>Other Details</a></li>
          </ul>
        </section> */}
        
        <form className="details">
        <div className="info">
        <div className="names">
        <h5>Info</h5>
          <hr/>
          <ul className="name">
            <li><p>First Name</p>
                <input placeholder="Enter First Name" ref='firstName' />
            </li>
            <li><p>Middle Name</p>
                <input placeholder="Enter Middle Name" ref='middleName'/>
            </li>
            <li><p>Last Name</p>
                <input placeholder="Enter Last Name" ref='lastName' />
            </li>
          </ul>
          </div>
          <ul>
            <li>
              <label>Gender</label>
              <div className="choices">
              <input type="checkBox" className="gend" ref='sex' value='male' /> Male
              <input type="checkBox" className="gend" ref='sex' value='female'/> Female
              </div>
            </li>
            <li>
              <label>Marital Status</label>
              <div className="choices">
              <input type="checkBox" className="gend" ref='married' value="MARRIED" /> Married
              <input type="checkBox" className="gend" ref='unmarried' value="UNMARRIED"/> Unmarried
              </div>
            </li>  
          </ul>
          <ul>
            <li>
            <p>DOB</p>
            <div className="dob">
            <input list="dates" clickHandler={this.handleClick} placeholder="DD" ref='date'/>
            <input list="months" placeholder="MM" ref='month'/>
            <input list="years" placeholder="YY" ref='year'/>
              <datalist id="dates">
                <option value="1"/>
                <option value="2"/>
                <option value="3"/>
                <option value="4"/>
                <option value="5" />
              </datalist>
              <datalist id="months">
                <option value="JANUARY"/>
                <option value="FEBRUARY"/>
                <option value="MARCH"/>
                <option value="APRIL"/>
                <option value="MAY"/>
              </datalist>
              <datalist id="years">
                <option value="2019"/>
                <option value="2018"/>
                <option value="2017"/>
                <option value="2016"/>
                <option value="2015"/>
              </datalist>
              </div>
            </li>
          </ul>

        <h5>Contact Details</h5>
        <hr/>
        <ul className="address">
            <li><p>Permanent</p>
                <input placeholder="Enter Address" ref='p'/>
            </li>
            <li><p>Temporary</p>
                <input placeholder="Enter Address" ref="t"/>
            </li>
            <li><p>Location</p>
                <input placeholder="Enter Location" ref='lo' />
            </li>
            <li><p>Country</p>
                <input placeholder="Enter Country" ref="c" />
            </li>
            <li><p>Landline</p>
                <input type="number" placeholder="Enter Number" ref="la" />
            </li>
            <li><p>Mobile</p>
                <input type="number" placeholder="Enter Number" ref='m' />
            </li>
            <li><h3>+ Add Phone Number</h3></li>
          </ul>

          <h5>Salary Details</h5>
          <hr/>
          <ul className="salary">
            <li className="row1"><p>Annual Salary*</p>
                <input placeholder="Enter Address" />
            </li>
            <li className="row1"><p>Expected Salary*</p>
                <input placeholder="Enter Address" />
            </li>
            <li className="row1">
                <div className="negotiable">
                <p>Negotiable</p>
                <input type="checkBox" />
                </div>
            </li>
            </ul>
            <ul className="salRow">
            <li><p>Notice Period*</p>
                <input list="dates" placeholder="Months" />
            </li>
            <li className="notice2"><p>Notice Period*</p>
                <input type="radio" />Fixed &nbsp;
                <input type="radio" />Negotiable
            </li>
            <li><p>How Long*</p>
                <input type="number" placeholder="Enter Number" />
            </li>
            <li><p>Already Serving</p>
                <input type="radio" />Yes &nbsp;
                <input type="radio"/>No
            </li>
            <li><p>Last day of Working*</p>
                <input type="date" placeholder="Enter Number" />
            </li>
          </ul>
          <div className="buttons">
            <ul>
              <li className="move"><NavLink to="/resume">Back</NavLink></li>
              <li className="save"><NavLink to='/skills'><button onClick={this.saveData.bind(this)} className="save" value="SaveData">Save</button></NavLink></li>
              <li className="move"><NavLink to='/skills'>Skip</NavLink></li>
            </ul>
          </div>
          </div>

        </form>
      </body>
      <footer>
        <h5>All Rights Reserved 2018. www.companyname.com</h5>
      </footer>
    </div>
    
        );
    }
}

export default personalInfo