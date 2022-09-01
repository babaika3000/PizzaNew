import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setSearchPizza} from "../../../../redux/redusers/filtersSliceReduer";
import debounce from 'lodash.debounce'
import classes from './Serch.module.scss'

const Search = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch();
  const inputRef = useRef()

  const changeInputValue = React.useCallback(
    debounce((str) => dispatch(setSearchPizza(str)),
          1300),
      []
    )
  const onClickInput = (e) => {
    setValue(e.target.value)
    changeInputValue(e.target.value)
  }

  return (
    <div className={classes.root}>
      <svg className={classes.serch__icon}
           xmlns="http://www.w3.org/2000/svg" width="15.125px" height="15.125px" viewBox="0 -0.42 95.125 95.125">
        <g id="Group_13" data-name="Group 13" transform="translate(-825.375 -463.025)">
          <path id="Path_21" data-name="Path 21"
                d="M882.7,473.2a33.339,33.339,0,1,1-44,0A33.367,33.367,0,0,1,882.7,473.2Z" fill="none" stroke="#2b4ea2"
                strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4"/>
          <path id="Path_22" data-name="Path 22" d="M850.8,510.5a14.885,14.885,0,0,1,5.8-28.6" fill="none"
                stroke="#2b4ea2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4"/>
          <path id="Path_23" data-name="Path 23"
                d="M894.5,526.1l-5.3,5.3a5.191,5.191,0,0,1-7.3,0h0a5.191,5.191,0,0,1,0-7.3l5.3-5.3a5.191,5.191,0,0,1,7.3,0h0A5.191,5.191,0,0,1,894.5,526.1Z"
                fill="none" stroke="#2b4ea2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                strokeWidth="4"/>
          <path id="Path_24" data-name="Path 24"
                d="M917,553.8h0a5.07,5.07,0,0,1-7.2,0l-17.3-17.3a5.07,5.07,0,0,1,0-7.2h0a5.07,5.07,0,0,1,7.2,0L917,546.6A5.07,5.07,0,0,1,917,553.8Z"
                fill="none" stroke="#2b4ea2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                strokeWidth="4"/>
          <line id="Line_5" data-name="Line 5" x2="31.3" transform="translate(871.8 481.3)" fill="none" stroke="#2b4ea2"
                strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4"/>
        </g>
      </svg>
      <input
        ref={inputRef}
        className={classes.serch__input}
        value={value}
        onChange={(e) => onClickInput(e)}
        placeholder="Searching..."
      />
      {value &&
      <svg className={classes.serch_clouse}
           onClick={() => {
             dispatch(setSearchPizza(''))
             setValue("")
             inputRef.current.focus()
           }}
           xmlns="http://www.w3.org/2000/svg"
           fill="#000000" viewBox="0 0 16 16"
           width="16px" height="16px">
        <path
          d="M 2.75 2.042969 L 2.042969 2.75 L 2.398438 3.101563 L 7.292969 8 L 2.042969 13.25 L 2.75 13.957031 L 8 8.707031 L 12.894531 13.605469 L 13.25 13.957031 L 13.957031 13.25 L 13.605469 12.894531 L 8.707031 8 L 13.957031 2.75 L 13.25 2.042969 L 8 7.292969 L 3.101563 2.398438 Z"/>
      </svg>}
    </div>
  );
};

export default Search;
