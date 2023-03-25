const router = require('express').Router();

router.get("/", (req, res) => {
    res.send('get todos')
}
);

module.exports = router;
