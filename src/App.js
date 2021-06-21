import { useEffect, useState } from 'react';
import Login from './components/Login'
import Home from './components/Home'

function App() {
  const [user, setUser] = useState(null)
useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"))
    if(data)
    {
      // console.log(data)
    setUser(data)
    }

  }, [])

  return (
    <>
    {user?<Home userData={user} />:<Login/>}
  </>
  );
}

export default App;
