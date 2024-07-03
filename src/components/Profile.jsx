import  { useContext , useState } from 'react'
import UserContext from '../contexts/UserContext';


const Profile = () => {

    
const [username, setusername] = useState('');
const [password, setpassword] = useState('')

const {setUser} = useContext(UserContext);

const handleSubmit = (e)=>{
e.preventDefault();
setUser({username,password})
}
  return (




    <>
        <h2>Login</h2>

     <input type="text"
     placeholder='Enter Your Name'
     value={username}
     onChange={ (e)=>setusername(e.target.value)}
     
     
     
     />
     {''}

     <input type="password"
     placeholder='Enter Your password'
     value={password}
     onChange={ (e)=>setpassword(e.target.value)}
     
/>

<button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Profile