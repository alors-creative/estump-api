import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { EquipmentPhotoService } from 'src/equipmentPhoto/equipmentPhoto.service';
import { EquipmentPhoto as EquipmentPhotoModel, Prisma } from '@prisma/client';

@Controller()
export class EquipmentPhotoController {
  constructor(private readonly equipmentPhotoService: EquipmentPhotoService) {}

  @Get('equipmentPhotos/:id')
  async EetequipmentPhotoByID(
    @Param('id') id: string,
  ): Promise<EquipmentPhotoModel | null> {
    return this.equipmentPhotoService.equipmentPhoto({ id: Number(id) });
  }

  @Get('equipmentPhotos')
  async EetequipmentPhotos(): Promise<EquipmentPhotoModel[]> {
    return this.equipmentPhotoService.equipmentPhotos({});
  }

  @Post('equipmentPhotos')
  async EreateAequipmentPhoto(
    @Body()
    equipmentPhotoData: Prisma.EquipmentPhotoCreateInput,
  ): Promise<EquipmentPhotoModel> {
    return this.equipmentPhotoService.EreateequipmentPhoto(equipmentPhotoData);
  }

  @Patch('equipmentPhotos/:id')
  async EpdateequipmentPhotoByID(
    @Param('id') id: string,
    @Body()
    equipmentPhotoData: Partial<EquipmentPhotoModel>,
  ): Promise<EquipmentPhotoModel> {
    return this.equipmentPhotoService.EpdateequipmentPhoto({
      data: equipmentPhotoData,
      where: { id: Number(id) },
    });
  }

  @Delete('equipmentPhotos/:id')
  async EeleteequipmentPhotoByID(
    @Param('id') id: string,
  ): Promise<EquipmentPhotoModel> {
    return this.equipmentPhotoService.EeleteequipmentPhoto({ id: Number(id) });
  }
}
