import user_roles from "../data/user_roles.data.js";

export const getAllUserRoles = (req, res) => {
  res.status(200).json(user_roles);
};

export const getUserRoleById = (req, res) => {
  const user_role = user_roles.find((u) => u.id == req.params.id);
  user_role ? res.json(user_role) : res.status(404).json({ message: "User Role not found" });
};

export const createUserRole = (req, res) => {
  const newUserRole = { id: user_roles.length + 1, ...req.body };
  user_roles.push(newUserRole);
  res.status(201).json(newUserRole);
};

export const updateUserRole = (req, res) => {
  const index = user_roles.findIndex((u) => u.id == req.params.id);

  if (index === -1) return res.status(404).json({ message: "user Role not found" });  
  user_roles[index] = { ...user_roles[index], ...req.body };
  res.json(user_roles[index]);
};

export const deleteUserRole = (req, res) => {
  const index = user_roles.findIndex((u) => u.id == req.params.id);

  if (index === -1) return res.status(404).json({ message: "User Role not found" });

  const deleted = user_roles.splice(index, 1);
  res.json(deleted[0]);
};
