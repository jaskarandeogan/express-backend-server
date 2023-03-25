const { getUsersQuery, getUserByIdQuery } = require("../queries/user");

const getUsers = async (req, res) => {
  try {
    const user = await getUsersQuery();
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching users" });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const user = await getUserByIdQuery(id);
  res.status(200).json({ user });
};

module.exports = {
  getUsers,
  getUserById,
};
