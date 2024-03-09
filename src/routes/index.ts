import express from 'express'
import parsePgn from '../service/chessService/parsePgn'

const router = express.Router()

router.post('/parsePgn', parsePgn)
router.get('/healthCheck', async (req, res) => res.json({ status: 'ok' }))

export default router
