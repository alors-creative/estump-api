import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ContractorService } from 'src/contractor/contractor.service';
import { Contractor as ContractorModel, Prisma } from '@prisma/client';

@Controller()
export class ContractorController {
  constructor(private readonly contractorService: ContractorService) {}

  @Get('contractors/:id')
  async getContractorByID(
    @Param('id') id: string,
  ): Promise<ContractorModel | null> {
    return this.contractorService.contractor({ id: Number(id) });
  }

  @Get('contractors')
  async getContractors(): Promise<ContractorModel[]> {
    return this.contractorService.contractors({});
  }

  @Post('contractors')
  async createAContractor(
    @Body()
    contractorData: Prisma.ContractorCreateInput,
  ): Promise<ContractorModel> {
    return this.contractorService.createContractor(contractorData);
  }

  @Patch('contractors/:id')
  async updateContractorByID(
    @Param('id') id: string,
    @Body()
    contractorData: Partial<ContractorModel>,
  ): Promise<ContractorModel> {
    return this.contractorService.updateContractor({
      data: contractorData,
      where: { id: Number(id) },
    });
  }

  @Delete('contractors/:id')
  async deleteContractorByID(
    @Param('id') id: string,
  ): Promise<ContractorModel> {
    return this.contractorService.deleteContractor({ id: Number(id) });
  }
}
