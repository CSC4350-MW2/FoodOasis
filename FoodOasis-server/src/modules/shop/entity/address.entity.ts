import { EntityCore } from "@server/common/core/entity.core";
import { Column, Entity } from "typeorm";
import { IAddress } from "../interface/address.interface";

@Entity() //injects the type of class into the class (known as a decorator)
export class AddressEntity extends EntityCore<IAddress> implements IAddress { 
    @Column("varchar") 
    street:string;

    @Column("varchar")
    city:string;

    @Column("varchar")
    state:string;

    @Column("varchar")
    country:string;

    @Column("int")
    zipcode:number;
}
