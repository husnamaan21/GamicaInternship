import React from 'react';
import { connect } from 'react-redux';

 function Detail(props) {
    let income=0 ;
    let expense=0
   props.InputReducer.map((i,v)=>{
         if(i.val>0){
           
            return income += +i.val
         }else{
             return expense += +i.val
         }
     })
        
  

    
    return (
    
        <div className="detail">
            <div className="income">
        <h3>income <br /><span>{income}</span > </h3>
        </div>
        <div className="middle"></div>
        <div className="expense">
        <h3>expense <br /><span>{expense}</span > </h3>
        </div>
        </div>
    )
}
export default connect(function(store){
    return store;
})(Detail)