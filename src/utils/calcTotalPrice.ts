import {CartItem} from "../redux/redusers/cart/types";


export const calcTotalPrice = (items:CartItem[])=>{
    return items.reduce((sum,obj)=> obj.price * obj.count ,0 )
}
