import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TalleresMecanicosService } from './talleres-mecanicos.service';
import { TalleresMecanicosController } from './talleres-mecanicos.controller';
import { TallerMecanico } from './taller-mecanico.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TallerMecanico])],
  controllers: [TalleresMecanicosController],
  providers: [TalleresMecanicosService],
})
export class TalleresMecanicosModule {}
