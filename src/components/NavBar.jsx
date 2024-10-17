import React from "react";

function NavBar() {
     const userFirstName = localStorage.getItem("firstName");
  return (
    // <div className="text-center max-w-screeen-xl flex flex-wrap items-center justify-between mx-auto p-4 rounded-lg shadow dark:border">
    //   <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
    //     KeyPass
    //   </h1>
    //   <RouterLink to="/login">
    //     <button
    //       type='"submit'
    //       className="w-full text-white bg-purple-700 hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    //     >
    //       Login
    //     </button>
    //   </RouterLink>
    // </div>
    <section className=" dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a
          href="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="src/assets/Capture d’écran 2024-09-19 à 11.17.42.png"
            alt="logo"
          />
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            KeyPassa
          </h1>
        </a>
        <div>
          <a
            href="/entryPage"
            className="text-lg font-bold  text-white dark:text-white hover:underline"
          >
            Home
          </a>
        </div>
        <div>
          <a
            href="/error"
            className="text-lg font-bold  text-white dark:text-white hover:underline"
          >
            ErrorPage
          </a>
        </div>
        <div>
          <a
            href="/history"
            className="text-lg font-bold  text-white dark:text-white hover:underline"
          >
            Historique
          </a>
        </div>
        <div>
          <a
            href="/register"
            className="text-lg font-bold  text-white dark:text-white hover:underline"
          >
            Connexion
          </a>
        </div>

        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          {userFirstName ? (
            <a
              href="/"
              className="text-lg font-bold  text-white dark:text-white hover:underline"
            >
              LogOut
            </a>
          ) : (
            <a
              href="/"
              className="text-sm font-bold  text-gray-900 dark:text-white hover:underline"
            >
              Login
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default NavBar;
