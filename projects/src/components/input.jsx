import React,{useState} from 'react'
import { connect } from 'react-redux';
import  store  from './store';

 function Input(props) {
    
    const [item,setItem] = useState()
    const [val,setVal] =useState()
  console.log("props",props.InputReducer.transaction)
    return (
        <div className="transaction">
            <input type="text" placeholder="enter item" onChange={(e)=>setItem(e.target.value)} value={item} required />
            <input type="number" placeholder="enter expense" onChange={(e)=>setVal(e.target.value)} value={val} required />
            <button className="btn" onClick={()=>{
                store.dispatch({
                    type:"Add_Expense",
                 item:item,
                 val:val
                })
                setItem("")
                setVal("")
               

            }}>Add me</button>
        </div>
    )
}
export default connect(function(store){
    return store
})(Input)