
module.exports.createUser = async (req, res, next) => {
  try {
    const { body } = req;

    const user = await User.create(body);

    res.send({ data: user });
  } catch (error) {
    next(error);
  }
}
module.exports.getUser = async (req, res, next) => {
  try {

    const user = await User.findOne({
      where: {
        id: userId
      },
      attributes : {
        exclude: ['password']
      }
    });
    
    res.send({data: user});
  } catch (error) {
    next(error);
  }
}
module.exports.getUsers = async (req, res, next) => {
  try {
    const {pagination : {limit, offset}, pagination} = req;
    


    // const users = await User.findAll({
    //   where: {
    //     id: userId
    //   }
    // });
    // const [user] = users;

    // const user = await User.findByPk(userId);


    const users = await User.findAll({
      ...pagination
    });

    res.send({ data: users});
  } catch (error) {
    next(error);
  }
}
module.exports.updateUser = async (req, res, next) => {
  try {

    const user = await User.findByPk(userId);

    const updateUser = await user.update(body, {
      returning: true
    });

    res.send({data: updateUser});

  } catch (error) {
    next(error);
  }
}
module.exports.deleteUser = async (req, res, next) => {
  try {

    const {
      params: { userId },
    } = req;

    const deletedUser = await User.findByPk(userId);

    if(!deletedUser) {
      throw new Error('User not found');
    }

    await deletedUser.destroy();

    res.send({data: deletedUser});
  } catch (error) {
    next(error);
  }
}