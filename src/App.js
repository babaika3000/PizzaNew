import '../src/scss/app.scss';
import React from "react";
import Header from "./Componets/Header";
import PizzaPage from "./Componets/Pages/PizzaBlock/PizzaPage";
import {
    Routes,
    Route,
} from "react-router-dom";
import NotFound from "./Componets/Pages/Not Found/NotFound";
import CardEmpty from "./Componets/Pages/Card/CartEmpty";
import Cart from "./Componets/Pages/Card/Cart";

export const SearchContext = React.createContext()

function App() {

    const [searchPizza, setSearchPizza] = React.useState('')
console.log(searchPizza)
    return (
        <SearchContext.Provider  value={{searchPizza, setSearchPizza}}>
            <div className="App">
                <div className="wrapper">
                    <div className="header">
                        <Header/>
                    </div>
                    <div className="container">
                        <div className='content'>
                            <Routes>
                                <Route path='/' element={<PizzaPage/>}/>
                                <Route path='/CartEmpty' element={<Cart/>}/>
                                <Route path='*' element={<NotFound/>}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>

        </SearchContext.Provider>

    );
}

export default App;
