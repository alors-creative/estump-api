import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { StumpService } from 'src/stump/stump.service';
import { Stump as StumpModel, Prisma } from '@prisma/client';

@Controller()
export class StumpController {
  constructor(private readonly stumpService: StumpService) {}

  @Get('stumps/:id')
  async getStumpByID(@Param('id') id: string): Promise<StumpModel | null> {
    return this.stumpService.stump({ id: Number(id) });
  }

  @Get('stumps')
  async getStumps(): Promise<StumpModel[]> {
    return this.stumpService.stumps({});
  }

  @Post('stumps')
  async createAStump(
    @Body()
    stumpData: Prisma.StumpCreateInput,
  ): Promise<StumpModel> {
    return this.stumpService.createStump(stumpData);
  }

  @Patch('stumps/:id')
  async updateStumpByID(
    @Param('id') id: string,
    @Body()
    stumpData: Partial<StumpModel>,
  ): Promise<StumpModel> {
    return this.stumpService.updateStump({
      data: stumpData,
      where: { id: Number(id) },
    });
  }

  @Delete('stumps/:id')
  async deleteStumpByID(@Param('id') id: string): Promise<StumpModel> {
    return this.stumpService.deleteStump({ id: Number(id) });
  }
}
