import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TallerMecanico } from './taller-mecanico.entity';
import { CreateTallerMecanicoDto } from './dto/create-taller-mecanico.dto';
import { UpdateTallerMecanicoDto } from './dto/update-taller-mecanico.dto';

@Injectable()
export class TalleresMecanicosService {
  constructor(
    @InjectRepository(TallerMecanico)
    private readonly tallerMecanicoRepository: Repository<TallerMecanico>,
  ) {}

  create(createTallerMecanicoDto: CreateTallerMecanicoDto) {
    const tallerMecanico = this.tallerMecanicoRepository.create(createTallerMecanicoDto);
    return this.tallerMecanicoRepository.save(tallerMecanico);
  }

  findAll() {
    return this.tallerMecanicoRepository.find();
  }

  findOne(id: string) {
    return this.tallerMecanicoRepository.findOne({ where: { id } });
  }

  async update(id: string, updateTallerMecanicoDto: UpdateTallerMecanicoDto) {
    const tallerMecanico = await this.tallerMecanicoRepository.findOne({ where: { id } });
    if (!tallerMecanico) return null;
    Object.assign(tallerMecanico, updateTallerMecanicoDto);
    return this.tallerMecanicoRepository.save(tallerMecanico);
  }

  async remove(id: string) {
    const tallerMecanico = await this.tallerMecanicoRepository.findOne({ where: { id } });
    if (!tallerMecanico) return null;
    return this.tallerMecanicoRepository.remove(tallerMecanico);
  }

  costoTotal(costos: number[]) {
    let total = 0;
    let resp = "";
  
    costos.forEach(costo => {
      if (costo > 0) {
        total += costo;
      }
    });
  
    if (total < 100) {
      resp = "Reparación económica";
    } else if (total >= 100 && total < 500) {
      resp = "Reparación media";
    } else {
      resp = "Reparación costosa";
    }
  
    return {
      costosArreglo: total,
      mensaje: resp
    };
  }

  cambioAceite(km_actual:number, km_ultimo_cambio:number){
    const recorridos: number = km_actual-km_ultimo_cambio;
    let resp = "";
    if(recorridos<5000){
        resp ="No es necesario cambio inmediato";
    } else if (recorridos>=5000 && recorridos < 8000){
        resp ="Recomendable programar cambio";
    } else {
        resp = "Cambio urgente de aceite";
    }

    return {
        km_recorridos: recorridos,
        mensaje: resp
    };

  }
  
}
