import { EntityCore } from "@server/common/core/entity.core";
import { CategoryEntity } from "@server/modules/category/entity/category.entity";
import { ICategory } from "@server/modules/category/interface/category.interface";
import { Column, Entity, OneToMany, OneToOne } from "typeorm";
import { IAddress } from "../interface/address.interface";
import { IContact } from "../interface/contact.interface";
import { IGps } from "../interface/gps.interface";
import { IShop } from "../interface/shop.interface";
import { AddressEntity } from "./address.entity";
import { ContactEntity } from "./contact.entity";
import { GpsEntity } from "./gps.entity";

@Entity({name: "shops"})
export class ShopEntity extends EntityCore<IShop> implements IShop{
    @Column("varchar")
    name:string;
    
    @OneToOne(()=> GpsEntity, (gps)=> gps.shop, {
        eager: true, // eager: loads the gps column as well otherwise will not come
        cascade: true // adds the related object into the main object
    })
    gps:IGps;
    
    @OneToOne(()=> AddressEntity, (address)=> address.shop, {
        eager: true,
        cascade: true
    })
    address:IAddress;
    
    @OneToOne(()=> CategoryEntity, (category)=> category.shop, {
        eager: true,
        cascade: true
    })
    category: ICategory;

    @OneToOne(()=> ContactEntity, (contact)=> contact.shop, {
        eager: true,
        cascade: true
    })
    contact: IContact;

    @Column('varchar', {unique: true})
    userId: string
}