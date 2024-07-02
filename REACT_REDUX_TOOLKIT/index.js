import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "./counter.js";
import privacySlice from "./privacy.js";

//this is a main of the redux in which all data will be managed.
const store = configureStore({
  reducer: { counter: counterSlice.reducer, privacy: privacySlice.reducer }
  // this reducers are the function of the small part of the store such as couter and privacy.
})

export default store;