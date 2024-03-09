import { Move } from 'chess.js'
import { AlgebraicMoves } from '../../types/chess'

export const moveToAlgebraic = (moveHistory: Move[]): AlgebraicMoves => {
    const formattedMoves: AlgebraicMoves = {}
    let i = 1
    while (moveHistory.length > 0) {
        var p1Move = moveHistory.shift(),
            p2Move = moveHistory.shift(),
            p1c = p1Move.from + '-' + p1Move.to,
            p2c = p2Move === undefined ? '' : p2Move.from + '-' + p2Move.to
        formattedMoves[i] = { white: p1c, black: p2c }
        i++
    }

    return formattedMoves
}
