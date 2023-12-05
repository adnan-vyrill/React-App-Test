import logo from "./logo.svg";
import "./App.css";
import packageJson from "../package.json"; 

function App() {
  const version = packageJson.version;
  return (
    <div className="App">
      <header className="App-header">
        <h1>Test {version}</h1>
        <p>Version: {process.env.REACT_APP_VERSION}</p>
      </header>
    </div>
  );
}

export default App;
