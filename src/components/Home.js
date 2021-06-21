import React from 'react'
// import Logout from "../services/login"

const Home = ({userData})=>{
//  const {token, username} = JSON.parse(user)
// console.log(userData.username)
  return(
    <div>
      Hola <br>
      </br>
      {userData.username}
      <br>
      </br>
      {userData.token}

    </div>
  )
}
export default Home