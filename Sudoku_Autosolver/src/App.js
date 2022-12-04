import "./App.css";
import Board from "./components/Board";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Board />
      </div>
    </div>
  );
}

export default App;
