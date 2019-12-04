import React from 'react';
import {connect} from 'react-redux';
import {FilledData} from './FilledData';

const FilledDataMap=(props)=>{
    console.log("hello",props);
    return(
        <div>
    {props.items.map((item)=><FilledData item={item}/>
    )}
    </div>
    )

}
    
 const mapStateToProps=(state)=>{
  return{
      items:state.itemArray
  }
   
}



export default connect(mapStateToProps)(FilledDataMap);