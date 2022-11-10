import { IShop } from "@shop-service/interface/shop.interface";
import { ICategory } from "./category.interface";

export interface IFood{
    id:number,
    name:string,
    shop:IShop,
    category:ICategory
}