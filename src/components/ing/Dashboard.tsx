import { useCallback, useMemo, useState } from "react";
import { Search } from "lucide-react";
import UserCard from "./UserCard";

export default function Dashboard() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "김철수",
      email: "kim@example.com",
      followers: 100,
      posts: 10,
      isFollowing: false,
    },
    {
      id: 2,
      name: "이영희",
      email: "lee@example.com",
      followers: 50,
      posts: 20,
      isFollowing: false,
    },
    {
      id: 3,
      name: "박지민",
      email: "park@example.com",
      followers: 200,
      posts: 5,
      isFollowing: false,
    },
    {
      id: 4,
      name: "정민수",
      email: "jung@example.com",
      followers: 120,
      posts: 40,
      isFollowing: false,
    },
  ]);

  const totalUsers = users.length;
  const totalFollowers = users.reduce((sum, user) => sum + user.followers, 0);
  const totalPosts = users.reduce((sum, user) => sum + user.posts, 0);
  const avgFollowers = totalFollowers / totalUsers;

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("followers");

  const searchUser = useMemo(
    () =>
      users
        .filter((user) => user.name.includes(search))
        .sort((a, b) =>
          sort === "followers" ? b.followers - a.followers : b.posts - a.posts,
        ),
    [users, search, sort], // 의존성 배열에 뭘 넣는게 어려웠음
  );

  const handleFollow = useCallback(
    (id: number) => {
      const nextUsers = users.map((user) => {
        if (user.id === id) {
          return {
            ...user,
            isFollowing: !user.isFollowing,
            followers: user.isFollowing
              ? user.followers - 1
              : user.followers + 1,
          };
        }
        return user;
      });

      setUsers(nextUsers);
    },
    [users],
  );

  //   const handleFollow = (id: number) => {
  //     const nextUsers = users.map((user) => {
  //       if (user.id === id) {
  //         return {
  //           ...user,
  //           isFollowing: !user.isFollowing,
  //           followers: user.isFollowing ? user.followers - 1 : user.followers + 1,
  //         };
  //       }
  //       return user;
  //     });

  //     setUsers(nextUsers);
  //   };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">사용자 대시보드</h1>

      {/* 통계 섹션 */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-blue-50 rounded-lg">
          <h3 className="text-sm text-gray-500">전체 사용자</h3>
          <p className="text-2xl font-bold">{totalUsers}명</p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <h3 className="text-sm text-gray-500">총 팔로워</h3>
          <p className="text-2xl font-bold">{totalFollowers}명</p>
        </div>
        <div className="p-4 bg-yellow-50 rounded-lg">
          <h3 className="text-sm text-gray-500">총 게시물</h3>
          <p className="text-2xl font-bold">{totalPosts}개</p>
        </div>
        <div className="p-4 bg-purple-50 rounded-lg">
          <h3 className="text-sm text-gray-500">평균 팔로워</h3>
          <p className="text-2xl font-bold">{avgFollowers}명</p>
        </div>
      </div>

      {/* 검색 및 정렬 컨트롤 */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
            placeholder="사용자 검색..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
          />
        </div>
        <select
          onChange={(e) => setSort(e.target.value)}
          className="px-4 py-2 border rounded-lg bg-white"
        >
          <option value="followers">팔로워순</option>
          <option value="posts">게시물순</option>
        </select>
      </div>

      {/* 사용자 목록 */}
      <div className="grid grid-cols-2 gap-4">
        {searchUser.map((user) => {
          return (
            <UserCard key={user.id} user={user} handleFollow={handleFollow} />
          );
        })}
      </div>
    </div>
  );
}
