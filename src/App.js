import './App.css';
import { Chessboard } from "react-chessboard";

function App() {
  return (
    <div id='background'>
      <div id='board'>
        <Chessboard id="BasicBoard" />
      </div>
    </div>
  );
}

export default App;
