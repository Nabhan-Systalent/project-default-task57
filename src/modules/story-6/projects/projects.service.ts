import { Injectable } from '@nestjs/common';
import { ProjectDto } from './dto';

@Injectable()
export class ProjectsService {
  private projects: ProjectDto[] = [
    { id: '1', name: 'Alpha Project', description: 'First project' },
    { id: '2', name: 'Beta Project', description: 'Second project' },
  ];

  async findAll(): Promise<ProjectDto[]> {
    return this.projects;
  }

  async delete(id: string): Promise<void> {
    this.projects = this.projects.filter((p) => p.id !== id);
  }
}
