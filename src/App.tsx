import Header from "./assets/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="h-w w-full p-10 flex flex-col items-center justify-center bg-gradient-to-br from-indigo-200 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="bg-white dark:bg-gray-700 rounded-xl shadow-2xl p-50 flex flex-col items-center">
          <h1 className="text-5xl font-extrabold text-indigo-200 dark:text-indigo-300 tracking-tight top-0 mb-5">
            Whispie
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 mb-4 text-center">
            A simple and secure chat app
          </p>
          <div className="grid grid-cols-1 gap-1">
            <input
              type="text"
              placeholder="Username"
              className="border w-100 bg-sky-200/50 border-gray-300 dark:border-gray-700 rounded-3xl text-center p-4 mt-2"
            />
            <input
              type="password"
              placeholder="Password"
              className="border bg-sky-200/50 border-gray-300 dark:border-gray-700 rounded-3xl text-center p-4 mt-2"
            ></input>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 mb-4 text-center">
              or{" "}
              <a
                href="#"
                className="text-indigo-600 dark:text-indigo-400 justify-center text-center"
              >
                create an account
              </a>
            </p>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center"></p>
          <button className="bg-indigo-900 hover:bg-indigo-700 text-white font-semibold py-2 px-8 rounded-full shadow-lg transition-colors">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
