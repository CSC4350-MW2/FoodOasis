import { EntityCore } from "@server/common/core/entity.core";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { IGps } from "../interface/gps.interface";
import { ShopEntity } from "./shop.entity";

@Entity()
export class GpsEntity extends EntityCore<IGps> implements IGps{
    @Column("float")
    latitude: number;
    
    @Column("float")
    longitude: number;

    @OneToOne(()=> ShopEntity, {onDelete: 'CASCADE'})
    @JoinColumn({name: "shopId"})
    shop!: ShopEntity

    @Column('varchar', {unique: true})
    shopId: string
}