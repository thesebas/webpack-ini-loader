import ini from 'ini'

export default function (content) {
	this.cacheable && this.cacheable();
	return 'module.exports = ' + JSON.stringify(ini.parse(content)) + ';';
};
