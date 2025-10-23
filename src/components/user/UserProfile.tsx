import { useQuery } from "@apollo/client/react";
import { GET_USER } from "@/queries";
import type { UserData } from "@/types";
import UserCard from "./UserCard";
import StatsContainer from "./StatsContainer";

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

  const {
    avatarUrl,
    name,
    bio,
    url,
    repositories,
    followers,
    following,
    gists,
  } = data.user;

  return (
    <div>
      <UserCard avatarUrl={avatarUrl} name={name} bio={bio} url={url} />
      <StatsContainer
        totalRepos={repositories.totalCount}
        followers={followers.totalCount}
        following={following.totalCount}
        gists={gists.totalCount}
      />
    </div>
  );
}
