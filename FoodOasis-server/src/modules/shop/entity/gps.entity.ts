import { EntityCore } from "@server/common/core/entity.core";
import { Column, Entity } from "typeorm";
import { IGps } from "../interface/gps.interface";

@Entity()
export class GpsEntity extends EntityCore<IGps> implements IGps{
    @Column("float")
    latitude: number;
    
    @Column("float")
    longitude: number;
}