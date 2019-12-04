import React, { Component } from 'react';
import {connect} from 'react-redux';

class PostForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();  //prevent page from refreshing
    const title = this.getTitle.value;
    const message =  this.getMessage.value;
    const data = {
      id: new Date(),
      title,
      message
    }
    console.log(data);
    this.props.dispatch({
        type:'ADD_POST',
        data});
      this.getTitle.value = '';
      this.getMessage.value = '';
  }
render() {
return (
<div>
  <h1>Create Post</h1>
  <form onSubmit={this.handleSubmit}>
   <input required type="text" ref={(input)=>this.getTitle = input} 
    placeholder="Enter Post Title"/>
   <br /><br />
   <textarea required rows="5" ref={(input)=>this.getMessage = input} cols="28" 
    placeholder="Enter Post" />
   <br /><br />
   <button>Post</button>
  </form>
</div>
);
}
}
//Remember that connect() gives you access to dispatch as a prop.
export default connect()(PostForm);

