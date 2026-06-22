import { useState } from "react";
import Navbar from "../components/Navbar";
import { sendMessage } from "../services/api";
function Chatbot() {
    const [message, setMessage] = useState("");

const [messages, setMessages] = useState([
  {
    sender: "ai",
    text: "👋 Hi! I'm HealthTwin AI. Ask me anything about your health."
  }
]);

const [loading, setLoading] = useState(false);
const handleSend = async () => {

    if (!message.trim()) return;

    const userMessage = {
        sender: "user",
        text: message
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {

        const response = await sendMessage(message);

        setMessages((prev) => [
            ...prev,
            {
                sender: "ai",
                text: response.reply
            }
        ]);

    } catch (error) {

        setMessages((prev) => [
            ...prev,
            {
                sender: "ai",
                text: "❌ Sorry, something went wrong."
            }
        ]);

    }

    setMessage("");

    setLoading(false);

};
  return (
<>
    <Navbar />

    <div className="container" style={{ paddingTop: "120px" }}>

        <h1>🤖 HealthTwin AI Chat</h1>

        <div className="glass" style={{
            marginTop: "30px",
            height: "450px",
            overflowY: "auto",
            padding: "20px"
        }}>

            {messages.map((msg, index) => (

                <div
                    key={index}
                    style={{
                        textAlign: msg.sender === "user" ? "right" : "left",
                        marginBottom: "20px"
                    }}
                >

                    <div
                        style={{
                            display: "inline-block",
                            padding: "12px 18px",
                            borderRadius: "15px",
                            background:
                                msg.sender === "user"
                                    ? "#4fd1ff"
                                    : "#1f2937",
                            color:
                                msg.sender === "user"
                                    ? "#000"
                                    : "#fff",
                            maxWidth: "70%"
                        }}
                    >

                        {msg.text}

                    </div>

                </div>

            ))}

            {loading && (
                <p>🤖 HealthTwin is typing...</p>
            )}
            

        </div>

        <div
            style={{
                display: "flex",
                gap: "10px",
                marginTop: "20px"
            }}
        >

            <input
                type="text"
                placeholder="Ask HealthTwin..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />

            <button
    className="btn"
    onClick={handleSend}
>
    Send
</button>
        </div>

    </div>

</>
);
}

export default Chatbot;