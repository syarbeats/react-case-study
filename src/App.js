import React from 'react';
import './App.css';
import UserRegister from "./component/user_register";
import UserList from "./component/list_user";

import HeaderMenu from './component/HeaderMenu';
import Header from './component/Header';
import MainContent from './component/MainContent';

function App() {
  return (
      <div>
        {/*<div className="container">
          <main>
            <div className="row">
              <div className="col-md-12">
                <UserRegister/>
              </div>
            </div>
              <div className="row">
                  <div className="col-md-12">
                      <UserList/>
                  </div>
              </div>
          </main>
        </div>*/}
          <div>
              <HeaderMenu/>
              <Header/>
              <MainContent/>
          </div>
      </div>
  );
}

export default App;
