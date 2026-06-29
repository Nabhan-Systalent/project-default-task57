'use client';

import React from 'react';
import { ProjectListProps } from './ProjectList.types';

export const ProjectList: React.FC<ProjectListProps> = ({ 
  projects, 
  isLoading, 
  error,
  onDelete 
}) => {
  if (isLoading) {
    return (
      <div className="w-full space-y-4 animate-pulse">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-20 bg-gray-200 rounded-lg" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-red-600 bg-red-50 rounded-md border border-red-200">
        Error loading projects: {error}
      </div>
    );
  }

  if (!projects || projects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center border-2 border-dashed border-gray-300 rounded-lg">
        <p className="text-gray-500">No projects found. Create your first project to get started.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {projects.map((project) => (
        <div 
          key={project.id} 
          className="flex items-center justify-between p-6 bg-white border border-gray-200 rounded-lg hover:shadow-sm transition-shadow"
        >
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{project.description}</p>
            <div className="flex gap-4 mt-3 text-xs text-gray-400">
              <span>Members: {project.memberCount}</span>
              <span>Updated: {project.lastUpdated}</span>
            </div>
          </div>
          <div className="flex gap-2">
            <span className={`px-2 py-1 text-xs font-medium rounded-full capitalize 
              ${project.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
              {project.status}
            </span>
            {onDelete && (
              <button 
                onClick={() => onDelete(project.id)}
                className="text-gray-400 hover:text-red-600 transition-colors p-2"
              >
                Delete
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
