
module.exports = async (req, res, next) {
  const {query : {limit, offset}} = req;


  req.pagination = {
    limit: limit > 100 || limit <= 0 ? 100 : limit,
    offset: offset <= 0 ? 0 : offset
  };

  next();
};