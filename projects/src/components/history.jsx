import React,{useState} from 'react'
import { connect } from 'react-redux';
import store from './store';

 function History(props) {
    //  const [show,setShow]=useState(props.historyReducer)
    //  let show =
    return (
        <div className="lists">
         
         <ul>
                {props.InputReducer.map((i,v)=><li className={i.val>0?'green li':'red li'}>
                    <span>{i.item}</span>
                    <span>{i.val}</span>
                </li>)}
              
            </ul>
        </div>
    )
}
export default connect(function(store){
    return store
})(History)
