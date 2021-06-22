import { useEffect, useState } from 'react';
import Login from './components/Login'
import Home from './components/Home'

function App() {
  const [user, setUser] = useState(null)
useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("user"))
    if(data)
    {
    console.log(data)
    setUser(data)
    } else(console.log('no entro al if'))
  }, [])

  return (
    <>
    {user?<Home userData={user} />:<Login/>}
  </>
  );
}

export default App;
