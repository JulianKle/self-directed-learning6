import { formatDate } from "../lib/utils";

export default function UserCard({ user }) {
  return (
    <>
      <small>ID: {user.id}</small>

      <h2>
        {user.lastName}, {user.firstName}
      </h2>
      <p>
        {" "}
        email: {user.email}, created: {formatDate(user.createdAt)}
      </p>
    </>
  );
}
