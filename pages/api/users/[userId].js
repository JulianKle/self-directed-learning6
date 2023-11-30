import { users } from "@/db/data";

export default async function handler(request, response) {
  const { userId } = request.query;

  const user = users.find((user) => {
    return user.id === userId;
  });

  if (!user) {
    return response.status(404).json({ status: "Not Found!" });
  }

  return response.status(200).json(user);
}
