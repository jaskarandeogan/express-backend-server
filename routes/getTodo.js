const router = require('express').Router();

router.get("/:id", (req, res) => {
    
    const { id } = req.params
    res.send('get todo')
    }
);

module.exports = router;