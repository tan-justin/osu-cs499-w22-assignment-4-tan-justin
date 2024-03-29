import {createStore} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducer";



const store = createStore(rootReducer, composeWithDevTools());

store.subscribe(()=>{
    console.log(store.getState())
});


export default store;