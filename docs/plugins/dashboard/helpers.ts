import axios from "axios";

const BASE_URL = `https://gitlab.skypicker.com/api/graphql/`;

export async function request<T>(query: string, vars?: Record<string, string | number | string[]>) {
  const { data } = await axios.post<T>(
    BASE_URL,
    {
      query,
      variables: vars,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GITLAB_TOKEN}`,
      },
    },
  );

  return data;
}
