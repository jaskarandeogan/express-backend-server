
const router = require("express").Router();

router.post("/", (req, res) => {
    console.log(req.body);
    res.send("add todo");
    }
);
