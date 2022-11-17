import { EntityCore } from "@server/common/core/entity.core";
import { ShopEntity } from "@server/modules/shop/entity/shop.entity";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { ICategory } from "../interface/category.interface";

@Entity({name: "categories"}) //injects the type of class into the class (known as a decorator)
export class CategoryEntity extends EntityCore<ICategory> implements ICategory { 
    @Column("varchar")
    name:string;

    @OneToOne(()=> ShopEntity, {onDelete: 'CASCADE'})
    @JoinColumn({name: "shopId"})
    shop!: ShopEntity

    @Column('varchar', {unique: true})
    shopId: string
}
