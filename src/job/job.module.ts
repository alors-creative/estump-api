import { Module } from '@nestjs/common';
import { JobController } from 'src/job/job.controller';
import { PrismaService } from 'src/prisma.service';
import { JobService } from 'src/job/job.service';

@Module({
  controllers: [JobController],
  providers: [PrismaService, JobService],
})
export class JobModule {}
