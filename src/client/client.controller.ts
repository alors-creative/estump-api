import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ClientService } from 'src/client/client.service';
import { Client as ClientModel, Prisma } from '@prisma/client';

@Controller()
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get('clients/:id')
  async getClientByID(@Param('id') id: string): Promise<ClientModel | null> {
    return this.clientService.client({ id: Number(id) });
  }

  @Get('clients')
  async getClients(): Promise<ClientModel[]> {
    return this.clientService.clients({});
  }

  @Post('clients')
  async createAClient(
    @Body()
    clientData: Prisma.ClientCreateInput,
  ): Promise<ClientModel> {
    return this.clientService.createClient(clientData);
  }

  @Patch('clients/:id')
  async updateClientByID(
    @Param('id') id: string,
    @Body()
    clientData: Partial<ClientModel>,
  ): Promise<ClientModel> {
    return this.clientService.updateClient({
      data: clientData,
      where: { id: Number(id) },
    });
  }

  @Delete('clients/:id')
  async deleteClientByID(@Param('id') id: string): Promise<ClientModel> {
    return this.clientService.deleteClient({ id: Number(id) });
  }
}
