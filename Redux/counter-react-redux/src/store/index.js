import {createStore} from "redux"


const  INITIAL_VALUE = {
    counter:0
}

const counterReducer = (store = INITIAL_VALUE, action) =>{
    let newStore = store;
    if(action.type === 'INCREMENT'){
        return {counter:store.counter+1}
    }else if(action.type === 'DECREMENT'){
        return {counter:store.counter-1}
    }else if(action.type === 'ADDITION'){
        return {counter:store.counter + Number(action.playload.num)}
    }else if(action.type === 'SUBTRACTION'){
        return {counter:store.counter- Number(action.playload.num)}
    }
    return newStore;
}

const counterStore = createStore(counterReducer);

export default counterStore;