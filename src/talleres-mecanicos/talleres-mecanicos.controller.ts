import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TalleresMecanicosService } from './talleres-mecanicos.service';
import { CreateTallerMecanicoDto } from './dto/create-taller-mecanico.dto';
import { UpdateTallerMecanicoDto } from './dto/update-taller-mecanico.dto';

@Controller('talleres-mecanicos')
export class TalleresMecanicosController {
  constructor(private readonly talleresMecanicosService: TalleresMecanicosService) {}

  @Post()
  create(@Body() createTallereMecanicoDto: CreateTallerMecanicoDto) {
    return this.talleresMecanicosService.create(createTallereMecanicoDto);
  }

  @Get()
  findAll() {
    return this.talleresMecanicosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.talleresMecanicosService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTallereMecanicoDto: UpdateTallerMecanicoDto) {
    return this.talleresMecanicosService.update(id, updateTallereMecanicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.talleresMecanicosService.remove(id);
  }
}
