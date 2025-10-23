import StatsCard from "./StatsCard";

type StatusContainerProps = {
    totalRepos: number;
    followers: number;
    following: number;
    gists: number;
}

export default function StatsContainer({totalRepos, followers, following, gists}: StatusContainerProps) {
  return (
    <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-4 gap-2 mb-8">
        <StatsCard title="Total Repositories" count={totalRepos} />
        <StatsCard title="Followers" count={followers} />
        <StatsCard title="Following" count={following} />
        <StatsCard title="Gists" count={gists} />
    </div>
  )
}