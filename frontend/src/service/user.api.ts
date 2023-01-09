import { API } from "../web.config";
import { API_USER } from "../types/api_user.api";

export const getUser = (): Promise<API_USER> =>
  fetch(`${API}/user`)
    .then((response) => response.json())
    .then((response) => response);
