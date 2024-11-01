import express from 'express'
import { test, updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test', test )
<<<<<<< HEAD
router.post('/update/:id', verifyToken, updateUser)
=======
router.post('/update/:id', (req, res) => {
    res.json({
        message: "Update route is working!"
    })
})
>>>>>>> 4708a4b7c8368210dba10152f4c50325fc2915c2

export default router;