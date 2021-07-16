const axios = require("axios");

exports.homeRoutes = (req, res) => {
  // Make a get request to /api/user
  axios
    .get("http://localhost:9000/api/user")
    .then(function (response) {
      console.log(response);
      res.render("index", { users: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.addUser = (req, res) => {
  res.render("add_user");
};

exports.updateUser = (req, res) => {
  axios
    .get("http://localhost:9000/api/user", { params: { id: req.query.id } })
    .then(function (userdata) {
      res.render("update_user", { user: userdata.data });
    })
    .catch((err) => {
      res.send(err);
    });
};
