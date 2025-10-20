type UserProfileProps = {
  userName: string;
};

export default function UserProfile({ userName }: UserProfileProps) {
  return <h1 className="text-2xl font-bold">{userName}</h1>;
}
