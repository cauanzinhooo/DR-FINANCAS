import axios from "axios";

interface ApiClientConfig {
  baseURL: string;
  token?: string;
}

export function createApiClient({ baseURL, token }: ApiClientConfig) {
  const instance = axios.create({
    baseURL,
    headers: {
      ...(token && { Authorization: `${token}` }),
      "Content-Type": "application/json",
    },
    validateStatus: (status) => status < 500,
  });

  return instance;
}
