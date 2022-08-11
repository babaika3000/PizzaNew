import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {filtersSlice, setCategories} from "../redux/redusers/filtersSliceReduer";

const Categories = () => {

  const dispatch = useDispatch()
  const categorei = useSelector((state) => state.filtersSlice.categorei)
  const categories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые'];
  // const onClickSetCat = (id) => dispatch(setCategories(id))


  return (


        <div className="categories">
            <ul>
                { categories.map((item, id) =>(
                    <li key={id}
                        onClick={() => dispatch(setCategories(id))}
                        className={categorei === id ? 'active' : 0 }
                    >{item}</li>))}

            </ul>
        </div>

    );
};

export default Categories;
