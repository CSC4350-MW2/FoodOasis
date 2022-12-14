import { EntityCore } from "@server/common/core/entity.core";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { IContact } from "../interface/contact.interface";
import { ShopEntity } from "./shop.entity";

@Entity({name: "contacts"})
export class ContactEntity extends EntityCore<IContact> implements IContact{ //export the class allows it to be accessible outside  
    @Column("varchar")
    phone:string;

    @Column("varchar")
    social:string;
    
    @Column("varchar")
    website:string;

    @OneToOne(()=> ShopEntity, {onDelete: 'CASCADE'})
    @JoinColumn({name: "shopId"})
    shop!: ShopEntity

    @Column('varchar', {unique: true})
    shopId: string
}