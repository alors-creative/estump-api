import { Module } from '@nestjs/common';
import { StumpController } from 'src/stump/stump.controller';
import { PrismaService } from 'src/prisma.service';
import { StumpService } from 'src/stump/stump.service';

@Module({
  controllers: [StumpController],
  providers: [PrismaService, StumpService],
})
export class StumpModule {}
