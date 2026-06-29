'use client';

import React, { useState } from 'react';
import { WorkspaceSettingsProps } from './WorkspaceSettings.types';
import { MemberList } from '../MemberList';
import { Member } from '../MemberList/MemberList.types';

export const WorkspaceSettings: React.FC<WorkspaceSettingsProps> = ({ workspaceName }) => {
  const [members, setMembers] = useState<Member[]>([
    { id: '1', name: 'Alice Smith', email: 'alice@example.com', role: 'admin' },
    { id: '2', name: 'Bob Jones', email: 'bob@example.com', role: 'editor' },
  ]);

  const handleRemoveMember = (id: string) => {
    setMembers((prev) => prev.filter((m) => m.id !== id));
  };

  const handleUpdateRole = (id: string, role: Member['role']) => {
    setMembers((prev) =>
      prev.map((m) => (m.id === id ? { ...m, role } : m))
    );
  };

  return (
    <div className="space-y-8 p-6">
      <header>
        <h1 className="text-2xl font-bold text-gray-900">{workspaceName} Settings</h1>
        <p className="text-gray-600">Manage your workspace access and permissions.</p>
      </header>

      <section>
        <h2 className="text-lg font-semibold mb-4">Workspace Members</h2>
        <MemberList
          members={members}
          onRemoveMember={handleRemoveMember}
          onUpdateRole={handleUpdateRole}
        />
      </section>
    </div>
  );
};
