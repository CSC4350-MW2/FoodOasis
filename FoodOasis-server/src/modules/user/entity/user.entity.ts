import { EntityCore } from "@server/common/core/entity.core";
import { ShopEntity } from "@server/modules/shop/entity/shop.entity";
import { IShop } from "@server/modules/shop/interface/shop.interface";
import { Column, Entity, OneToMany } from "typeorm";
import { IUser } from "../interface/user.interface";

@Entity()
export class UserEntity extends EntityCore<IUser> implements IUser{
    @Column("varchar")
    userId: string;
    
    @OneToMany(()=> ShopEntity, (shop)=> shop.user, {
        eager: true, // eager: loads the gps column as well otherwise will not come
        cascade: true // adds the related object into the main object
    })
    shop:IShop;    

}