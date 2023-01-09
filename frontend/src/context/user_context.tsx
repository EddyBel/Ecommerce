import { createContext, useState, useEffect } from "react";
import { getUser } from "../service/user.api";

type UserContextProps = {
  name: string;
  lastName: string;
  userName: string;
  front: string;
  background: string;
  products: any[];
};

export const UserContext = createContext<UserContextProps>({
  name: "",
  lastName: "",
  userName: "",
  front: "",
  background: "",
  products: [],
});

export function UserProvider(props: any) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [front, setFront] = useState("");
  const [background, setBackground] = useState("");

  useEffect(() => {
    getUser().then((response) => {
      let body = response.body;

      setName(body.name);
      setLastName(body.last__name);
      setUserName(body.user__name);
      setFront(body.front);
      setBackground(body.background);
    });
  }, []);

  const values = {
    name: name,
    lastName: lastName,
    userName: userName,
    front: front,
    background: background,
    products: [],
  };

  return (
    <UserContext.Provider value={values}>{props.children}</UserContext.Provider>
  );
}
