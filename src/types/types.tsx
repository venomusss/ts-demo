export interface IAdress{
    street:string,
    city:string,
    zipcode:string,
}
export interface IUser{
    id:number,
    name:string,
    email:string,
    adress:IAdress
}

export interface ITodo{
    id:number,
    title:string,
    completed:boolean;
}