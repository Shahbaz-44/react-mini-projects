import { createContext } from "react";

type User = {
  username: string;
  password: string;
};

type UserContextType = {
  user: User | null;
    // setUser: (user: User | null) => void;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const UserContext = createContext<UserContextType | null>(null);

export default UserContext;