import React, {useEffect, useState} from 'react';
import {ITodo, IUser} from "../types/types";
import axios from "axios";
import {List} from "./List";
import {UserItem} from "./UserItem";
import {Navigate, useNavigate} from "react-router-dom";

export const UserPage: React.FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetchUsers().then();
    }, []);

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('http://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch (e) {
            alert(e);
        }
    }

    return (
        <List items={users} renderItem={(user: IUser) => <UserItem onClick={(user) => navigate(`/users/${user.id}`)} user={user} key={user.id}/>}/>
    );
};
