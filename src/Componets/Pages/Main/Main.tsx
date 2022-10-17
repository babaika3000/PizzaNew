import React, {FC} from 'react';
import Header from "../../Header";
import {Outlet} from "react-router-dom";


const Main: FC = () =>{
    return (
      <div className="App">
        <div className="wrapper">
          <div className="header">
            <Header/>
          </div>
          <div className="container">
            <div className='content'>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    );
  }


export default Main;
