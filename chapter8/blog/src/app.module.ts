import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogController } from './blog.controller';
/* 의존성주입 File 1/2 */
import { BlogFileRepository, BlogMongoRepository } from './blog.repository';
import { Blog, BlogSchema } from './blog.schema';
import { BlogService } from './blog.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      "mongodb+srv://styeo94:1QaxDOHA8TkhcKip@cluster0.qofpazq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/blog",
    ),
    MongooseModule.forFeature([{ name: Blog.name, schema: BlogSchema }]),
  ],
  controllers: [BlogController],

  /* 의존성주입 전 */
  // providers: [BlogService],

  /* 의존성주입 File 2/2 */
  providers: [BlogService, BlogFileRepository, BlogMongoRepository],
})
export class AppModule { }
