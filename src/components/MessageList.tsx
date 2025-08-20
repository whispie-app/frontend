import { motion } from "framer-motion";

interface Message {
  id: string;
  user: string;
  content: string;
  timestamp: Date;
}

interface MessageListProps {
  messages: Message[];
}

export function MessageList({ messages }: MessageListProps) {
  return (
    <div className="space-y-4">
      {messages.map((message, index) => (
        <motion.div
          key={message.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="bg-[#1d1d1d] p-3 rounded-lg"
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="font-medium text-[#7b1926]">{message.user}</span>
            <span className="text-xs text-gray-500">
              {message.timestamp.toLocaleTimeString()}
            </span>
          </div>
          <p className="text-gray-300">{message.content}</p>
        </motion.div>
      ))}
    </div>
  );
}
