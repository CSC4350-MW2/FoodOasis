import { ICategory } from "@category-service/interface/category.interface";
import { IAddress } from "./address.interface";
import { IGps } from "./gps.interface";

export interface IShop {
    id:number,
    name:string,
    gps:IGps,
    address:IAddress,
    category:ICategory
}