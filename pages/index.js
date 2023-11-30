import Head from "next/head";
import Image from "next/image";
import { UserList } from "@/components/UserList";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href={"/users"}>Users Overview</Link>
    </>
  );
}
