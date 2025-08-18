import { motion } from "framer-motion";

const steps = [
  "Ask for microphone permission — this is done by the browser.",
  "Create or join a room. Audio is routed with low latency.",
  "Adjust volume or mute whenever you want — simple and quick controls.",
];

export function HowItWorks() {
  return (
    <motion.section
      id="how"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mt-12 text-left bg-gradient-to-b from-[#161616] to-[#111111] border border-[#222222] rounded-2xl p-6 font-[Roboto]"
    >
      <h3 className="text-xl font-semibold text-white">How it works</h3>
      <ol className="mt-4 space-y-3 text-gray-300">
        {steps.map((step, i) => (
          <motion.li
            key={i}
            className="flex gap-3 items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
          >
            <span className="font-medium text-white">{i + 1}.</span>
            {step}
          </motion.li>
        ))}
      </ol>
    </motion.section>
  );
}
