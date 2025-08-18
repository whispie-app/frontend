import { Mic, MessageCircle, Users } from "lucide-react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/Button";
import { Feature } from "../components/Feature";
import { HowItWorks } from "../components/HowItWorks";
import "../components/styles/main.css";

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

function Home() {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center pt-5 pb-10 bg-[#161616] min-h-screen">
        <div className="bg-gradient-to-b from-[#161616] to-[#111111] max-w-5xl rounded-2xl px-2 py- border border-[#222222]">
          <main className="max-w-4xl mx-auto px-8 py-10 text-center">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
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

            <motion.div
              className="mt-8 flex items-center justify-center font-[Roboto] gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button as="a" href="#" variant="primary">
                <Mic size={18} aria-hidden="true" />
                Join a channel
              </Button>
              <Button as="a" href="#" variant="secondary">
                <Users size={18} aria-hidden="true" />
                Create room
              </Button>
            </motion.div>

            <motion.section
              id="features"
              className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-white font-[Roboto]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {features.map((feature, index) => (
                <Feature key={index} {...feature} />
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
