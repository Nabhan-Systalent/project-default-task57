'use client';

import { useState } from 'react';
import { ProjectBoardProps, Task } from './ProjectBoard.types';

export const ProjectBoard: React.FC<ProjectBoardProps> = ({ initialTasks = [] }) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const columns: { id: Task['status']; label: string }[] = [
    { id: 'todo', label: 'To Do' },
    { id: 'in-progress', label: 'In Progress' },
    { id: 'done', label: 'Done' },
  ];

  const handleDragStart = (e: React.DragEvent, taskId: string) => {
    e.dataTransfer.setData('taskId', taskId);
  };

  const handleDrop = (e: React.DragEvent, status: Task['status']) => {
    const taskId = e.dataTransfer.getData('taskId');
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, status } : t))
    );
  };

  return (
    <div className="flex gap-4 p-6 overflow-x-auto min-h-screen bg-gray-50">
      {columns.map((col) => (
        <div
          key={col.id}
          className="w-80 bg-gray-100 rounded-lg p-4 flex flex-col gap-3"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, col.id)}
        >
          <h2 className="font-bold text-gray-700 uppercase text-sm">{col.label}</h2>
          {tasks
            .filter((t) => t.status === col.id)
            .map((task) => (
              <div
                key={task.id}
                draggable
                onDragStart={(e) => handleDragStart(e, task.id)}
                onClick={() => setSelectedTask(task)}
                className="bg-white p-4 rounded shadow cursor-pointer hover:shadow-md transition-shadow border-l-4 border-blue-500"
              >
                <h3 className="font-medium text-gray-900">{task.title}</h3>
              </div>
            ))}
        </div>
      ))}

      {selectedTask && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-xl">
            <h2 className="text-xl font-bold mb-4">{selectedTask.title}</h2>
            <p className="text-gray-600 mb-6">{selectedTask.description}</p>
            <button
              onClick={() => setSelectedTask(null)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
