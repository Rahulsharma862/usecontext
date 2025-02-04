import { useContext } from "react"

import UserContext from "../contexts/UserContext"

const Login = () => {

    const {user} = useContext(UserContext)
    
    if (!user) return <div>please login</div>

    return <div>Welcome {user.username}</div>


  
}

export default Login