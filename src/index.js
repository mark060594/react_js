import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components
import App from './App';
import Users from "./pages/Users";
import UsersNew from './pages/UsersNew/index';
import Home from "./pages/Home";
import UserDetail from "./pages/UserDetails/index";
import UsersList from "./pages/UserList/index"
import UsersUpdate from "./pages/UsersUpdate";
import UsersDetailContainer from "./pages/UsersDetailContainer";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>
          <Route path="*" element={<h1>NOT FOUND!</h1>} />
          <Route path='/' element={ <App /> }>
            <Route index element={<Home />} />
            <Route path='/users' element={<Users />} >
                <Route index  element={<UsersList />} />
                <Route path='newUsers' element={<UsersNew />}/>
                <Route path=":userID" element={<UsersDetailContainer />}> 
                  <Route index element={<UserDetail />} />
                  <Route path="update" element={<UsersUpdate />} />
                </Route>
            </Route>  
          </Route>
      </Routes>
      
    </BrowserRouter>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


