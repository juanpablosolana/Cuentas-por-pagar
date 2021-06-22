import React from 'react'
import Dropzone from './Drop'
// import Logout from "../services/login"
import './home.css';

const Home = ({userData})=>{
//  const {token, username} = JSON.parse(user)
// console.log(userData.username)
  return(
    <>

    <div>
      <p className="uppercase">Hola {userData.username}</p>
      </div>
      <div className="content">
        <Dropzone/>
      </div>

    </>
  )
}
export default Home