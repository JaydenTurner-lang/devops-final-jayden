import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("/api/ping")
      .then(res => res.json())
      .then(data => setMessage(JSON.stringify(data)))
      .catch(() => setMessage("Error calling backend"));
  }, []);

  return (
    <div className="App">
      <h1>DevOps Final Test</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;
