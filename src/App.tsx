import React, {useEffect, useState} from 'react';
import {ITodo, IUser} from "./types/types";
import {UserList} from "./components/UserList";
import axios from "axios";
import {List} from "./components/List";
import {UserItem} from "./components/UserItem";
import TodoItem from "./components/TodoItem";
import EventDemo from "./components/EventDemo";

const App = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [todos, setTodos] = useState<ITodo[]>([]);
    useEffect(() => {
        fetchUsers().then();
        fetchTodos().then();
    }, []);

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('http://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch (e) {
            alert(e);
        }
    }
    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(response.data)
        } catch (e) {
            alert(e);
        }
    }

    return (
        <div>
            <List items={users} renderItem={(user:IUser)=> <UserItem user={user} key={user.id}/>}/>
            <List items={todos} renderItem={(todo:ITodo)=> <TodoItem todo={todo} key={todo.id}/>}/>
            <EventDemo/>
        </div>
    );
};

export default App;