import React, { Children } from 'react'
import { createContext,useState } from 'react'

// create const provoider obj
export const counterContextObj=createContext()

function ContextProvoider({children}) {
  //state
  const [counter,setCounter]=useState(10)
  const [counter1,setCounter1]=useState(10)
  const [counter2,setCounter2]=useState(10)
  //function to change state
  const changeCounter=()=>{
    setCounter(counter+1)
  }
  const changeCounter1=()=>{
    setCounter(counter1+1)
  }
  return (
    <counterContextObj.Provider value={{counter,changeCounter}}>
      {children}
    </counterContextObj.Provider>
  )
}

export default ContextProvoider