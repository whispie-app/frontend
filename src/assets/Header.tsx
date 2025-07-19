import "../styles/fonts.css";

function Header() {
  return (
    <header className="w-50% bg-indigo-700 dark:bg-gray-900 py-4 shadow">
      <div className="flex justify-around items-center max-w-6xl mx-auto">
        <div className="flex align-middle justify-center text-center g-4 items-center">
          <p className="text-3xl font-extrabold text-white text-center tracking-tight font-family-roboto">
            Whispie
          </p>
        </div>
        <h1 className="text-white font-bold p-1.5 font-family-roboto">Home</h1>
        <button className="bg-indigo-400 hover:not-focus:bg-indigo-600 font-extrabold rounded-2xl p-1.5 font-family-roboto">
          <a href="" className="font-extrabold text-white">
            Download
          </a>
        </button>
      </div>
    </header>
  );
}

export default Header;
