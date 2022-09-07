import '../src/scss/app.scss';
import PizzaPage from "./Componets/Pages/PizzaBlock/PizzaPage";
import {
  Routes,
  Route,
} from "react-router-dom";
import NotFound from "./Componets/Pages/Not Found/NotFound";
import Cart from "./Componets/Pages/Card/Cart";
import Main from "./Componets/Pages/Main/Main";
import FullPizza from "./Componets/Pages/FullPizza";


function App() {

  return (
    <Routes>
      <Route path='' element={<Main/>}>
        <Route path='/' element={<PizzaPage/>}/>
        <Route path='/CartEmpty' element={<Cart/>}/>
        <Route path='/pizza/:id' element={<FullPizza/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Route>
    </Routes>

  );
}

export default App;
