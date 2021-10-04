import React from 'react'
import { connect } from 'react-redux'

 function Balance(props) {
     let balance=0
     let amount = props.InputReducer.map((i,v)=>{
         return balance += +i.val
     })
    return (
        <div className="balance">
            
            <h2> Your Balance: ${balance}</h2>
           
        </div>
    )
}
export default connect(function(store){
    return store
})(Balance)