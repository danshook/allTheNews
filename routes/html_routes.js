var router = require("express").Router();

// module.exports = function(app) {
//   app.get("/", function(req, res) {
//     res.render("home");
//   });
// };

var router = require("express").Router();

const stories = [
  {
    tagLine:
      "Hotshot Commencement Speaker Jumps Straight Into Speech Without Even Defining ‘Courage’.",
    description: 33
  },
  {
    tagLine:
      "Waste Of Time: Starbucks Closed Down For Anti-Bias Training Today Even Though We’ve Moved On And Are Mad About Other Things Now.",
    description: 33
  }
];

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("home", {
      title: "Home",
      stories: stories
    });
  });
};
