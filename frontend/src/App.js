import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");
  const getMessage = async () => {
    const response = await axios.get("http://127.0.0.1:8000/api");
    const data = await response.data;

    setMessage(data.message);
  };
  useEffect(() => {
    getMessage();
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>{message}</p>
        <a
          className="App-link"
          href="http://127.0.0.1:8000/api"
          target="_blank"
          rel="noopener noreferrer"
        >
          {message}
        </a>
      </header>
    </div>
  );
}

export default App;
