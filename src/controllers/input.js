const path = require("path");

const postData = require("../model/queries/postData");

exports.post = (req, res) => {
  const { name, quote } = req.body;

  postData(name, quote, error => {
    if (error) {
      console.error(error);
      return res.render("500");
    }

    return res.redirect(301, "/");
  });
};
