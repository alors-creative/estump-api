import { Module } from '@nestjs/common';
import { ComplianceController } from 'src/compliance/compliance.controller';
import { PrismaService } from 'src/prisma.service';
import { ComplianceService } from 'src/compliance/compliance.service';

@Module({
  controllers: [ComplianceController],
  providers: [PrismaService, ComplianceService],
})
export class ComplianceModule {}
