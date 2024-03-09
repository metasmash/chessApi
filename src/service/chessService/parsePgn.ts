import _ from 'lodash'
import { RequestHandler } from 'express'

const parsePgn: RequestHandler = async (req, res) => {
    const pgn = [req.body]
    console.log(pgn)

    let cjs = require('chess.js')
    let chess = new cjs.Chess()

    chess.loadPgn(pgn.join('\n'))
    let moveHistory = chess.history({ verbose: true })
    let moves: string[] = []
    const formattedMoves = _.reduce(
        moveHistory,
        (acc, move, index) => {
            const nextMove = moveHistory[index + 1]
            const p1c = move.from + '-' + move.to
            const p2c = nextMove ? nextMove.from + '-' + nextMove.to : ''
            return { ...acc, [index + 1]: { white: p1c, black: p2c } }
        },
        {}
    )

    res.json(formattedMoves)
}

export default parsePgn
