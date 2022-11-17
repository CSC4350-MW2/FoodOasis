import { IShop } from "@server/modules/shop/interface/shop.interface";

export interface IUser {
    userId?:string,
    shop?:IShop,
}