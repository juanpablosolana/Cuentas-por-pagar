import React from 'react'

const adminNav=({user})=>{
  // console.log(user)
  // return <p classNameName="uppercase">{`Hola ${user}`} </p>;}

return (
  <div className="relative bg-white">
    <div className="px-4 mx-auto max-w-7xl sm:px-6">
      <div className="flex items-center justify-between py-6 border-b-2 border-gray-100 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <span className="sr-only">Workflow</span>
          <img
            className="w-auto h-8 sm:h-10"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt=""
          />
        </div>

        <nav className="hidden space-x-10 md:flex">
          <a
            href="#"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Docs
          </a>
        </nav>
        <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
          <p>{`Hola ${user}`} </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-yellow-700 border border-transparent rounded-md shadow-sm whitespace-nowrap hover:bg-yellow-800"
          >
            Cerrar sesión
          </a>
        </div>
      </div>
    </div>
  </div>
);}

export default adminNav