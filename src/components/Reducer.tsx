import React, { useReducer } from 'react'


type State= {
  counter:number
}


const initialState:State = {counter:0}

type Action = {type:"increment" | "decrement"}

const reducer = (state:State,action:Action)=>{
    switch (action.type) {
      case "increment":
        return {counter:state.counter+1}

     case "decrement":
                return {counter:state.counter-1}

      default:
        return {counter:state.counter}
    }



}







export default function Reducer() {
  const [state, dispatch] = useReducer(reducer,initialState)
 
 
  return (
    <div>



       <p> counter {state.counter}</p>

      <button onClick={()=> dispatch({type:"increment"})}>
        increment
      </button>

     <button onClick={()=>dispatch({type:"decrement"})}>
        decrement
     </button>




    </div>
  )
}
