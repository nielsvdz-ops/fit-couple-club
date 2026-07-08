const path = require("path");

module.exports = {
  // Multiple lockfiles exist on this machine (one in the user home dir) -
  // without an explicit root Next infers the wrong workspace root, which
  // breaks output file tracing.
  turbopack: {
    root: path.join(__dirname),
  },
};
