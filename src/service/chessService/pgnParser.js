var cjs = require('chess.js'),
    chess = new cjs.Chess(),
    pgn = [
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
            '1. e4 b6 2. d4 Bb7 3. Bd3 e6 4. f3 Nf6 5. Be3 h6 6. h3 Be7 7. c3 Nh5 8. Ne2 Bh4+\n' +
            '9. Kd2 Ng3 10. Nxg3 Bxg3 11. Na3 a6 12. Kc2 d6 13. Nc4 d5 14. Nd2 dxe4 15. Nxe4\n' +
            'Bh4 16. g3 Be7 17. f4 Nd7 18. g4 Nf6 19. Qf3 Qd5 20. Nxf6+ Bxf6 21. Qxd5 Bxd5\n' +
            '22. Rhe1 Bh4 23. Re2 Bf3 24. Rd2 O-O 25. f5 exf5 26. Bxf5 Rae8 27. Bf4 Be4+ 28.\n' +
            'Bxe4 Rxe4 29. Bxc7 b5 30. Kd3 Rfe8 31. Be5 R4xe5 32. dxe5 Rxe5 33. Re2 Rd5+ 34.\n' +
            'Kc2 Rd7 35. Rd1 Ra7 36. Red2 a5 37. Rd7 Ra8 38. Rb7 b4 39. cxb4 axb4 40. Kb3 Bf6\n' +
            '41. Rdd7 1-0',
    ],
    i = 1,
    moveHistory

chess.loadPgn(pgn.join('\n'))
moveHistory = chess.history({ verbose: true })

while (moveHistory.length > 0) {
    var p1Move = moveHistory.shift(),
        p2Move = moveHistory.shift(),
        p1c = p1Move.from + '-' + p1Move.to,
        p2c = p2Move === undefined ? '' : p2Move.from + '-' + p2Move.to
    console.log(i + '. ' + p1c + ' ' + p2c)
    i++
}
