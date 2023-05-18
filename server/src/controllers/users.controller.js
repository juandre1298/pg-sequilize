import { User } from "../models/Users.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export const createUser = async (req, res) => {
  try {
    const { name, second_name, born_date, email, password, gender } = req.body;

    const newUser = await User.create({
      name,
      second_name,
      born_date,
      email,
      password,
      gender,
    });
    res.json(newUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({ where: { id } });
    console.log(user);
    if (!user) return res.status(404).json({ message: "user doesn't existe" });
    res.json(user);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (err) {
    return res.status(500).json([{ message: err.message }]);
  }
};
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({ where: { id } });

    user.set(req.body);
    await user.save();
    return res.json(user);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
