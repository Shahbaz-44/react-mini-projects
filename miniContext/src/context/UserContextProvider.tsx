import UserContext from './UserContext'
import { useState, type ReactNode } from 'react'

type User = {
  username: string;
  password: string;
};

type UserContextProviderProps = {
  children: ReactNode;
};

const UserContextProvider = ({ children }: UserContextProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    return(
         <UserContext.Provider value={{user, setUser}}>
            {children}
         </UserContext.Provider>
    )
}

export default UserContextProvider 