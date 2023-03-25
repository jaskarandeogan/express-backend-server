const router = require('express').Router();


router.delete('/:id', (req, res) => {
    const { id } = req.params

    console.log(id)

    res.send('delete todo')
})

module.exports = router