import React from 'react';
import {IUser} from "../types/types";

interface UserItemProps{
    user:IUser,
    onClick:(user:IUser) => void;
}

export const UserItem:React.FC<UserItemProps> = ({user, onClick}) => {
    return (
            <div onClick={()=> onClick(user)}>{user.id} {user.name}{user.adress}{user.email}</div>
    );
};

