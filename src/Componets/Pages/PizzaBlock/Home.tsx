import React, {FC} from 'react';
import PizzaItem from "./PizzaItem";
import Categories from "../../Categories";
import Sort, {list} from "../../Sort";
import {useNavigate} from 'react-router-dom'
import qs from 'qs'
import Skeleton from "./Skeleton";
import Pagination from '../../utils/Pagination'
import {useSelector} from "react-redux";
import {setPageCount, setFilters,} from "../../../redux/redusers/filter/slice";
import {useAppDispatch} from "../../../redux/store";
import {SearchPizzaItems} from "../../../redux/redusers/pizza/types";
import {fetchPizza} from "../../../redux/redusers/pizza/asincAction";
import {calcTotalPrice} from "../../../utils/calcTotalPrice";


const Home: FC = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const isSearch = React.useRef(false)
    const isMounted = React.useRef(false)
    const sortId = useSelector((store: any) => store.filtersSlice.sort)
    const categoriesId = useSelector((store: any) => store.filtersSlice.categorei)
    const category = categoriesId > 0 ? `category=${categoriesId}` : ''
    const searchPizza = useSelector((store: any) => store.filtersSlice.searchPizza)
    const pageCount = useSelector((store: any) => store.filtersSlice.pageCount)
    const {items, status} = useSelector((store: any) => store.pizzaSlice)


    const handleChangePage = (number: number) => {
        dispatch(setPageCount(number))
    }
    //
    React.useEffect(() => {
            if (isMounted.current) {
                const queryString = qs.stringify({
                    categoriesId,
                    propertyValue: sortId.propertyValue,
                    pageCount
                })
                navigate(`?${queryString}`)
            }
            isMounted.current = true
        }, [categoriesId, sortId.propertyValue, pageCount]
    )
    //
    React.useEffect(() => {
        if (window.location.search) {
            const params = (qs.parse(window.location.search.substring(1))) as SearchPizzaItems
            const sort = list.find(obj => obj.propertyValue === params.sortId)
            dispatch(
                setFilters({
                    sort: sort ? sort : list[0],
                    categorei: Number(params.category),
                    searchPizza: params.searchPizza,
                    pageCount: Number(params.pageCount),
                }))
            isSearch.current = true
        }
    }, [])


    React.useEffect(() => {
        dispatch(
            fetchPizza({
                pageCount,
                sortId: sortId.propertyValue,
                category,
                searchPizza
            }))

        window.scrollTo(0, 0)
    }, [categoriesId, sortId.propertyValue, searchPizza, pageCount])

    //@ts-ignore
    function DragStartHalndler (e, item) {
        console.log(e, item,)
    }
    //@ts-ignore
    const DragSLeaveHalndler = (e) => {
        console.log(e)
    }
    //@ts-ignore
    const DrageOverHalndler = (e) => {
        e.preventDefault();

        console.log(e)
    }
    //@ts-ignore
    const DropHandler = (e, item) => {
        e.preventDefault();
        calcTotalPrice(item)
    }


    const FakeArray = [...Array(6)]
    return (
        <>
            <Categories/>
            <Sort value={sortId}/>
            <h2 className="content__title">Все пиццы</h2>
            {
                status === 'rejected' ? <div>Ошибочка </div> :
                    status === 'loading' ? FakeArray.map((item, i) => {
                        return <Skeleton
                            key={i}/>
                    }) : items.map((item: any) => {

                        return <div
                            className='pizza-block__wrapper'
                            draggable={true}
                            //@ts-ignore
                            onDragStart={(e: any, item) => DragStartHalndler(e, item)}
                            onDragLeave={(e: any) => DragSLeaveHalndler(e)}
                            onDrageOver={(e: any) => DrageOverHalndler(e)}
                            //@ts-ignore
                            onDrop={(e: any) => DropHandler(e, item)}
                        >
                        <PizzaItem
                            key={item.id}
                            {...item}
                    />
                        </div>
                    })}
            <Pagination
                onChangePage={handleChangePage}
                value={pageCount}
            />
        </>
    );
}

export default Home;
