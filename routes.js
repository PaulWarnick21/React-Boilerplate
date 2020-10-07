const backend = require("./backend/calculator");
const path = require("path");

module.exports = function (app) {
  app.post("/calculator", function (req, res) {
    backend.calculateSum(req.body, (err, sum) => {
      if (err !== undefined) {
        return res.status(400).json({
          status: "error",
          error: err,
        });
      }
      return res.status(200).json({
        status: "success",
        sum: sum,
      });
    });
  });

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
};
