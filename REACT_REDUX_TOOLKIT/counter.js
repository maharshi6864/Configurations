import { createSlice } from "@reduxjs/toolkit";

//this is a small part of the store (index.js) we had created a first.
const counterSlice = createSlice({
  //name is basically the name of the object and initialState is the initialvalue of this objecct
  //reducers are the function to manuplate the data inside this object and has two parameters
  //state and action, state is the object that has recent values and action is an object which contains payload which conatins the next value if the varibale in an object.
  name: 'counter', initialState: { counterVal: 0 }, reducers: {
    increment: (state) => {
      state.counterVal++;
    }, decrement: (state) => {
      state.counterVal--;
    }, addition: (state, action) => {
      state.counterVal += parseInt(action.payload.number)
    }, subtraction: (state, action) => {
      state.counterVal -= parseInt(action.payload.number)
    }
  }
})

export const counterActions = counterSlice.actions;

export default counterSlice;