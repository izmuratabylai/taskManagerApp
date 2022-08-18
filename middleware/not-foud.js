const notFound = (req, res) =>
  res
    .status(404)
    .send("Route does not exist . But I love you Arailym . That is fact!!!");

module.exports = notFound;
