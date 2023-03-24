const getTodo = (req, res) => {
    res.send('get todo')
}

const getTodos = (req, res) => {
    res.send('get todos')
}

module.exports = {
    getTodo,
    getTodos
}
