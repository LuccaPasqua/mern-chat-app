import { createContext, useContext, useState } from 'react'

//CREATE CONTEXT
export const AuthContext = createContext();

//THIS IS FOR US TO BE ABLE TO CONSUME THE CONTEXT
// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
   return useContext(AuthContext)
}

//CREATE CONTEXT PROVIDER
export function AuthContextProvider({ children }){
   const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null)
   
   return (
      <AuthContext.Provider value={{authUser, setAuthUser}}>
         {children}
      </AuthContext.Provider>
   )
}