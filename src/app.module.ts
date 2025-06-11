import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';
import { ComplianceModule } from './compliance/compliance.module';
import { ContractorModule } from './contractor/contractor.module';
import { EquipmentPhotoModule } from './equipmentPhoto/equipmentPhoto.module';
import { JobModule } from './job/job.module';
import { PhotoModule } from './photo/photo.module';
import { ReviewModule } from './review/review.module';
import { StumpModule } from './stump/stump.module';
import { StumpPhotoModule } from './stumpPhoto/stumpPhoto.module';

@Module({
  imports: [
    AccountModule,
    AdminModule,
    ClientModule,
    ComplianceModule,
    ContractorModule,
    EquipmentPhotoModule,
    JobModule,
    PhotoModule,
    ReviewModule,
    StumpModule,
    StumpPhotoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
