import { Injectable } from '@nestjs/common';
import { TaskResponseDto, CreateTaskDto } from './dto';

@Injectable()
export class TasksService {
  private tasks: TaskResponseDto[] = [{ id: '1', title: 'Sample Task' }];

  findAll(): TaskResponseDto[] {
    return this.tasks;
  }

  create(dto: CreateTaskDto): TaskResponseDto {
    const newTask = { id: Math.random().toString(36).substr(2, 9), ...dto };
    this.tasks.push(newTask);
    return newTask;
  }
}
