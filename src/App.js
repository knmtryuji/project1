import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Home";
import db from "./firebase";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {}, []);
  return (
    <div className="App">
      <h1>firebaseでログイン機能を実装</h1>
      <Home />
    </div>
  );
}

export default App;
