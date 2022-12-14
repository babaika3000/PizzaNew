import {calcTotalPrice} from "./calcTotalPrice";
import {CartItem} from "../redux/redusers/cart/types";

// export const getCartLocalStorage = () => {
//     const data = localStorage.getItem('cart');
//     const items = data ? JSON.parse(data) : [];
//     const totalPrice = calcTotalPrice(items);
//     return {
//         items,
//         totalPrice
//     }
// }
export const getCartLocalStorage = () => {
    const data = localStorage.getItem('cart');
    const items = data ? JSON.parse(data) : [];
    const totalPrice = calcTotalPrice(items);

    return {
        items: items as CartItem[],
        totalPrice,
    };
};
