import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 200 })
    title: string;

    @Column("text")
    content: string;
}
