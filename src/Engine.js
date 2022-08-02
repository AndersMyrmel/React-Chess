import { Engine } from 'node-uci';
// or
//const Engine = require('node-uci').Engine
// async/await
//const chessEngine = new Engine('engine/executable/path')
//await chessEngine.init()
//await chessEngine.setoption('MultiPV', '4')
//await chessEngine.isready()
//console.log('engine ready', chessEngine.id, chessEngine.options)
//const result = await chessEngine.go({ nodes: 2500000 })
//console.log('result', result)
//await chessEngine.quit()
//promises with chain
export function ChessEngine(){
    const engine = new Engine('engine/executable/path')
    engine
      .chain()
      .init()
      .setoption('MultiPV', 3)
      .position('r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3')
      .go({ depth: 15 })
      .then(result => {
        console.log(result)
      })
}


