import { Controller, Get, Delete, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectResponseDto } from '../tasks/dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('Projects')
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  @ApiResponse({ status: 200, type: [ProjectResponseDto] })
  listProjects(): ProjectResponseDto[] {
    return this.projectsService.findAll();
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteProject(@Param('id') id: string): void {
    return this.projectsService.delete(id);
  }
}
