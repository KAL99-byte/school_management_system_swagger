import users from "../data/users.data.js";

export const getAllUsers = (req, res) => {
  res.status(200).json(users);
};

export const getUserById = (req, res) => {
  const user = users.find((u) => u.id == req.params.id);
  user ? res.json(user) : res.status(404).json({ message: "User not found" });
};

export const createUser = (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
};

export const updateUser = (req, res) => {
  const index = users.findIndex((u) => u.id == req.params.id);

  if (index === -1) return res.status(404).json({ message: "User not found" });

  users[index] = { ...users[index], ...req.body };
  res.json(users[index]);
};

export const deleteUser = (req, res) => {
  const index = users.findIndex((u) => u.id == req.params.id);

  if (index === -1) return res.status(404).json({ message: "User not found" });

  const deleted = users.splice(index, 1);
  res.json(deleted[0]);
};
