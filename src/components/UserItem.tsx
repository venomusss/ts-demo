import React from 'react';
import {IUser} from "../types/types";

interface UserItemProps{
    user:IUser
}

export const UserItem:React.FC<UserItemProps> = ({user}) => {
    return (
            <div>{user.name}</div>
    );
};

