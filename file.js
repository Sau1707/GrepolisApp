const fs = require('fs-extra');
const uglify = require('uglify-js');

const INPUTFOLDER = 'script';
const OUTPUTFOLDER = 'out';

async function main() {
	fs.readdirSync(INPUTFOLDER).forEach(async (file) => {
		const js = await fs.readFile(`${INPUTFOLDER}/${file}`, 'utf-8');
		const minified = uglify.minify(js);
		const json = 'module.exports = ' + JSON.stringify(minified.code) + ';';
		await fs.writeFile(`${OUTPUTFOLDER}/${file}`, json);
	});
	return;
}

main();
