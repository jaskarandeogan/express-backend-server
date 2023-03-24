const deleteTodo = async (req, res) => {
    const { id } = req.params
    res.send('delete todo')
}

module.exports = deleteTodo