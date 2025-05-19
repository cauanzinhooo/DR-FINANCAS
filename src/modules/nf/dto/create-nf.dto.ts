// dtos/create-nota-fiscal.dto.ts
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsDateString,
  IsOptional,
} from "class-validator";

export class CreateNotaFiscalDto {
  @IsString()
  @IsNotEmpty()
  cnpj: string;

  @IsString()
  @IsNotEmpty()
  municipio: string;

  @IsString()
  @IsNotEmpty()
  estado: string;

  @IsNumber()
  @IsNotEmpty()
  valor: number;

  @IsDateString()
  @IsOptional()
  dataDesejada: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;
}
