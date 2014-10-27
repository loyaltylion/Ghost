// # Ghost bootloader
// Orchestrates the loading of Ghost
// When run from command line.

var server = require('./server');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

function makeGhost(options) {
    options = options || {};
    var srv = server(options);

    // load our custom helpers
    require('extensions/loyaltylion_helpers')();

    return srv;
}

module.exports = makeGhost;
