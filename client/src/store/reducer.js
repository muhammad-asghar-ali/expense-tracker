import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    categories: [],
    transaction: []
}

export const expanseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    getTransaction: (state) => {

    }
  }  
})

export const {getTransaction} = expanseSlice.actions
export default expanseSlice.reducer