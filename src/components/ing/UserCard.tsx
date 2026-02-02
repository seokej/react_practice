import { Users } from "lucide-react";

interface UserCard {
  user: UserData;
  handleFollow: (id: number) => void;
}

interface UserData {
  id: number;
  name: string;
  email: string;
  followers: number;
  posts: number;
  isFollowing: boolean;
}

export default function UserCard(props: UserCard) {
  const { user, handleFollow } = props;

  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
          <Users className="w-6 h-6 text-gray-500" />
        </div>
        <div>
          <h3 className="text-left font-bold">{user.name}</h3>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
      </div>

      <div className="flex justify-between text-sm text-gray-500 mb-4">
        <span>팔로워: {user.followers}명</span>
        <span>게시물: {user.posts}개</span>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => handleFollow(user.id)}
          className={`flex-1 py-2 px-4 rounded ${
            !user.isFollowing
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {user.isFollowing ? "팔로잉" : "팔로우"}
        </button>
      </div>
    </div>
  );
}
