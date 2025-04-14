import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ReviewService } from 'src/review/review.service';
import { Review as ReviewModel, Prisma } from '@prisma/client';

@Controller()
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get('reviews/:id')
  async getReviewByID(@Param('id') id: string): Promise<ReviewModel | null> {
    return this.reviewService.review({ id: Number(id) });
  }

  @Get('reviews')
  async getReviews(): Promise<ReviewModel[]> {
    return this.reviewService.reviews({});
  }

  @Post('reviews')
  async createAReview(
    @Body()
    reviewData: Prisma.ReviewCreateInput,
  ): Promise<ReviewModel> {
    return this.reviewService.createReview(reviewData);
  }

  @Patch('reviews/:id')
  async updateReviewByID(
    @Param('id') id: string,
    @Body()
    reviewData: Partial<ReviewModel>,
  ): Promise<ReviewModel> {
    return this.reviewService.updateReview({
      data: reviewData,
      where: { id: Number(id) },
    });
  }

  @Delete('reviews/:id')
  async deleteReviewByID(@Param('id') id: string): Promise<ReviewModel> {
    return this.reviewService.deleteReview({ id: Number(id) });
  }
}
