import {ADD_TO_CART} from "../Constants"
import {DELETE_CART_ITEM} from "../Constants"

const addToCart = (data) => {
    console.log("action data :",data);
return {
    type:ADD_TO_CART,
    data:data
}
}



// const DeleteCartItem = (data) => {
//     console.log("action data :",data);
// return {
//     type:DELETE_CART_ITEM,
//     data:data
// }
// }

export default addToCart





