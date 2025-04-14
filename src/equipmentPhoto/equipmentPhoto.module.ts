import { Module } from '@nestjs/common';
import { EquipmentPhotoController } from 'src/equipmentPhoto/equipmentPhoto.controller';
import { PrismaService } from 'src/prisma.service';
import { EquipmentPhotoService } from 'src/equipmentPhoto/equipmentPhoto.service';

@Module({
  controllers: [EquipmentPhotoController],
  providers: [PrismaService, EquipmentPhotoService],
})
export class EquipmentPhotoModule {}
