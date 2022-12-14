import React, {FC} from 'react';
import {addItems} from "../../../redux/redusers/cart/slice";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {CartItem} from "../../../redux/redusers/cart/types";
import {useDrag} from "react-dnd";

export const typePizza = ['тонкое', 'традиционное']
export type PizzaItemProps = {
    id:string;
    title:string;
    price:number;
    imageUrl:string;
    sizes:number[];
    types?:number[];
}

const PizzaItem:FC<PizzaItemProps> = ({id,title, price, imageUrl, sizes, types}) => {

    const [activeType, setActiveType] = React.useState(0)
    const [activeSize, setActiveSize] = React.useState(0)
    const dispatch = useDispatch()
    const cartItem = useSelector((store:any) => store.cartSlice?.items.find((obj:any) => obj.id === id))
    const navigate = useNavigate()
    const addedItems = cartItem ? cartItem.count : "0"

    const item: CartItem = {
        id,
        title,
        price,
        imageUrl,
        size: sizes[activeSize],
        type: typePizza[activeType],
        count: 0,
    }
    const onClickPizzaCount = () => {

        dispatch(addItems(item))
    }
    const [{isDragging}, drag] = useDrag(()=>({
        type:'pizza',
        item,
        collect: (monitor) =>({
            isDragging: !!monitor.isDragging()
        } )
    }))

    return (
        <>
            <div className="pizza-block">

                <Link key = {id}
                          //{<item className="id"></item>}
                      to={`/pizza/${id}`}>
                <img
                    ref={drag}
                    className="pizza-block__image"
                    src={imageUrl}
                    style={{border: isDragging ? "5px solid black" : "0px" , borderRadius: 130}}
                    alt="Pizza"
                />
                <h4 className="pizza-block__title">{title}</h4>
                </Link>

                <div className="pizza-block__selector">
                    <ul>
                        {types?.map((type, i) => (
                            <li key={i}
                                className={activeType === i ? 'active' : ''}
                                onClick={() => setActiveType(i)}
                            >{typePizza[type]}</li>
                        ))}
                    </ul>
                    <ul>
                        {sizes.map((item, i) => (<li
                            key={i}
                            onClick={() => setActiveSize(i)}
                            className={activeSize === i ? 'active' : ''}
                        >{item} см.</li>))}
                    </ul>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">от {price} ₽</div>
                    <button
                        onClick={onClickPizzaCount}
                        className="button button--outline button--add">
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"/>
                        </svg>
                        <span>Добавить</span>
                        {addedItems > 0 && <i>{addedItems}</i>}
                    </button>
                </div>
            </div>
        </>

    );
};

export default PizzaItem;
