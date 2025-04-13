import { Module } from '@nestjs/common';
import { AdminController } from 'src/admin/admin.controller';
import { PrismaService } from 'src/prisma.service';
import { AdminService } from 'src/admin/admin.service';

@Module({
  controllers: [AdminController],
  providers: [PrismaService, AdminService],
})
export class AdminModule {}
