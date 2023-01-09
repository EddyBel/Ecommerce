export type API_PRODUCT = {
  brand: string;
  date: string;
  description: string;
  link_imagen: string;
  name: string;
  price: string;
  rating: string;
  views: string;
};

export type API_PRODUCTS_BODY = {
  counter: number;
  products: API_PRODUCT[];
};

export type API_PRODUCT_RESPONSE = {
  msg: string;
  body: API_PRODUCTS_BODY;
};
