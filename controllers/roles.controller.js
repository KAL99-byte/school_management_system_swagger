import roles from "../data/roles.data.js";

export const getAllRoles = (req, res) => {
  res.json(roles);
};

export const getRoleById = (req, res) => {
  const role = roles.find((r) => r.id == req.params.id);
  role ? res.json(role) : res.status(404).json({ message: "Role not found" });
};

export const createRole = (req, res) => {
  const newRole = { id: roles.length + 1, ...req.body };
  roles.push(newRole);
  res.status(201).json(newRole);
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
