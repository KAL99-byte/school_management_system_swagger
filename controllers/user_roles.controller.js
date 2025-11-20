import user_roles from "../data/user_roles.data.js";

export const getAllUserRoles = (req, res) => {
  res.json(user_roles);
};

export const getUserRoleById = (req, res) => {
  const userrole = user_roles.find((r) => r.id == req.params.id);
  userrole ? res.json(user_roles) : res.status(404).json({ message: "User Role not found" });
};

export const createUserRole = (req, res) => {
  const newUserRole = { id: user_roles.length + 1, ...req.body };
  user_roles.push(newUserRole);
  res.status(201).json(newUserRole);
};

export const updateRole = (req, res) => {
  const index = roles.findIndex((u) => u.id == req.params.id);

  if (index === -1) return res.status(404).json({ message: "Role not found" });

  roles[index] = { ...roles[index], ...req.body };
  res.json(roles[index]);
};

export const deleteRole = (req, res) => {
  const index = roles.findIndex((u) => u.id == req.params.id);

  if (index === -1) return res.status(404).json({ message: "Role not found" });

  const deleted = roles.splice(index, 1);
  res.json(deleted[0]);
};
