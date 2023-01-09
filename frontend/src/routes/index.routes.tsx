import { Routes as Switch, Route } from "react-router-dom";
import { Main, Product, User } from "../pages/index";

export function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Main />} />
      <Route path="/product" element={<Product />} />
      <Route path="/user" element={<User />} />
    </Switch>
  );
}
