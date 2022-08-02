import { Engine } from 'node-uci';

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