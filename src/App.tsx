import React, {lazy, Suspense} from "react";

import {
    Routes,
    Route,
} from "react-router-dom";



import Main from "./Componets/Pages/Main/Main";
//@ts-ignore
import Home from "./Componets/Pages/PizzaBlock/Home";

import '../src/scss/app.scss';


const FullPizza = lazy(() => import(/*webpackChunkName: 'FullPizza' */ "./Componets/Pages/FullPizza"));
const Cart = lazy(() => import(/*webpackChunkName: 'Cart' */"./Componets/Pages/Card/Cart"));
const NotFound = lazy(() => import(/*webpackChunkName: 'NotFound' */"./Componets/Pages/Not Found/NotFound"));


function App() {

    return (
        <Routes>
            <Route path='' element={<Main/>}>
                <Route path='/' element={
                    <Home/>
                }/>
                <Route path='/CartEmpty' element={
                    <Suspense fallback={<div>Loading...</div>}>
                        <Cart/>
                    </Suspense>
                }
                />
                <Route path='/pizza/:id' element={
                    <Suspense fallback={<div>Loading...</div>}>
                        <FullPizza/>
                    </Suspense>
                }/>
                <Route path='*' element={
                    <Suspense fallback={<div>Loading...</div>}>
                        <NotFound/>
                    </Suspense>
                }/>
            </Route>
        </Routes>

    );
}

export default App;
