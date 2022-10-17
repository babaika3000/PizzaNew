import React, {FC} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {filtersSlice, setCategories} from "../redux/redusers/filter/slice";



const Categories: FC = () => {

  const dispatch = useDispatch()
  const categorei = useSelector((state: any) => state.filtersSlice.categorei)
  const categories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые'];
  // const onClickSetCat = (id) => dispatch(setCategories(id))

  return (
        <div className="categories">
            <ul>
                { categories.map((item, id) =>(
                    <li key={id}
                        onClick={() => dispatch(setCategories(id))}
                        className={categorei === id ? 'active' : "" }
                    >{item}</li>))}
            </ul>
        </div>
    );
};

export default Categories;
