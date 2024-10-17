module.exports = async (err, req, res, next) =>{

  res.send({erros:[{
    message: err.message
  }]});
};