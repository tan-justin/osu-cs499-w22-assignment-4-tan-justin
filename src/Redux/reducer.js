import { combineReducers } from 'redux';
import { RECEIVE_PRODUCT, GET_QUANTITY, ADJ_QUANTITY, RETURN_ITEM } from "./action";

const initialStateProducts = {
    products:[],
}
const initialStateCart = {
    cart: [],
}


function candyStoreReducer(state = initialStateProducts, action){

    switch(action.type){
        case RECEIVE_PRODUCT:
            return{
                products:
                [...state.products,
                {
                   name: action.name,
                   id: action.id,
                   price: action.price,
                   inStock: action.inStock,
                   photoUrl: action.photoUrl
                }
            ]}
        case GET_QUANTITY:
            return {
                ...state,
                products: state.products.map((item)=>(
                    item.id === action.id.id ? {
                        ...item,
                        inStock: item.inStock - action.quantity,
                    } : item
                ))
            }
        case RETURN_ITEM:
            return {
                ...state,
                products: state.products.map((item)=>(
                    item.id === action.id ? {
                        ...item,
                        inStock: item.inStock + action.quantity,
                    } : item
                ))
            }
        default:
            return state;
    }
}

function shoppingCartReducer(state = initialStateCart, action){
    switch(action.type){
        case ADJ_QUANTITY:
            const inCart = state.cart.find(product=>product.id === action.id.id ? true : false);
            return {
                cart: inCart ? state.cart.map((item)=>item.id === action.id.id ? {...item, quantity: item.quantity + action.quantity} : item ) :
                [
                    ...state.cart,
                    {
                        id: action.id.id,
                        name: action.id.name,
                        price: action.id.price,
                        quantity: action.quantity,
                        img: action.id.img
                    }
                ]
            }
        case RETURN_ITEM:
            return{
                    ...state,
                    cart: state.cart.filter(id=>id.id!== action.id)
            }
        default:
            return state;
    }

}

const rootReducer = combineReducers({
    candyStore: candyStoreReducer,  
    cartStore: shoppingCartReducer,
})

export default rootReducer;