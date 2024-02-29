import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';

/* 의존성주입 File 1/2 */
import { BlogFileRepository } from './blog.repository';

@Module({
  imports: [],
  controllers: [BlogController],

  /* 의존성주입 전 */
  // providers: [BlogService],

  /* 의존성주입 File 2/2 */
  providers: [BlogService, BlogFileRepository],
})
export class AppModule {}
