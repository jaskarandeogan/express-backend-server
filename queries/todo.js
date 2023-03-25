const db = require("../dbconnect");

const getTodosQuery = async () => {
    const results = await db.any('SELECT * FROM todos')
    return results
    }


const getTodoByIdQuery = async (request, response) => {
    const id = parseInt(request.params.id);
    const results = await db.any('SELECT * FROM todos WHERE id = $1', [id])
    return results
}