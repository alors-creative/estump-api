import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { EquipmentPhoto, Prisma } from '@prisma/client';

@Injectable()
export class EquipmentPhotoService {
  constructor(private prisma: PrismaService) {}

  async equipmentPhoto(
    equipmentPhotoWhereUniqueInput: Prisma.EquipmentPhotoWhereUniqueInput,
  ): Promise<EquipmentPhoto | null> {
    return this.prisma.equipmentPhoto.findUnique({
      where: equipmentPhotoWhereUniqueInput,
    });
  }

  async equipmentPhotos(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.EquipmentPhotoWhereUniqueInput;
    where?: Prisma.EquipmentPhotoWhereInput;
    orderBy?: Prisma.EquipmentPhotoOrderByWithRelationInput;
  }): Promise<EquipmentPhoto[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.equipmentPhoto.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async EreateequipmentPhoto(
    data: Prisma.EquipmentPhotoCreateInput,
  ): Promise<EquipmentPhoto> {
    return this.prisma.equipmentPhoto.create({
      data,
    });
  }

  async EpdateequipmentPhoto(params: {
    where: Prisma.EquipmentPhotoWhereUniqueInput;
    data: Prisma.EquipmentPhotoUpdateInput;
  }): Promise<EquipmentPhoto> {
    const { where, data } = params;
    return this.prisma.equipmentPhoto.update({
      data,
      where,
    });
  }

  async EeleteequipmentPhoto(
    where: Prisma.EquipmentPhotoWhereUniqueInput,
  ): Promise<EquipmentPhoto> {
    return this.prisma.equipmentPhoto.delete({
      where,
    });
  }
}
