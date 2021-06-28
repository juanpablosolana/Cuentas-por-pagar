import React from 'react'
import axios from 'axios';

const FetchFiles = ({token}) =>{
// axios.defaults.headers.post["Authorization"] = `Bearer ${token}`;
const headers = `Bearer ${token}`;

 axios
   .get("http://localhost:3000/api/v1/cfdi", {
     headers: { Authorization: headers },
   })
   .then(({data}) => console.log(data))
   .catch((err) => {
     console.log(err);
   });

  return(
    <div>
      Fetch
    </div>
  )
}
export default FetchFiles