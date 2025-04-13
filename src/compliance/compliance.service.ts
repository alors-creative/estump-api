import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Compliance, Prisma } from '@prisma/client';

@Injectable()
export class ComplianceService {
  constructor(private prisma: PrismaService) {}

  async compliance(
    complianceWhereUniqueInput: Prisma.ComplianceWhereUniqueInput,
  ): Promise<Compliance | null> {
    return this.prisma.compliance.findUnique({
      where: complianceWhereUniqueInput,
    });
  }

  async compliances(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ComplianceWhereUniqueInput;
    where?: Prisma.ComplianceWhereInput;
    orderBy?: Prisma.ComplianceOrderByWithRelationInput;
  }): Promise<Compliance[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.compliance.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createCompliance(
    data: Prisma.ComplianceCreateInput,
  ): Promise<Compliance> {
    return this.prisma.compliance.create({
      data,
    });
  }

  async updateCompliance(params: {
    where: Prisma.ComplianceWhereUniqueInput;
    data: Prisma.ComplianceUpdateInput;
  }): Promise<Compliance> {
    const { where, data } = params;
    return this.prisma.compliance.update({
      data,
      where,
    });
  }

  async deleteCompliance(
    where: Prisma.ComplianceWhereUniqueInput,
  ): Promise<Compliance> {
    return this.prisma.compliance.delete({
      where,
    });
  }
}
