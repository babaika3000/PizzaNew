import { BrowserRouter,} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import {store} from './redux/store'
import {Provider} from "react-redux";
import App from './App';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'


import './index.scss';

const rootElem = document.getElementById('root');
if(rootElem) {
    const root = ReactDOM.createRoot(rootElem)


    root.render(
        <DndProvider backend={HTML5Backend}>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
        </DndProvider>
    );
}
