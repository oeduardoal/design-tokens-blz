const log = ({ type = "log", msg = "" }) => {
  console[type](msg);
};

module.exports = {
  log
};
