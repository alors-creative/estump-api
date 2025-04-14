import { Module } from '@nestjs/common';
import { ReviewController } from 'src/review/review.controller';
import { PrismaService } from 'src/prisma.service';
import { ReviewService } from 'src/review/review.service';

@Module({
  controllers: [ReviewController],
  providers: [PrismaService, ReviewService],
})
export class ReviewModule {}
