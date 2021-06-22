import React from 'react'
import Dropzone from './Drop'
// import Logout from "../services/login"

const Home = ({userData})=>{
//  const {token, username} = JSON.parse(user)
// console.log(userData.username)
  return(
    <>

    <div>
      <p className="uppercase">Hola {userData.username}</p>
      </div>
      <div>
        <Dropzone/>
      </div>

    </>
  )
}
export default Home