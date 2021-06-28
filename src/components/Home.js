import React from 'react'
import Dropzone from './Drop'
import FetchFiles from './FetchFiles';
// import Logout from "../services/login"
import './home.css';

const Home = ({userData})=>{
//  const {token, username} = JSON.parse(user)
console.log(userData)
  return (
    <>
      <div>
        <p className="uppercase">Hola {userData.username}</p>
      </div>
      <div className="content">
        <Dropzone token={userData.token} />
        <FetchFiles token={userData.token}/>
      </div>
    </>
  );
}
export default Home