function pathTo(file) {
  return 'file://' + __dirname + '/' + file;
}

module.exports = {
  pathTo: pathTo
}