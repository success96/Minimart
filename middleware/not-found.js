const notFound = (req, res, next) => {
   res.status(404).send(`Can't find ${req.originalUrl} on the server!`);
   next();
} 

module.exports = notFound
