import _ from 'lodash'
import cjs from 'chess.js'
import { RequestHandler } from 'express'

const parsePgn: RequestHandler = async (req, res) => {
    const pgn = [
        '[Event "Live Chess"]\n' +
            '[Site "Chess.com"]\n' +
            '[Date "2024.03.06"]\n' +
            '[Round "?"]\n' +
            '[White "metasmash"]\n' +
            '[Black "MaMcCa"]\n' +
            '[Result "1-0"]\n' +
            '[ECO "B00"]\n' +
            '[WhiteElo "1324"]\n' +
            '[BlackElo "1300"]\n' +
            '[TimeControl "300"]\n' +
            '[EndTime "6:24:06 PST"]\n' +
            '[Termination "metasmash won on time"]\n' +
            '\n' +
            req.body,
    ]
    console.log(pgn)

    try {
        const chess = new cjs.Chess()

        chess.loadPgn(pgn.join('\n'))
        const moveHistory = chess.history({ verbose: true })

        const formattedMoves = _.reduce(
            moveHistory,
            (acc, move, index) => {
                const nextMove = moveHistory[index + 1]
                const p1c = move.from + '-' + move.to
                const p2c = nextMove ? nextMove.from + '-' + nextMove.to : ''
                return _.concat(acc, `${index + 1}. ${p1c} ${p2c}`)
            },
            []
        )

        res.json(formattedMoves)
    } catch (error) {
        res.status(403).json({
            message: 'Failed to parse pgn',
        })
    }
}

export default parsePgn
