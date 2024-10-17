import React from "react";

function EntryPage() {
  return (
    <main className="grid w-full place-items-center bg-purple-700 px-6 py-24 sm:py-32 lg:px-8">
      <div className="p-10 text-center w-full bg-white rounded-lg shadow dark:border md:mt-0  sm:p-8 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-start items-center gap-5 p-2 rounded-3xl border-double border-4 border-indigo-600">
          <h1>Catégorie</h1>
        </div>

        <div className=" flex justify-end items-center gap-5 p-8">
          <button className=" hover:text-green-700"> Ajouter</button>
          <button className=" hover:text-yellow-200">Modifier</button>
          <button className=" hover:text-red-700">Supprimer</button>
        </div>

        <div className="border-solid border-2 mt-3">
          <div></div>
        </div>
      </div>
    </main>
  );
}

export default EntryPage;
