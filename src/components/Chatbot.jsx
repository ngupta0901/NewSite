import React, { useState, useRef, useEffect } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! How can I help you today?" },
  ]);

  const chatRef = useRef(null);

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userText = input.trim();
    setMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setInput("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText }),
      });

      const data = await res.json();

      setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Sorry, something went wrong." },
      ]);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-indigo-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-3xl hover:bg-indigo-700 transition"
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-white shadow-xl rounded-xl border border-gray-200 flex flex-col">
          <div className="bg-indigo-600 text-white px-4 py-3 rounded-t-xl font-semibold">
            AI Assistant
          </div>

          <div className="p-4 space-y-3 overflow-y-auto h-80">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-3 rounded-lg max-w-[85%] ${
                  msg.sender === "bot"
                    ? "bg-gray-100 text-gray-800"
                    : "bg-indigo-600 text-white ml-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={chatRef}></div>
          </div>

          <div className="p-3 border-t border-gray-200 flex">
            <input
              type="text"
              className="flex-1 px-3 py-2 border rounded-lg mr-2"
              placeholder="Type a message…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
