import React, { useState } from 'react'
import { useContext } from 'react';
import ContextProvoider, { counterContextObj } from '../context/ContextProvoider.jsx'
import ListOfEmps from './ListOfEmps'
// import { counterContextObj } from '../context/ContextProvoider.jsx';
import { useCounterStore } from '../store/CounterStore.js';


function Home() {

  //cal usecounterStore hook to get state of zustand store
  let {newCounter,newCounter1,newCounter2,increamentCounter,decreamentCounter,changeto500}=useCounterStore()
  // const {counter,changeCounter}=useContext(counterContextObj)
  
  return (
    <div>
      {/* <ContextProvoider/> */}
      {/* <h1>Conuter:{counter}</h1>
      <button onClick={changeCounter}>change</button> */}
      <div className='bg-blue-600 mr-200'>
        <h1>counter:{newCounter}</h1>
        <button onClick={increamentCounter} className='text-3xl justify-around'>change</button>
      </div>
      {/* <div>
        <h1>counter1:{newCounter2}</h1>
        <button onClick={changeto500} className='text-3xl justify-around'>change to 500</button>
      </div> */}
      <h1 className='text-center text-3xl pb-5'>Home</h1>
      <p className='text-2xl m-5 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut est reprehenderit quas? Suscipit sapiente cupiditate totam quam sequi corporis dignissimos, voluptas nam nobis aliquam dicta omnis ducimus quia nesciunt natus adipisci obcaecati dolor dolorem consectetur ullam officiis! Hic ducimus ratione error architecto! Asperiores, quibusdam voluptas! Velit id, illo aliquam, itaque sapiente molestias placeat laboriosam illum nulla maxime culpa laudantium hic earum est perspiciatis, facilis doloribus sequi quibusdam nisi temporibus delectus esse accusamus. Illo voluptate beatae ipsam corrupti veritatis commodi! Sequi facilis molestiae molestias omnis eius cupiditate, a accusantium obcaecati maxime laborum? Repudiandae sit nisi et vel, facilis iste quia cupiditate?</p>
    </div>
    
  )
}

export default Home