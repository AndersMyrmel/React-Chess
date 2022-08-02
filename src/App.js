import './App.css';
import {PlayRandomMove} from "./RandomGame"
import { Puzzle } from './Puzzle';

function App() {

  return (
    <div id='background'>
      <div id='board'>
        <Puzzle/>
      </div>
    </div>
  );
}

export default App;
