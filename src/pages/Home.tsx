import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <div className="min-h-screen flex flex-col bg-[#0d0a07]">
        <Header />
        <main className="flex flex-1 flex-col items-center justify-center px-4">
          <section className="w-full max-w-3xl bg-[#1a1817] rounded-2xl shadow-2xl px-10 py-14 flex flex-col items-center border border-[#d83018]">
            <h1 className="text-5xl font-extrabold text-[#d83018] mb-4 tracking-tight text-center">
              Whispie
            </h1>
            <p className="text-lg text-[#fdfcce] mb-8 text-center">
              Speak, connect and create your own voice rooms.
              <br />
              Fast, secure and modern voice chat for everyone.
            </p>
            <div className="grid grid-cols-2 gap-6 w-full max-w-lg mb-8">
              <button className="bg-[#d83018] hover:bg-[#f07848] text-white font-semibold py-4 px-6 rounded-xl shadow-lg transition-colors border border-[#f07848]">
                Create Room
              </button>
              <button className="bg-[#3a3232] hover:bg-[#d83018] text-[#fdfcce] font-semibold py-4 px-6 rounded-xl shadow transition-colors border border-[#d83018]">
                Join Room
              </button>
            </div>
            <div className="flex flex-row gap-4 mb-4">
              <button className="bg-[#3a3232] hover:bg-[#d83018] text-[#fdfcce] font-semibold py-2 px-6 rounded-xl shadow transition-colors border border-[#d83018]">
                Settings
              </button>
              <button className="bg-[#d83018] hover:bg-[#f07848] text-white font-semibold py-2 px-6 rounded-xl shadow transition-colors border border-[#f07848]">
                About
              </button>
              <button className="bg-[#fdfcce] hover:bg-[#c0d8d8] text-[#d83018] font-semibold py-2 px-6 rounded-xl shadow transition-colors border border-[#d83018]">
                Help
              </button>
            </div>
            <div className="mt-6 text-center text-[#c0d8d8] text-sm">
              <span>
                Your voice, your space.
                <br />
                Modern voice chat for creative people.
              </span>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
