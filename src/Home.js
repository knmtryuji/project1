import React, { useState } from "react";
import { auth, provider } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { upsertMessage } from "./firebase/functions";
import { signInWithPopup } from "firebase/auth";

function Home() {
  const [user] = useAuthState(auth);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    console.log("sendMessage");
    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);
    await upsertMessage({ text: input });

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
          <UserInfo />
          <Chat
            messages={messages}
            input={input}
            setInput={setInput}
            sendMessage={sendMessage}
          />
          <div>testです</div>
          <SignOutButton />
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
  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <p key={index} className={msg.sender}>
            {msg.text}
          </p>
        ))}
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

function SignInButton() {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider);
  };
  return (
    <button onClick={signInWithGoogle}>
      <p>Sign in with Google</p>
    </button>
  );
}

function SignOutButton() {
  return (
    <button onClick={() => auth.signOut()}>
      <p>Sign out</p>
    </button>
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
