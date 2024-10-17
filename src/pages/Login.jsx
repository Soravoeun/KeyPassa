import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:4680/user/login", {
        email,
        password,
      })
      .then((response) => {
        if (response.status === 200) {
          // const { token, firstName, isAdmin } = response.data;

          // localStorage.setItem("jwt", token);
          localStorage.setItem("firstName", firstName); // Stocker uniquement le prénom pour l'exemple
          localStorage.setItem("isAdmin", isAdmin);
          console.log("USER CONNECTED", firstName);

        }
      })

      .catch((error) => {
        console.log("error lors du login");
      });
  };

  return (
    <div>
      {/* <h1>Formulaire de conexion</h1> */}
      <section className="grid w-full place-items-center bg-purple-700 h-screen">
        <div className="  w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md sm:p-8 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <a
            href="#"
            className="flex items-center justify-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              keyPassa
            </h1>
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Login to your account
              </h1>
              <form className="space-y-4 md:space-y-6 " action="#">
                <div className="relative z-0">
                  <input
                    type="text"
                    id="User"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="User"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    User
                  </label>
                </div>

                <div className="relative z-0">
                  <input
                    type="text"
                    id="Password"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="Password"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    Password
                  </label>
                </div>

                <button
                  type="submit"
                  className=" text-white bg-purple-700 hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-600 dark:focus:ring-primary-800 "
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
