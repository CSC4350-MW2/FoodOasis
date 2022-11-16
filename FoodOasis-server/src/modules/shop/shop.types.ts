import { IShop } from "./interface/shop.interface"

export type Shop = IShop

export type FullShop = Shop & DateInfo

export type UpdateShop = Partial<Omit<Shop, 'id'>>

export type FilterShop = Partial<FullShop>