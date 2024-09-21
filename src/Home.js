import React, { useState } from "react";
import { auth, provider } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { upsertMessage } from "./firebase/functions";
import { signInWithPopup } from "firebase/auth";
import { styled } from "@mui/system";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import "./Home.css";

function Home() {
  const [user] = useAuthState(auth);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    console.log("sendMessage");
    const userMessage = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    await upsertMessage(input).catch((err) => console.log(err));

    // const botMessage = await botResponse.json();
    // setMessages([
    //   ...messages,
    //   userMessage,
    //   { text: botMessage.reply, sender: "bot" },
    // ]);
    setInput("");
  };

  return (
    <div>
      {user ? (
        <>
          <div className="users">
            <div className="userInfo">
              <UserInfo />
            </div>
            <div className="account">
              <SignOutButton />
            </div>
          </div>
          <Chat
            messages={messages}
            input={input}
            setInput={setInput}
            sendMessage={sendMessage}
          />
        </>
      ) : (
        <SignInButton />
      )}
    </div>
  );
}

export default Home;

// Add Chat component
function Chat({ messages, input, setInput, sendMessage }) {
  console.log(messages);
  return (
    <div className="send">
      <div className="message">
        {messages.map((msg, index) => (
          <ChatMessage
            key={index}
            message={msg.text}
            isOwnMessage={msg.sender === "user" ? false : false}
          />
        ))}
      </div>
      <div className="sendMessage">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Send a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

function UserInfo() {
  return (
    <div className="userInfo">
      <img src={auth.currentUser.photoURL} alt="" />
      <p>{auth.currentUser.displayName}</p>
    </div>
  );
}

function SignInButton() {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider);
  };
  return (
    <div className="signInButton">
      <button onClick={signInWithGoogle}>
        <p className="signIn">Sign in with Google</p>
      </button>
    </div>
  );
}

function SignOutButton() {
  return (
    <div className="signOutButton">
      <button onClick={() => auth.signOut()}>
        <p className="signOut">Sign out</p>
      </button>
    </div>
  );
}

const MessageWrapper = styled("div")(({ theme, isOwnMessage }) => ({
  display: "flex",
  justifyContent: isOwnMessage ? "flex-end" : "flex-start",
  margin: theme.spacing(1, 0),
}));

const MessageBubble = styled(Paper)(({ isOwnMessage }) => ({
  maxWidth: "60%",
  padding: "8px",
  backgroundColor: isOwnMessage ? "red" : "gray",
  color: "white",
  borderRadius: "8px",
}));
const ChatMessage = ({ message, isOwnMessage }) => {
  return (
    <MessageWrapper isOwnMessage={isOwnMessage}>
      <MessageBubble elevation={3} isOwnMessage={isOwnMessage}>
        <Typography variant="body1">{message}</Typography>
      </MessageBubble>
    </MessageWrapper>
  );
};
