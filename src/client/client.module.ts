import { Module } from '@nestjs/common';
import { ClientController } from 'src/client/client.controller';
import { PrismaService } from 'src/prisma.service';
import { ClientService } from 'src/client/client.service';

@Module({
  controllers: [ClientController],
  providers: [PrismaService, ClientService],
})
export class ClientModule {}
