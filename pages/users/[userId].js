import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";
import UserCard from "@/components/UserCard";


const fetcher = (url) => fetch(url).then((res) => res.json());

export default function User() {
  const router = useRouter();
  const { userId } = router.query;

  const { data, isLoading } = useSWR(`/api/users/${userId}`, fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  console.log(data)

  return (
    <>
      <UserCard user={data} />
      <Link href="/">Back to all</Link>
    </>
  );
}