import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ComplianceService } from 'src/compliance/compliance.service';
import { Compliance as ComplianceModel, Prisma } from '@prisma/client';

@Controller()
export class ComplianceController {
  constructor(private readonly complianceService: ComplianceService) {}

  @Get('compliances/:id')
  async getComplianceByID(
    @Param('id') id: string,
  ): Promise<ComplianceModel | null> {
    return this.complianceService.compliance({ id: Number(id) });
  }

  @Get('compliances')
  async getCompliances(): Promise<ComplianceModel[]> {
    return this.complianceService.compliances({});
  }

  @Post('compliances')
  async createACompliance(
    @Body()
    complianceData: Prisma.ComplianceCreateInput,
  ): Promise<ComplianceModel> {
    return this.complianceService.createCompliance(complianceData);
  }

  @Patch('compliances/:id')
  async updateComplianceByID(
    @Param('id') id: string,
    @Body()
    complianceData: Partial<ComplianceModel>,
  ): Promise<ComplianceModel> {
    return this.complianceService.updateCompliance({
      data: complianceData,
      where: { id: Number(id) },
    });
  }

  @Delete('compliances/:id')
  async deleteComplianceByID(
    @Param('id') id: string,
  ): Promise<ComplianceModel> {
    return this.complianceService.deleteCompliance({ id: Number(id) });
  }
}
