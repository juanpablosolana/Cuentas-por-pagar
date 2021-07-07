import React,{useEffect,useState} from 'react'
import axios from 'axios'
function useCfdi(token){
  const headers = `Bearer ${token}`;
  const [cfdi, setCfdi] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/cfdi", {
        headers: { Authorization: headers },
      })
      .then(response => { setCfdi(response.data) })
      .catch((err) => {
        console.log(err);
      });

  }, [])

  return cfdi
}

const Render = ({ token })=>{

    const files=useCfdi({token})
  return(
    {files.map(item => (

      ))
    }
  )
  }


export default Render;