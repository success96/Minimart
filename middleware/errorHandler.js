const errorHandler = async (err, _req, res, next) => {
  console.log({
    status: err.status,
    message: err.message,
    error: err,
    error_stack: err.stack
  })
  res.status(500).json({ msg: 'Something went wrong, please try again' });
  next()
}

module.exports = errorHandler
