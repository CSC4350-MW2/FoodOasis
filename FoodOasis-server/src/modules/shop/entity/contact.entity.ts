import { EntityCore } from "@server/common/core/entity.core";
import { Column, Entity } from "typeorm";
import { IContact } from "../interface/contact.interface";

@Entity()
export class ContactEntity extends EntityCore<IContact> implements IContact{ //export the class allows it to be accessible outside  
    @Column("int")
    phone:number;

    @Column("varchar")
    social:string;
    
    @Column("varchar")
    website:string;
}