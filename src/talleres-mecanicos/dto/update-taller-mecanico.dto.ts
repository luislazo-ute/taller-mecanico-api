import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateTallerMecanicoDto {
    @IsString()
    placa: string;
  
    @IsString()
    marca: string;
  
    @IsString()
    modelo: string;
  
    @IsNumber()
    anio: number;
  
    @IsString()
    color: string;
  
    @IsString()
    tipo: string;
  
    @IsNumber()
    kilometraje:number;
  
    @IsString()
    nombre_propietario: string;
  
    @IsString()
    telefono_propietario: string;
  
    @IsBoolean()
    estado: boolean;
}
