const usersController = require("../controller/users.controller");

var express = require("express");

var router = express.Router();

router.post("/register", usersController.register);
/**
 * @swagger
 * /users/register:
 *   post:
 *      description: User Registration
 *      tags:
 *          - users
 *      parameters:
 *          - in: body
 *            name: User
 *            description: User data
 *            schema:
 *              type: object
 *              required:
 *                 - firstName
 *                 - lastName
 *                 - emailId
 *                 - password
 *                 - status
 *                 - role
 *                 - type
 *              properties:
 *                  firstName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      
 *                  lastName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                     
 *                  emailId:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 100
 *                     
 *                  password:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 * 
 *                  status:
 *                      type: string
 *                  
 *                  role:
 *                      type: string
 * 
 *                  type:
 *                      type: boolean
 *                     
 *      responses:
 *          '200':
 *              description: Registered successfully
 *          '400':
 *              description: Kindly fill the details correctly
 *          
 */

router.post("/login", usersController.login);
/**
 * @swagger
 * /users/login:
 *   post:
 *      description: Used to login user
 *      tags:
 *          - users
 *      parameters:
 *          - in: body
 *            name: User
 *            description: User login
 *            schema:
 *              type: object
 *              required:
 *                 - emailId
 *                 - password
 *                
 *              properties:
 *                  emailId:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 100
 *                     
 *                  password:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 * 
 *                 
 *      responses:
 *          '200':
 *              description: Login successfully
 *          '400':
 *              description: Invalid credentials
 *         
 */

module.exports = router;
