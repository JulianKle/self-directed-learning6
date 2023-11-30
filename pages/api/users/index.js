import { users } from "@/db/data";

export default async function handler(request, response) {
  return response.status(200).json(users);
}
