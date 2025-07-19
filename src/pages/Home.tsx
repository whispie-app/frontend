import Header from "../components/Header";

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-100 via-white to-indigo-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10 flex flex-col items-center w-full max-w-2xl">
          <h1 className="text-5xl font-extrabold text-indigo-700 dark:text-indigo-300 mb-4 tracking-tight">
            Bem-vindo ao Whispie!
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center">
            Converse por voz em salas privadas ou públicas.
            <br />
            Crie uma sala, convide amigos e comece a falar!
          </p>
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-colors">
              Criar Sala
            </button>
            <button className="bg-white dark:bg-gray-700 border border-indigo-600 dark:border-indigo-400 text-indigo-700 dark:text-indigo-300 font-semibold py-3 px-8 rounded-full shadow transition-colors">
              Entrar em Sala
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
