import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { AdminService } from 'src/admin/admin.service';
import { Admin as AdminModel, Prisma } from '@prisma/client';

@Controller()
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('admin/:id')
  async getAdminByID(@Param('id') id: string): Promise<AdminModel | null> {
    return this.adminService.admin({ id: Number(id) });
  }

  @Get('admin')
  async getAdmins(): Promise<AdminModel[]> {
    return this.adminService.admins({});
  }

  @Post('admin')
  async createAAdmin(
    @Body()
    adminData: Prisma.AdminCreateInput,
  ): Promise<AdminModel> {
    return this.adminService.createAdmin(adminData);
  }

  @Patch('admin/:id')
  async updateAdminByID(
    @Param('id') id: string,
    @Body()
    adminData: Partial<AdminModel>,
  ): Promise<AdminModel> {
    return this.adminService.updateAdmin({
      data: adminData,
      where: { id: Number(id) },
    });
  }

  @Delete('admin/:id')
  async deleteAdminByID(@Param('id') id: string): Promise<AdminModel> {
    return this.adminService.deleteAdmin({ id: Number(id) });
  }
}
