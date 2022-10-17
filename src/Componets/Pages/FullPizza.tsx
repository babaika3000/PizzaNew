import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const FullPizza: React.FC = () => {
    const {id} = useParams()
    const [pizza, setPizza] = useState<{
        imageUrl: string,
        title: string,
        price: number
    }>()

    useEffect(() => {
            async function fullPizza() {
                try {
                    const {data} = await axios.get('https://62d68deb51e6e8f06f0ccc9f.mockapi.io/items/' + id)
                    setPizza(data)
                } catch (error) {
                    alert(error)
                }
            }

            fullPizza()

        }, []
    )

    if (!pizza) {
        return <h2>'Loading...'</h2>
    }
    return (

        <div className="container">
            <img src={pizza.imageUrl}/>
            <h2>{pizza.title}</h2>
            <h2>Цена: {pizza.price}</h2>
            <Link to='/'>
            <button className={"button button--outline button--add"}>
              <span>Назад</span>
            </button>
    </Link>
        </div>
    );
};

export default FullPizza;
