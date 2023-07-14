import {useContext} from "react";
import Register from "../pages/Register.jsx";
import { UserContext } from "../contex/UserContext.jsx";

import Chat from "../pages/Chat.jsx";

export default function Routes() {
  const {user} = useContext(UserContext);

  if (user) {
    return <Chat />;
  }

  return (
    <Register />
  );
}
