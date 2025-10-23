import {useQuery} from "@apollo/client/react";
import { GET_USER } from "@/queries";
import type { UserData } from "@/types";


type UserProfileProps = {
  userName: string;
};

export default function UserProfile({ userName }: UserProfileProps) {
  const { data, loading, error } = useQuery<UserData>(GET_USER, {
    variables: { login: userName },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <h2 className="text-xl">[Error]: {error.message}</h2>;
  if (!data?.user) return <h2 className="text-xl">User not found</h2>;

  const {avatarUrl, name, bio, url, repositories, followers, following, gists} = data.user;

  return (
    <div>
      <h1 className="text-2xl font-bold">{name || userName}</h1>
      <img src={avatarUrl} alt={name} className="w-20 h-20 rounded-full" />
      <p className="text-2xl font-bold">{bio}</p>
    </div>
  );
}
