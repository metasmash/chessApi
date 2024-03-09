import _ from 'lodash'
import { RequestHandler } from 'express'
import { Move } from 'chess.js'
import { moveToAlgebraic } from '../../helpers/chessHelpers'

const parsePgn: RequestHandler = async (req, res) => {
    try {
        const pgn = [req.body]

        let cjs = require('chess.js')
        let chess = new cjs.Chess()

        await chess.loadPgn(pgn.join('\n'))
        let moveHistory: Move[] = chess.history({ verbose: true })
        const formattedMoves = moveToAlgebraic(moveHistory)

        res.json(formattedMoves)
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}

export default parsePgn
