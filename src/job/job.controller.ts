import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { JobService } from 'src/job/job.service';
import { Job as JobModel, Prisma } from '@prisma/client';

@Controller()
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Get('jobs/:id')
  async getJobByID(@Param('id') id: string): Promise<JobModel | null> {
    return this.jobService.job({ id: Number(id) });
  }

  @Get('jobs')
  async getJobs(): Promise<JobModel[]> {
    return this.jobService.jobs({});
  }

  @Post('jobs')
  async createAJob(
    @Body()
    jobData: Prisma.JobCreateInput,
  ): Promise<JobModel> {
    return this.jobService.createJob(jobData);
  }

  @Patch('jobs/:id')
  async updateJobByID(
    @Param('id') id: string,
    @Body()
    jobData: Partial<JobModel>,
  ): Promise<JobModel> {
    return this.jobService.updateJob({
      data: jobData,
      where: { id: Number(id) },
    });
  }

  @Delete('jobs/:id')
  async deleteJobByID(@Param('id') id: string): Promise<JobModel> {
    return this.jobService.deleteJob({ id: Number(id) });
  }
}
