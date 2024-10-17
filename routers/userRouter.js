const userRouter = require('express').Router();
const UserController = require('../controllers/userContoller');
const TodoController = require('../controllers/todoContoller');
const paginationMW = require('../middlewares/pagination')

userRouter.post('/', UserController.createUser);
userRouter.get('/', paginationMW, UserController.getUsers);

userRouter.get('/:userId', UserController.getUser);
userRouter.put('/:userId', UserController.updateUser);
userRouter.delete('/:userId', UserController.deleteUser);

userRouter.post('./:userId/todos', TodoController.createTodo);
userRouter.get('./:userId/todos', TodoController.getUserTodos);

module.exports = userRouter;