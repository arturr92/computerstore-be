import express from 'express';
const router = express.Router();



router.get( '/' ,(req, res) => {
    res.send('Hello World')
})

router.get( '/productos' ,(req, res) => {
    res.send('Productos')
})




export default router;