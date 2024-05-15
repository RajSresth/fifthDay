import React from 'react'
import { useReducer } from 'react'
import "./App.css"

const App = () => {
  // create an initial value object
  const initialValue={
    count:0
  }
  function reducer(state,action) {
    switch (action.type) {
      case 'inc':
        return {count:state.count+1}
      case 'dec':
        return {count:state.count-1}
        
      case 'res':
        return {count:0}
        
      case 'set1':
        return {count:10}
        
      case 'set2':
        return {count:20}        
    
      case 'prod':
        return {count:state.count*10}        
    
      default:
          throw new Error("Unknown Action")
    }
  }

  // use Reducer Hook
  const [state,dispatch]=useReducer(reducer,initialValue)
  return (
    <div className='flex flex-col items-center gap-11 text-[5rem]'>
      <h1>Count: {state.count}</h1>

      <div className='flex flex-col gap-5'>
        <button onClick={()=>dispatch({type:'inc'})} className='bg-blue-400 font-semibold rounded-md'>Increment</button>

        <button onClick={()=>dispatch({type:'dec'})} className='bg-purple-400 font-semibold rounded-md'>Decrement</button>

        <button onClick={()=>dispatch({type:'res'})} className='bg-red-600 font-semibold rounded-md'>Reset</button>

        <button onClick={()=>dispatch({type:'set1'})} className='bg-emerald-500 font-semibold rounded-md'>Set value to 10</button>

        <button onClick={()=>dispatch({type:'set2'})} className='bg-pink-600 font-semibold rounded-md'>Set value to 20</button>

        <button onClick={()=>dispatch({type:'prod'})} className='bg-cyan-400 font-semibold rounded-md' >Multiple of 10</button>
      </div>
    </div>
  )
}
export default App