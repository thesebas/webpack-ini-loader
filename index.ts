import ini from 'ini'

/** function to convert INI file contents to js required by webpack loader */
export default function (content: string): string {
	this.cacheable && this.cacheable();
	return 'module.exports = ' + JSON.stringify(ini.parse(content)) + ';';
};
