import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./userSlice";

const store = configureStore({
    reducer:{
        // multiple slice
        user:userSlice
    }
})
export default store;