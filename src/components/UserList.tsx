import { User } from "lucide-react";

interface ChannelUser {
  id: string;
  name: string;
  isActive: boolean;
  isSpeaking?: boolean;
}

interface UserListProps {
  users: ChannelUser[];
}

export function UserList({ users }: UserListProps) {
  return (
    <div className="space-y-2">
      {users.map((user) => (
        <div
          key={user.id}
          className={`flex items-center gap-2 p-2 ${
            user.isActive ? "bg-[#1d1d1d]" : "bg-[#161616]"
          } rounded-lg transition-colors`}
        >
          <User
            size={20}
            className={`${
              user.isSpeaking ? "text-[#7b1926]" : "text-gray-400"
            }`}
          />
          <span className="text-gray-300">{user.name}</span>
          {user.isSpeaking && (
            <span className="ml-auto w-2 h-2 bg-[#7b1926] rounded-full animate-pulse" />
          )}
        </div>
      ))}
    </div>
  );
}
