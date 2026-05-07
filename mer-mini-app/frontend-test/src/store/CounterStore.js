import { set } from 'react-hook-form';
import {create} from 'zustand';

//create store
export const useCounterStore=create((set)=>({
    //state
    newCounter:0,
    newCounter1:0,
    newCounter2:0,
    user:{name:"ravi",email:"ravi@mail.com",age:20},
    //funcion to change email
    changeEmail:()=>set({...user,email:"raviiii@mail.com"    }),
    //function to change name and age 
    changeNameandAge:()=>set({...user,name:"bhanu",age:18}),
    //functons t modify the state
    increamentCounter:()=>set(state=>({newCounter:state.newCounter+1})),
    decreamentCounter:()=>set(state=>({newCounter:state.newCounter-1})),
    reset:()=>set({newCounter:0}),
    changeto500:()=>set({newCounter1:500}),
    decrement20:()=>set(state=>({newCounter2:state.newCounter-20}))
}))