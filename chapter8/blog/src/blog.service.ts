import { PostDto } from './blog.model';
import { BlogFileRepository, BlogRepository } from './blog.repository';
/* 의존성주입 File 1/3*/
import { Injectable } from '@nestjs/common';

/* 의존성주입 File 2/3 */
@Injectable()
export class BlogService {
    /* 의존성주입 전 */
    //posts = [];
    // blogRepository: BlogRepository;
    // constructor() {
    //     this.blogRepository = new BlogFileRepository();
    // }

    /* 의존성주입 File 3/3 */
    constructor(private blogRepository: BlogFileRepository) {}

    async getAllPosts() {
        //return this.posts;
        return await this.blogRepository.getAllPost();
    }

    createPost(postDto: PostDto) {
        // const id = this.posts.length + 1;
        // this.posts.push({ id: id.toString(), ...postDto, createdDt: new Date() });
        this.blogRepository.createPost(postDto);
    }

    async getPost(id) {
        // const post = this.posts.find((post) => {
        //     return post.id === id;
        // });
        // console.log(post);
        // return post;
        return await this.blogRepository.getPost(id);
    }

    detele(id) {
        // const filteredPosts = this.posts.filter((post) => post.id !== id);
        // this.posts = [...filteredPosts];
        this.blogRepository.deletePost(id);
    }

    udpatePost(id, postDto: PostDto) {
        // let updateIndex = this.posts.findIndex((post) => post.id === id);
        // const updatePost = { id, ...postDto, updatedDt: new Date() };
        // this.posts[updateIndex] = updatePost;
        // return updatePost;
        this.blogRepository.updatePost(id, postDto);
    }
}