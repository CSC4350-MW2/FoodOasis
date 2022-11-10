import { IContact } from "@server/modules/shop/interface/contact.interface";
import { IShop } from "@server/modules/shop/interface/shop.interface";

export interface IUser {
    id:number,
    shop:IShop,
    contact:IContact
}