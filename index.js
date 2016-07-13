var ini = require('ini');

module.exports = function (content) {
	return 'module.exports = ' + JSON.stringify(ini.parse(content)) + ';';
};
