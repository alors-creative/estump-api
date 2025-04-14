import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { StumpPhoto, Prisma } from '@prisma/client';

@Injectable()
export class StumpPhotoService {
  constructor(private prisma: PrismaService) {}

  async stumpPhoto(
    stumpPhotoWhereUniqueInput: Prisma.StumpPhotoWhereUniqueInput,
  ): Promise<StumpPhoto | null> {
    return this.prisma.stumpPhoto.findUnique({
      where: stumpPhotoWhereUniqueInput,
    });
  }

  async stumpPhotos(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.StumpPhotoWhereUniqueInput;
    where?: Prisma.StumpPhotoWhereInput;
    orderBy?: Prisma.StumpPhotoOrderByWithRelationInput;
  }): Promise<StumpPhoto[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.stumpPhoto.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createStumpPhoto(
    data: Prisma.StumpPhotoCreateInput,
  ): Promise<StumpPhoto> {
    return this.prisma.stumpPhoto.create({
      data,
    });
  }

  async updateStumpPhoto(params: {
    where: Prisma.StumpPhotoWhereUniqueInput;
    data: Prisma.StumpPhotoUpdateInput;
  }): Promise<StumpPhoto> {
    const { where, data } = params;
    return this.prisma.stumpPhoto.update({
      data,
      where,
    });
  }

  async deleteStumpPhoto(
    where: Prisma.StumpPhotoWhereUniqueInput,
  ): Promise<StumpPhoto> {
    return this.prisma.stumpPhoto.delete({
      where,
    });
  }
}
