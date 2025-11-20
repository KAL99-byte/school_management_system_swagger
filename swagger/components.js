// swagger/components.js

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - first_name
 *         - last_name
 *         - email
 *         - username
 *         - password_hash
 *         - user_type
 *         - status
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         first_name:
 *           type: string
 *           example: John
 *         last_name:
 *           type: string
 *           example: Doe
 *         email:
 *           type: string
 *           example: john@example.com
 *         phone:
 *           type: string
 *           example: 1234567890
 *         username:
 *           type: string
 *           example: john_doe
 *         password_hash:
 *           type: string
 *           example: hashed_password
 *         user_type:
 *           type: string
 *           example: admin
 *         status:
 *           type: string
 *           example: active
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Role:
 *       type: object
 *       required:
 *         - name
 *         - description
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: Admin
 *         description:
 *           type: string
 *           example: Administrator with full access
 */
