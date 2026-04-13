import axios from "axios";
import { create } from "zustand";

export const useAuth = create((set) => ({
  currentUser: null,
  loading: false,
  isAuthenticated: false,
  error: null,
  login: async (userCred) => {
   // const { role, ...userCredObj } = userCredWithRole;
    try {
      //set loading true
      set(state=>({...state,setLoading:true}))
      //make api call
      let res=await axios.post("http://localhost/auth/login",userCred,{withCredentials:true})
      //update state
      if(res.status===200)
        set({
    currentUser:res.data?.payload,
    loading:false,
    isAuthenticated:true,
    error:null
})
    } catch (err) {
      console.log("err is ", err);
      set({
        loading: false,
        isAuthenticated: false,
        currentUser: null,
        //error: err,
        error: err.response?.data?.error || "Login failed",
      });
    }
  },
  logout: async () => {
    try {
      //set loading state
      setLoading(true)
      //make logout api req
      let res=await axios.get("http://localhost/auth/logout",{withCredentials:true})
      //update state
      if(res.status===200){
        set({
            currentUser:null,
            isAuthenticated:false,
            
        })
      }
    } catch (err) {
      set({
        loading: false,
        isAuthenticated: false,
        currentUser: null,
        error: err.response?.data?.error || "Logout failed",
      });
    }
  },
}));