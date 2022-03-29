import React, {useEffect, useState} from 'react';
import EventDemo from "./components/EventDemo";
import {BrowserRouter, Route, NavLink, Routes} from "react-router-dom";
import {UserPage} from "./components/UserPage";
import {TodoPage} from "./components/TodoPage";
import {UserItemPage} from "./components/UserItemPage";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <NavLink to='/users'>users</NavLink>
                    <NavLink to='/todos'>todos</NavLink>
                </nav>
                <Routes>
                    <Route path={'/users'} element={<UserPage/>}/>
                    <Route path={'/todos'} element={<TodoPage/>}/>
                    <Route path={'/users/:id'} element={<UserItemPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;