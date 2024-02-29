
import { ADD_TO_CART } from "../Constants";

const initialState = {
    cartData: []
}

export default function cardItems(state = [], action) {
    console.log("reducer data :", action)
    switch (action.type) {
        
        case ADD_TO_CART: return [...state,{cartData: action.data}];
        // case DELETE_CART_ITEM: return [...state,{cartData: action.data}];

        default: return state;
            
    }

}