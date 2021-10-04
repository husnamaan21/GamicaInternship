
import {createStore,combineReducers} from 'redux';
let initialdata =[ 
    {item : "cash", val:"-100"},
    {item : "cash", val:"-200"}]
  

function InputReducer(state=initialdata,action){
    state= [...state]

    
    if(action.type == 'Add_Expense'){
        state.push(action)
    }
    return  state;

}

let rootReducer = combineReducers({InputReducer})

let store = createStore(rootReducer)
export default store;