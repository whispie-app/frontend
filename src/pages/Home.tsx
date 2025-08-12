import Header from "../components/Header";
import Footer from "../components/Footer";
import "../components/styles/main.css";
import { motion } from "framer-motion";
import { Mic, MessageCircle, Users } from "lucide-react";

// Animation defaults
const fadeInUp = (delay = 0, duration = 0.6) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration, delay },
});

// Data: Features
const features = [
  {
    icon: <Users size={24} aria-hidden="true" />,
    title: "Private channels",
    desc: "Create invite-only channels to control who joins.",
  },
  {
    icon: <Mic size={24} aria-hidden="true" />,
    title: "Optimized audio",
    desc: "Efficient codec and echo cancellation for clear conversations even on slow connections.",
  },
  {
    icon: <MessageCircle size={24} aria-hidden="true" />,
    title: "Quick messages",
    desc: "Send text and links without interrupting the conversation.",
  },
];

const steps = [
  "Ask for microphone permission — this is done by the browser.",
  "Create or join a room. Audio is routed with low latency.",
  "Adjust volume or mute whenever you want — simple and quick controls.",
];

function Button({ href, label, icon, color = "gray", external = false }) {
  const colors = {
    red: "bg-[#7b1926] hover:bg-[#530101]",
    gray: "bg-[#24292F] hover:bg-[#1d1f23]",
  };
  return (
    <a
      href={href}
      aria-label={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`flex gap-2 w-50 justify-center text-white ${colors[color]} px-5 py-3 rounded-lg font-medium shadow-md transition-transform duration-200 hover:scale-105`}
    >
      {icon}
      {label}
    </a>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <motion.div
      {...fadeInUp(0.1, 0.5)}
      className="flex flex-col items-center gap-3 p-4 rounded-lg bg-transparent"
      aria-labelledby={`feature-${title}`}
    >
      <div
        className="w-12 h-12 rounded-md bg-gradient-to-b from-[#363636] to-[#161616] flex items-center justify-center"
        aria-hidden="true"
      >
        {icon}
      </div>
      <h4 id={`feature-${title}`} className="font-semibold">
        {title}
      </h4>
      <p className="text-sm text-gray-400 text-center">{desc}</p>
    </motion.div>
  );
}

function HowItWorks() {
  return (
    <motion.section
      id="how"
      {...fadeInUp(0.3)}
      className="mt-12 text-left bg-gradient-to-b from-[#161616] to-[#111111] border border-[#222222] rounded-2xl p-6 font-[Roboto]"
    >
      <h3 className="text-xl font-semibold text-white">How it works</h3>
      <ol className="mt-4 space-y-3 text-gray-300">
        {steps.map((step, i) => (
          <motion.li
            key={i}
            className="flex gap-3 items-start"
            {...fadeInUp(0.4 + i * 0.1, 0.4)}
          >
            <span className="font-medium text-white">{i + 1}.</span>
            {step}
          </motion.li>
        ))}
      </ol>
    </motion.section>
  );
}

// Home page
function Home() {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center pt-5 pb-10 bg-[#161616] min-h-screen">
        <div className="bg-gradient-to-b from-[#161616] to-[#111111] max-w-5xl rounded-2xl px-2 py- border border-[#222222]">
          <main className="max-w-4xl mx-auto px-8 py-10 text-center">
            {/* Title */}
            <motion.section
              {...fadeInUp(0.1, 0.7)}
              aria-labelledby="title-section"
            >
              <h2
                id="title-section"
                className="text-3xl font-bold tracking-tighter secFont text-[#7b1926] sm:text-5xl leading-tight"
              >
                In real time. No hassle.
              </h2>
              <p className="mt-4 text-gray-300 font-[Roboto] max-w-5xl mx-auto">
                Connect with friends, teams, and communities via voice — low
                latency, clean interface, privacy first.
              </p>
            </motion.section>

            {/* Buttons */}
            <motion.div
              className="mt-8 flex items-center justify-center font-[Roboto] gap-6"
              {...fadeInUp(0.2, 0.6)}
            >
              <Button
                href="#"
                label="Join a channel"
                icon={<Mic size={18} aria-hidden="true" />}
                color="red"
              />
              <Button
                href="#"
                label="Create room"
                icon={<Users size={18} aria-hidden="true" />}
                color="gray"
              />
            </motion.div>

            {/* Features */}
            <motion.section
              id="features"
              className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-white font-[Roboto]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {features.map((f, i) => (
                <Feature key={i} {...f} />
              ))}
            </motion.section>

            <HowItWorks />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
