import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { StumpPhotoService } from 'src/stumpPhoto/stumpPhoto.service';
import { StumpPhoto as StumpPhotoModel, Prisma } from '@prisma/client';

@Controller()
export class StumpPhotoController {
  constructor(private readonly stumpPhotoService: StumpPhotoService) {}

  @Get('stumpPhotos/:id')
  async getStumpPhotoByID(
    @Param('id') id: string,
  ): Promise<StumpPhotoModel | null> {
    return this.stumpPhotoService.stumpPhoto({ id: Number(id) });
  }

  @Get('stumpPhotos')
  async getStumpPhotos(): Promise<StumpPhotoModel[]> {
    return this.stumpPhotoService.stumpPhotos({});
  }

  @Post('stumpPhotos')
  async createAStumpPhoto(
    @Body()
    stumpPhotoData: Prisma.StumpPhotoCreateInput,
  ): Promise<StumpPhotoModel> {
    return this.stumpPhotoService.createStumpPhoto(stumpPhotoData);
  }

  @Patch('stumpPhotos/:id')
  async updateStumpPhotoByID(
    @Param('id') id: string,
    @Body()
    stumpPhotoData: Partial<StumpPhotoModel>,
  ): Promise<StumpPhotoModel> {
    return this.stumpPhotoService.updateStumpPhoto({
      data: stumpPhotoData,
      where: { id: Number(id) },
    });
  }

  @Delete('stumpPhotos/:id')
  async deleteStumpPhotoByID(
    @Param('id') id: string,
  ): Promise<StumpPhotoModel> {
    return this.stumpPhotoService.deleteStumpPhoto({ id: Number(id) });
  }
}
