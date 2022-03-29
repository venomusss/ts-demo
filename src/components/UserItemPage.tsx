import React, {useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import {useParams} from "react-router-dom";

type UserItemPageParams = {
    id:string;
}
export const UserItemPage:React.FC = () => {
    const [user, setUser] = useState<IUser|null>(null);
    let par = useParams<UserItemPageParams>();
    useEffect(() => {
        fetchUser().then();
    }, []);

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>('http://jsonplaceholder.typicode.com/users/' + par.id)
            setUser(response.data)
        } catch (e) {
            alert(e);
        }
    }
    return (
        <div>
            {user?.id} {user?.name}{user?.adress}{user?.email}
        </div>
    );
};

