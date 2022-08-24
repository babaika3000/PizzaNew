import React from 'react';
import PizzaItem from "./PizzaItem";
import Categories from "../../Categories";
import Sort, {list} from "../../Sort";
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import qs from 'qs'
import Skeleton from "./Skeleton";
import Pagination from '../../utils/Pagination'
import {useDispatch, useSelector} from "react-redux";
import {setPageCount, setFilters} from "../../../redux/redusers/filtersSliceReduer";


const url = `https://62d68deb51e6e8f06f0ccc9f.mockapi.io/items`


const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isSearch = React.useRef(false)
  const isMounted  = React.useRef(false)
  const sortId = useSelector((store) => store.filtersSlice.sort)
  const categoriesId = useSelector((store) => store.filtersSlice.categorei)
  const [isLoading, setIsLoading] = React.useState(true)
  const [itemesList, setItemesList] = React.useState(0)
  const category = categoriesId > 0 ? `category=${categoriesId}` : ''
  const searchPizza = useSelector(store => store.filtersSlice.searchPizza)
  const pageCount = useSelector(store => store.filtersSlice.pageCount)


  const getPizza=() =>{
    setIsLoading(true)
    async function pizzaList() {
      try {
        await axios(`${url}?&page=${pageCount}&limit=4&sortBy=${sortId.propertyValue}&${category}&order=desc&search=${searchPizza}`)
          .then((response) => {
            setItemesList(response.data)
            setIsLoading(false)
          })
      } catch (e) {
        console.log(e)}}
    pizzaList();
  }
  const handleChangePage = (number) => {
    dispatch(setPageCount(number))
  }
  React.useEffect(() => {
      if(isMounted.current)
      { const queryString = qs.stringify({
        categoriesId,
        propertyValue: sortId.propertyValue,
        pageCount
      })
        navigate(`?${queryString}`)
      }isMounted.current = true
    }, [categoriesId, sortId.propertyValue, pageCount]
  )
  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1))

      const sort = list.find(obj => obj.propertyValue === params.propertyValue)
      dispatch(
        setFilters({
        ...params,
        sort
      }))
  isSearch.current = true
    }
  }, [])




  React.useEffect(() => {
    if (!isSearch.current){
      getPizza()
    }
    isSearch.current = false
    window.scrollTo(0, 0)
  }, [categoriesId, sortId.propertyValue, searchPizza, pageCount])


  const FakeArray = [...Array(6)]
  return (
    <>
      <Categories/>
      <Sort/>
      <h2 className="content__title">Все пиццы</h2>
      {isLoading ? FakeArray.map((item, i) => {
        return <Skeleton
          key={i}/>
      }) : itemesList.map((item) => {
        return <PizzaItem
          key={item.id}
          {...item}/>
      })}
      <Pagination
        onChangePage={handleChangePage}
        value={pageCount}
      />
    </>
  );
}

export default Home;
