import express from 'express'
import { test } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/test', test )
router.post('/update/:id', (req, res) => {
    res.json({
        message: "Update route is working!"
    })
})

export default router;