import { Post } from './Post';
import { User } from './User';
import { ObjectType, Field } from "type-graphql";
import {
  Entity,
  Column,
  BaseEntity,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";


@ObjectType()
@Entity()
export class Updoot extends BaseEntity {
    @Field()
    @Column({type: "int"})
    value: number;

    @Field()
    @PrimaryColumn()
    userId: number;

    @Field(() => User)
    @ManyToOne(() => User, user => user.updoots)
    user: User

    @Field()
    @PrimaryColumn()
    postId: number;

    @Field(() => Post)
    @ManyToOne(() => Post, (post) => post.updoots)
    post: Post
}