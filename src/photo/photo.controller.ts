import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { PhotoService } from 'src/photo/photo.service';
import { Photo as PhotoModel, Prisma } from '@prisma/client';

@Controller()
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get('photos/:id')
  async getPhotoByID(@Param('id') id: string): Promise<PhotoModel | null> {
    return this.photoService.photo({ id: Number(id) });
  }

  @Get('photos')
  async getPhotos(): Promise<PhotoModel[]> {
    return this.photoService.photos({});
  }

  @Post('photos')
  async createAPhoto(
    @Body()
    photoData: Prisma.PhotoCreateInput,
  ): Promise<PhotoModel> {
    return this.photoService.createPhoto(photoData);
  }

  @Patch('photos/:id')
  async updatePhotoByID(
    @Param('id') id: string,
    @Body()
    photoData: Partial<PhotoModel>,
  ): Promise<PhotoModel> {
    return this.photoService.updatePhoto({
      data: photoData,
      where: { id: Number(id) },
    });
  }

  @Delete('photos/:id')
  async deletePhotoByID(@Param('id') id: string): Promise<PhotoModel> {
    return this.photoService.deletePhoto({ id: Number(id) });
  }
}
