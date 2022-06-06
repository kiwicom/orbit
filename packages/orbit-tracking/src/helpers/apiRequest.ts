import { $, fetch } from "zx";

import { BASE_URL } from "../consts";
import { errorMessage } from "./message";

export default function apiRequest<T>(
  query: string,
  vars?: Record<string, string | number | string[]>,
): Promise<void | T> {
  $.verbose = false;
  return fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GITLAB_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables: vars,
    }),
  })
    .then(res => res.json())
    .then(data => data as T)
    .catch(err => errorMessage(err));
}
