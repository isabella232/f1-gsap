var f1 = require('f1');
var parsers = require('./parsers');

var getTargetsFromStates = require('./lib/getTargetsFromStates');

module.exports = function(settings) {

  if(!settings.states) {
    throw new Error('You must define states before using f1-gsap');
  }

  settings.el = settings.el || document.body;
  settings.parsers = settings.parsers || { init: parsers.init.slice(), update: parsers.update.slice() };
  settings.targets = {};

  getTargetsFromStates(
    settings.el,
    settings.targets,
    settings.states
  );

  return f1(settings);
};