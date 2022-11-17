import { ICategory } from "@category-service/interface/category.interface";
import { IAddress } from "./address.interface";
import { IContact } from "./contact.interface";
import { IGps } from "./gps.interface";

export interface IShop {
    id?:string,
    userId?: string,
    name?:string,
    gps?:IGps,
    address?:IAddress,
    category?:ICategory,
    contact?: IContact
}