import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Exclude} from "class-transformer";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true, type: "varchar", length: 255})
    email: string;

    @Column({type: "varchar", length: 25})
    name: string;

    @Column({type: "varchar", length: 255})
    @Exclude()
    password: string;


}
