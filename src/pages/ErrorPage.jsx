import React from "react";

function ErrorPage() {
  return (
    <>
      <main className="grid w-full place-items-center bg-purple-700 px-6 py-24 sm:py-32 lg:px-8">
        <div className="p-10 text-center w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md sm:p-8 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <p className="text-base font-semibold text-gray">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-purple-700 hover:bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
export default ErrorPage;
