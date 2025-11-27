import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('talleres-mecanicos')
export class TallerMecanico {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  placa: string;

  @Column()
  marca: string;

  @Column()
  modelo: string;

  @Column()
  anio: number;

  @Column()
  color: string;

  @Column()
  tipo: string;

  @Column()
  kilometraje: number;

  @Column()
  nombre_propietario: string;

  @Column()
  telefono_propietario: string;

  @Column()
  estado: boolean;
}
