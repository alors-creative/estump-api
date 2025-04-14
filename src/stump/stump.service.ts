import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Stump, Prisma } from '@prisma/client';

@Injectable()
export class StumpService {
  constructor(private prisma: PrismaService) {}

  async stump(
    stumpWhereUniqueInput: Prisma.StumpWhereUniqueInput,
  ): Promise<Stump | null> {
    return this.prisma.stump.findUnique({
      where: stumpWhereUniqueInput,
    });
  }

  async stumps(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.StumpWhereUniqueInput;
    where?: Prisma.StumpWhereInput;
    orderBy?: Prisma.StumpOrderByWithRelationInput;
  }): Promise<Stump[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.stump.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createStump(data: Prisma.StumpCreateInput): Promise<Stump> {
    return this.prisma.stump.create({
      data,
    });
  }

  async updateStump(params: {
    where: Prisma.StumpWhereUniqueInput;
    data: Prisma.StumpUpdateInput;
  }): Promise<Stump> {
    const { where, data } = params;
    return this.prisma.stump.update({
      data,
      where,
    });
  }

  async deleteStump(where: Prisma.StumpWhereUniqueInput): Promise<Stump> {
    return this.prisma.stump.delete({
      where,
    });
  }
}
