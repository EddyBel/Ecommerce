export type API_USER_BODY = {
  front: string;
  last__name: string;
  name: string;
  user__name: string;
  background: string;
  products__cart: [];
};

export type API_USER = {
  msg: string;
  body: API_USER_BODY;
};
