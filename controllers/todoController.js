const { Todo, User } = require('../models');

module.exports.createTodo = async (req,res,next) => {
  try {
    const {
      body,
      params: { userId },
    } = req;

    // const todo = await Todo.create({...body, userId});

    const user = await User.findByPk(userId);

    const todo = await user.createTodo(body);


    res.send({data: todo});
  } catch (error) {
    next(error);
  }
};

module.exports.getTodo = async (req,res,next) => {
  try {

  } catch (error) {
    next(error);
  }
};

module.exports.getUserTodos = async (req, res, next) => {
  try {
    const {
      params: { userId },
    } = req;

    // const todos = await Todo.findAll({
    //   where: {
    //     userId
    //   }
    // });

    const user = await User.findByPk(userId);

    const todos = await user.getTodos();

    res.send({ data: todos });
  } catch (error) {
    next(error);
  }
}