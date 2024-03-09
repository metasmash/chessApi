import express from 'express'
import parsePgn from '../service/chessService/parsePgn'
import bodyParser from 'body-parser'

const router = express.Router()

router.post('/parsePgn', bodyParser.text({ type: '*/*' }), parsePgn)
router.get('/healthCheck', async (req, res) => res.json({ status: 'ok' }))

export default router
