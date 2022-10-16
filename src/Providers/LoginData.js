import { createContext, useState } from "react";

const LoginContext = createContext();

function LoginProvider({children}){
    const [user, setUser] = useState({
        username: '',
        password: '',
        loginState: false,
    })

    return(
        <LoginContext.Provider value={{user, setUser}}>
            {children}
        </LoginContext.Provider>
    )
}

export {LoginContext, LoginProvider}