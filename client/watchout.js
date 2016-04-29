// start slingin' some d3 here.

var d3 = require("d3"),
  jsdom = require("jsdom");

var document = jsdom.jsdom(),
  svg = d3.select(document.body).append("svg");