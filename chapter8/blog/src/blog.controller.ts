import { Controller, Param, Body, Delete, Get, Post, Put } from '@nestjs/common';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {

    /* 의존성주입 전 */
    // blogService: BlogService;

    // constructor() {
    //     this.blogService = new BlogService();
    // }

    /* 의존성주입 File 1/1 */
    constructor(private blogService:BlogService){}
    
    @Get()
    getAllPosts() {
        console.log('모든 게시글을 가져오기');
        return this.blogService.getAllPosts();
    }

    @Post()
    createPost(@Body() postDto) {
        console.log('게시글 작성');
        this.blogService.createPost(postDto);
        return 'success';
    }

    @Get('/:id')
    async getPost(@Param('id') id: string) {
        console.log(`게시글 하나 가져오기`);
        // return this.blogService.getPost(id);
        const post = await this.blogService.getPost(id);
        console.log(post);
        return post;
    }

    @Delete('/:id')
    deletePost(@Param('id') id : string) {
        console.log('게시글 삭제');
        this.blogService.detele(id);
        return 'success';
    }

    @Put('/:id')
    updatePost(@Param('id') id, @Body() postDto) {
        console.log('게시글 업데이트', id, postDto);
        return this.blogService.udpatePost(id, postDto);
    }
}