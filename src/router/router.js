import React from 'react' ;
import { BrowserRouter as Router, Route } from "react-router-dom";
import RegisterUser from '../component/user_register';
import UserList from '../component/list_user';
import Index from '../component/Index';
import EditUser from '../component/edit_user';
import DeleteUser from "../component/delete_user";

function AppRouter() {
    return (
        <Router>
            <div>
                <Route path="/" exact component = {Index} />
                <Route path="/user/register" exact component = { RegisterUser } />
                <Route path="/user/list" exact component = {UserList} />
                <Route path="/user/edit/:id" exact component = {EditUser}/>
                <Route path="/user/delete/:id" exact component = {DeleteUser}/>
            </div>
        </Router>
    );
}

export default AppRouter;