// Exporting home function for home page
module.exports.home = function (req, res) {
  return res.render("home", {
    title: "Todo List",
  });
  //   return res.end("<h1>Home page has been set up</h1>");
};
