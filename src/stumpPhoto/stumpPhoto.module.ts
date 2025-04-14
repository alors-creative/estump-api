import { Module } from '@nestjs/common';
import { StumpPhotoController } from 'src/stumpPhoto/stumpPhoto.controller';
import { PrismaService } from 'src/prisma.service';
import { StumpPhotoService } from 'src/stumpPhoto/stumpPhoto.service';

@Module({
  controllers: [StumpPhotoController],
  providers: [PrismaService, StumpPhotoService],
})
export class StumpPhotoModule {}
