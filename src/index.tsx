import { BrowserRouter,} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import {store} from './redux/store'
import {Provider} from "react-redux";
import App from './App';

import './index.scss';

const rootElem = document.getElementById('root');
if(rootElem) {
    const root = ReactDOM.createRoot(rootElem)


    root.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    );
}
