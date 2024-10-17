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
};

module.exports.getTodo = async (req, res, next) => {
  try {
    const { params : {todoId, userId}} = req;

    const todo = await Todo.findByPk(todoId);

    res.send({ data: todo});
  } catch (error) {
    next(error);
  }
}

module.exports.updateTodo = async (req, res, next) => {
  try {
    const { params: {todoId},
    body,} =req;
    
    const [rowsCount, [updateTodo]] = await Todo.update(body, {
      where: {
        id: todoId
      },
      returning: true
    });

    res.send({ data: updateTodo});
  } catch (error) {
    next(error);
  }
};

module.exports.deleteTodo = async (req, res, next) => {
  try {
    const {
      params: { todoId },
    } = req;

    const todoToDelete = await Todo.findByPk(todoId);

    await todoToDelete.destroy();

    res.send({ data: todoToDelete });
  } catch (error) {
    next(error);
  }
};