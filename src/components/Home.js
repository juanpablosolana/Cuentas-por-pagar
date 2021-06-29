import React from 'react'
import AdminNav from './AdminNav'
// import LeftNav from './LeftNav';
import Dropzone from './Drop'
import FetchFiles from './FetchFiles';
// import Logout from "../services/login"
import './home.css';

const Home = ({userData})=>{
//  const {token, username} = JSON.parse(user)
// console.log(userData)
  return (
    <>
      <AdminNav user={userData.username} />
      <div class="flex flex-row h-full">
        <nav class="bg-gray-900 w-20  justify-between flex flex-col ">
          <div class="mt-10 mb-10">
              <ul>
                <li class="mb-6">
                  <a href="#">
                    <span>
                      <svg
                        class="fill-current h-5 w-5 text-gray-300 mx-auto hover:text-green-500 "
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14 3V3.28988C16.8915 4.15043 19 6.82898 19 10V17H20V19H4V17H5V10C5 6.82898 7.10851 4.15043 10 3.28988V3C10 1.89543 10.8954 1 12 1C13.1046 1 14 1.89543 14 3ZM7 17H17V10C17 7.23858 14.7614 5 12 5C9.23858 5 7 7.23858 7 10V17ZM14 21V20H10V21C10 22.1046 10.8954 23 12 23C13.1046 23 14 22.1046 14 21Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </a>
                </li>
                <li class="mb-6">
                  <a href="#">
                    <span>
                      <svg
                        class="fill-current h-5 w-5 mx-auto text-gray-300 hover:text-green-500"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0
                          014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4
                          8-4z"
                        ></path>
                      </svg>
                    </span>
                  </a>
                </li>
                <li class="mb-6">
                  <a href="#">
                    <span>
                      <svg
                        class="fill-current h-5 w-5 text-gray-300 mx-auto hover:text-green-500"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 13H7v5h5v2H5V10h2v1h5v2M8
                          4v2H4V4h4m2-2H2v6h8V2m10 9v2h-4v-2h4m2-2h-8v6h8V9m-2
                          9v2h-4v-2h4m2-2h-8v6h8v-6z"
                        ></path>
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <svg
                        class="fill-current h-5 w-5 text-gray-300 mx-auto hover:text-green-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M22.775 8C22.9242 8.65461 23 9.32542 23 10H14V1C14.6746 1 15.3454 1.07584 16 1.22504C16.4923 1.33724 16.9754 1.49094 17.4442 1.68508C18.5361 2.13738 19.5282 2.80031 20.364 3.63604C21.1997 4.47177 21.8626 5.46392 22.3149 6.55585C22.5091 7.02455 22.6628 7.5077 22.775 8ZM20.7082 8C20.6397 7.77018 20.5593 7.54361 20.4672 7.32122C20.1154 6.47194 19.5998 5.70026 18.9497 5.05025C18.2997 4.40024 17.5281 3.88463 16.6788 3.53284C16.4564 3.44073 16.2298 3.36031 16 3.2918V8H20.7082Z"
                          fill="currentColor"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1 14C1 9.02944 5.02944 5 10 5C10.6746 5 11.3454 5.07584 12 5.22504V12H18.775C18.9242 12.6546 19 13.3254 19 14C19 18.9706 14.9706 23 10 23C5.02944 23 1 18.9706 1 14ZM16.8035 14H10V7.19648C6.24252 7.19648 3.19648 10.2425 3.19648 14C3.19648 17.7575 6.24252 20.8035 10 20.8035C13.7575 20.8035 16.8035 17.7575 16.8035 14Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </a>
                </li>
              </ul>
          </div>
        </nav>
        <div class="px-16 py-4 text-gray-700 bg-gray-200 h-screen w-screen">
          <div className="content">
            <Dropzone token={userData.token} />
            {/* <FetchFiles token={userData.token} /> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default Home