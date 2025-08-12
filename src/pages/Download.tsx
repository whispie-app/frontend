import Header from "../components/Header";
import Footer from "../components/Footer";

function Download() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0d0a07]">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center px-4">
        <div className="w-full max-w-2xl mx-auto py-20">
          <h1 className="text-5xl font-bold text-[#d83018] mb-4 text-left">
            Download Whispie
          </h1>
          <p className="text-lg text-[#fdfcce] mb-10 text-left">
            Choose your platform and start chatting now.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="#"
              className="flex items-center gap-4 bg-transparent border border-[#3a3232] hover:border-[#d83018] px-6 py-5 rounded-lg transition-colors"
              download
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg"
                alt="Windows"
                className="h-8 w-8"
              />
              <span className="text-[#fdfcce] font-semibold text-lg">
                Windows
              </span>
            </a>
            <a
              href="#"
              className="flex items-center gap-4 bg-transparent border border-[#3a3232] hover:border-[#d83018] px-6 py-5 rounded-lg transition-colors"
              download
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg"
                alt="Mac"
                className="h-8 w-8 color-white text-white"
              />
              <span className="text-[#fdfcce] font-semibold text-lg">Mac</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-4 bg-transparent border border-[#3a3232] hover:border-[#d83018] px-6 py-5 rounded-lg transition-colors"
              download
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                alt="Linux"
                className="h-8 w-8"
              />
              <span className="text-[#fdfcce] font-semibold text-lg">
                Linux
              </span>
            </a>
          </div>
          <div className="mt-10 text-left text-[#c0d8d8] text-sm">
            <span>
              Need help?{" "}
              <a href="#" className="underline hover:text-[#f07848]">
                Visit our FAQ
              </a>
            </span>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Download;
