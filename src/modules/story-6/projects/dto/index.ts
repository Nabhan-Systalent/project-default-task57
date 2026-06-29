import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProjectDto {
  @ApiProperty({ example: '1', description: 'The project ID' })
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty({ example: 'Project Alpha', description: 'The project name' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Description here', description: 'Project details' })
  @IsString()
  @IsOptional()
  description?: string;
}
