import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Post} from "./entities/post.entity";
import {Repository} from "typeorm";
import {CreatePostDto} from "./dto/create-post.dto";
import {create} from "domain";
import {UpdatePostDto} from "./dto/update-post.dto";

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Post)
        private postsRepository: Repository<Post>
    ) {
    }

    async getAllPosts() {
        return await this.postsRepository.find();
    }

    async getPostById(id: number) {
        const post = await this.postsRepository.findOneBy({id});
        if (post) {
            return post;
        }

        throw new HttpException("Post not found", HttpStatus.NOT_FOUND);
    }

    async createPost(createPostDto: CreatePostDto) {
        return await this.postsRepository.save(createPostDto);
    }

    async updatePost(id: number, post: UpdatePostDto) {
        await this.postsRepository.update(id, post);
        const updatedPost = await this.postsRepository.findOneBy({id})
        if (updatedPost) {
            return updatedPost;
        }
        throw new HttpException("Post not found", HttpStatus.NOT_FOUND);
    }

    async deletePost(id: number) {
        const deleteResponse = await this.postsRepository.delete(id);
        if (!deleteResponse.affected) {
            throw new HttpException("Post not found", HttpStatus.NOT_FOUND);
        }
    }
}
