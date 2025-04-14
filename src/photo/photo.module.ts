import { Module } from '@nestjs/common';
import { PhotoController } from 'src/photo/photo.controller';
import { PrismaService } from 'src/prisma.service';
import { PhotoService } from 'src/photo/photo.service';

@Module({
  controllers: [PhotoController],
  providers: [PrismaService, PhotoService],
})
export class PhotoModule {}
