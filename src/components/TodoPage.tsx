import React, {useEffect, useState} from 'react';
import {List} from "./List";
import {ITodo, IUser} from "../types/types";
import TodoItem from "./TodoItem";
import axios from "axios";

export const TodoPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    useEffect(() => {
        fetchTodos().then();
    }, []);

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
            <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}/>
        </div>
    );
};

