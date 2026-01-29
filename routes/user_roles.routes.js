import express from "express";
import {
  getAllUserRoles,
  getUserRoleById,
  createUserRole,
  updateUserRole,
  deleteUserRole,
} from "../controllers/user_roles.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: User Roles
 *   description: User Role management CRUD
 */

/**
 * @swagger
 * /user-roles:
 *   get:
 *     tags: [User Roles]
 *     summary: Get all user roles
 *     responses:
 *       200:
 *         description: List of all user roles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User_Role'
 */
router.get("/", getAllUserRoles);

/**
 * @swagger
 * /user-roles/{id}:
 *   get:
 *     tags: [User Roles]
 *     summary: Get a user role by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User Role found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User_Role'
 *       404:
 *         description: User Role not found
 */
router.get("/:id", getUserRoleById);

/**
 * @swagger
 * /user-roles:
 *   post:
 *     tags: [User Roles]
 *     summary: Create a new user role
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User_Role'
 *     responses:
 *       201:
 *         description: User Role created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User_Role'
 */
router.post("/", createUserRole);

/**
 * @swagger
 * /user-roles/{id}:
 *   put:
 *     tags: [User Roles]
 *     summary: Update an existing user role
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User Role'
 *     responses:
 *       200:
 *         description: User Role updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User_Role'
 *       404:
 *         description: User Role not found
 */
router.put("/:id", updateUserRole);

/**
 * @swagger
 * /user-roles/{id}:
 *   delete:
 *     tags: [Roles]
 *     summary: Delete a role
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Role deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Role'
 *       404:
 *         description: Role not found
 */
router.delete("/:id", deleteUserRole);

export default router;
