import React, { useState } from "react"
import loginService from "../services/login"
import Notification from "./Notifications"

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(null)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState(null)

  const handleLogin = async event => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username,
        password
      })
      console.log(user.username)
      setUser(user.username)
      setUsername("")
      setPassword("")
      window.location.replace('');
    } catch(error) {
  setErrorMessage("Wrong credentials")
  setTimeout(() => {
  setErrorMessage(null)
  }, 5000)
    }
  }
  return (
    <section className="flex items-stretch min-h-screen text-white ">
      <div className="relative items-center hidden w-1/2 bg-gray-500 bg-no-repeat bg-cover lg:flex bg-login-bg">
        <div className="absolute inset-0 z-0 bg-black opacity-60"></div>
        <div className="z-10 w-full px-24">
          <h1 className="text-5xl font-bold tracking-wide text-left">
            Plataforma de control de acceso
          </h1>
          <p className="my-4 text-3xl"> </p>
        </div>
      </div>
      <div className="z-0 flex items-center justify-center w-full px-0 text-center bg-yellow-100 lg:w-1/2 md:px-16">
        <div className="absolute inset-0 z-10 items-center bg-gray-500 bg-no-repeat bg-cover lg:hidden">
          <div className="absolute inset-0 z-0 bg-black opacity-60"></div>
        </div>
        <div className="z-20 w-full py-6">
          <p className="my-4 text-3xl text-gray-600">Iniciar sesión </p>
          <form
            className="w-full px-4 mx-auto sm:w-2/3 lg:px-0"
            onSubmit={handleLogin}
          >
            <div className="pt-4 pb-2">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Nombre de usuario"
                className="block w-full p-4 text-lg bg-black rounded-sm"
                onChange={({ target }) => setUsername(target.value)}
                required
              />
            </div>
            <div className="pt-4 pb-2">
              <input
                className="block w-full p-4 text-lg bg-black rounded-sm"
                type="password"
                name="password"
                id="password"
                placeholder="Contraseña"
                onChange={({ target }) => setPassword(target.value)}
                required
              />
            </div>
            <div className="text-right text-gray-400 hover:underline hover:text-gray-600">
              <a href="#">No recuerdo mi contraseña</a>
            </div>
            <div className="px-4 pt-4 pb-2">
              <button className="block w-full p-4 text-lg uppercase bg-yellow-500 rounded-full hover:bg-yellow-600 focus:outline-none">
                Entrar
              </button>
            </div>
          </form>
          <Notification message={errorMessage} />
        </div>
      </div>
    </section>
  );
}

export default Login