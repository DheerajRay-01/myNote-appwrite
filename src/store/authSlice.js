import { createSlice } from '@reduxjs/toolkit';

export  const authSlice = createSlice({
    name : "auth",
    initialState : {
       status : false,
       userData : null
    },
    reducers : {
       signIn : (state , action)=>{
                state.status  = true
                state.userData = action.payload
       },

       logOut: (state)=>{
        state.status = false
        state.userData = null
       }
        
    }

})
export const {signIn , logOut} = authSlice.actions
export default authSlice.reducer
