import { useEffect, useState } from 'react';
import Login from './components/Login'
import Home from './components/Home'
import axios from "axios";

function App() {

  const [user, setUser] = useState(null)
useEffect(() => {
    const datos = JSON.parse(localStorage.getItem("user"))
    if(datos)
    {
      const baseUrl =
        "http://localhost:3000/api/v1/cfdi";
    const token = datos.token
    const headers = `Bearer ${token}`;
    function checkToken(){
      axios
        .get(baseUrl, {
          headers: { Authorization: headers },
        })
        .then(() => setUser(datos))
        .catch((err) => {
          localStorage.clear();
          console.log(err);
        });
    }
      checkToken();

    } else(console.log('no entro al if'))
  }, [])

  return (
    <>
    {user?<Home userData={user} />:<Login/>}
  </>
  );
}

export default App;
