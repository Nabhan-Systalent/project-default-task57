'use client';

import React from 'react';
import { MemberListProps } from './MemberList.types';

export const MemberList: React.FC<MemberListProps> = ({
  members,
  onRemoveMember,
  onUpdateRole,
  isLoading = false,
  error = null,
}) => {
  if (isLoading) {
    return <div className="p-4 text-center">Loading members...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-red-500">Error: {error}</div>;
  }

  if (members.length === 0) {
    return <div className="p-4 text-center text-gray-500">No members found.</div>;
  }

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <table className="w-full text-left text-sm">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700">
          <tr>
            <th className="px-6 py-3">Member</th>
            <th className="px-6 py-3">Role</th>
            <th className="px-6 py-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {members.map((member) => (
            <tr key={member.id} className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center font-medium">
                    {member.name[0]}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{member.name}</div>
                    <div className="text-gray-500">{member.email}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <select
                  value={member.role}
                  onChange={(e) => onUpdateRole(member.id, e.target.value as any)}
                  className="rounded border-gray-300 py-1 pl-2 pr-8 text-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="admin">Admin</option>
                  <option value="editor">Editor</option>
                  <option value="viewer">Viewer</option>
                </select>
              </td>
              <td className="px-6 py-4 text-right">
                <button
                  onClick={() => onRemoveMember(member.id)}
                  className="text-red-600 hover:text-red-800 font-medium"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
