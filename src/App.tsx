import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [bg, setBg] = useState("");
  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setName(await invoke("my_name", { name }));
  }


  return (
    <main className={`container`} style={{backgroundColor: bg, height:'vh'}}>
      <h1>Welcome to Tauri + React</h1>

      <div className="row">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p>Click on the Tauri, Vite, and React logos to learn more.</p>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />

<input
          id="greet-input"
          onChange={(e) => setBg(e.currentTarget.value)}
          placeholder="background color"
        />
        <button type="submit">Greet</button>
      </form>
      <p>{name}</p>
    </main>
  );
}

export default App;
