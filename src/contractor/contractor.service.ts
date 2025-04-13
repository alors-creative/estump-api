import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Contractor, Prisma } from '@prisma/client';

@Injectable()
export class ContractorService {
  constructor(private prisma: PrismaService) {}

  async contractor(
    contractorWhereUniqueInput: Prisma.ContractorWhereUniqueInput,
  ): Promise<Contractor | null> {
    return this.prisma.contractor.findUnique({
      where: contractorWhereUniqueInput,
    });
  }

  async contractors(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ContractorWhereUniqueInput;
    where?: Prisma.ContractorWhereInput;
    orderBy?: Prisma.ContractorOrderByWithRelationInput;
  }): Promise<Contractor[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.contractor.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createContractor(
    data: Prisma.ContractorCreateInput,
  ): Promise<Contractor> {
    return this.prisma.contractor.create({
      data,
    });
  }

  async updateContractor(params: {
    where: Prisma.ContractorWhereUniqueInput;
    data: Prisma.ContractorUpdateInput;
  }): Promise<Contractor> {
    const { where, data } = params;
    return this.prisma.contractor.update({
      data,
      where,
    });
  }

  async deleteContractor(
    where: Prisma.ContractorWhereUniqueInput,
  ): Promise<Contractor> {
    return this.prisma.contractor.delete({
      where,
    });
  }
}
