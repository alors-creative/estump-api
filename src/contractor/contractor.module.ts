import { Module } from '@nestjs/common';
import { ContractorController } from 'src/contractor/contractor.controller';
import { PrismaService } from 'src/prisma.service';
import { ContractorService } from 'src/contractor/contractor.service';

@Module({
  controllers: [ContractorController],
  providers: [PrismaService, ContractorService],
})
export class ContractorModule {}
