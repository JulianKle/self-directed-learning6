import useSWR from "swr";
import UserCard from "./UserCard";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

export function UserList() {
  const { data, isLoading } = useSWR("/api/users", fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <ul>
        {data.map((user) => (
          <UserCard key={`user-${user.id}`} user={user} />
        ))}
      </ul>
    </>
  );
}
