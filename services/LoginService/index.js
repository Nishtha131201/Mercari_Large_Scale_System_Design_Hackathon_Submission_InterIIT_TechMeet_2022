const app = require("./app");
const sls = require("serverless-http");

module.exports.handler = sls(app);
