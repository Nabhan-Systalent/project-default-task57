export interface Member {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'editor' | 'viewer';
  avatarUrl?: string;
}

export interface MemberListProps {
  members: Member[];
  onRemoveMember: (memberId: string) => void;
  onUpdateRole: (memberId: string, newRole: Member['role']) => void;
  isLoading?: boolean;
  error?: string | null;
}
