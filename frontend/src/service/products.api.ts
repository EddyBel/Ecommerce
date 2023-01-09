import { API } from "../web.config";
import { API_PRODUCT_RESPONSE } from "../types/api_products.api";

export const getAllProducts = () =>
  fetch(`${API}/products/all`)
    .then((response) => response.json())
    .then((response) => response);

export const getRandomProducts = (
  number_products: number
): Promise<API_PRODUCT_RESPONSE> =>
  fetch(`${API}/products/random/${number_products}`)
    .then((response) => response.json())
    .then((response) => response);
