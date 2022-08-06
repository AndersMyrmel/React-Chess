import { getLastDigits } from "./getLastDigits.js";

// Calculate the best move in a given fen position using the lozza engine
export const getBestMove = (fen) => {
  let lozza = new Worker("/lozza.js"); // Inititate web worker, communicating using the UCI protocol
  lozza.postMessage("position fen " + fen); // Feed fen position
  lozza.postMessage("go depth 14"); // 14 Ply search
  return new Promise((resolve) => {
    lozza.onmessage = function (e) {
      if (e.data.includes("bestmove")) {
        resolve(getLastDigits(e.data));
      }
    };
  });
};
