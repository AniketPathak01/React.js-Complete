import {configureStore, createSlice} from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name:'counter',
    initialState:{counterVal:0},
    reducers:{
        increment:(state) =>{
            state.counterVal++;
        },
        decrement:(state) =>{
            state.counterVal--;
        },
        add:(state,action) =>{
            state.counterVal += Number(action.payload);
            
        },
        subtract:(state,action) =>{
            state.counterVal -= Number(action.payload);
        },
    }
})

const counterStore = configureStore({reducer:{
    counter: counterSlice.reducer
}});

export const counterAction = counterSlice.actions;
export default counterStore;

//const  INITIAL_VALUE = {
    //     counter:0
    // }
    
    // const counterReducer = (store = INITIAL_VALUE, action) =>{
    //     let newStore = store;
    //     if(action.type === 'INCREMENT'){
    //         return {counter:store.counter+1}
    //     }else if(action.type === 'DECREMENT'){
    //         return {counter:store.counter-1}
    //     }else if(action.type === 'ADDITION'){
    //         return {counter:store.counter + Number(action.playload.num)}
    //     }else if(action.type === 'SUBTRACTION'){
    //         return {counter:store.counter- Number(action.playload.num)}
    //     }
    //     return newStore;
    // }