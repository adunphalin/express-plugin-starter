const fs = require('fs');
const path = require('path');


function loadPlugins(app, options = {}) {
const pluginsDir = options.dir || path.join(__dirname, 'plugins');
if (!fs.existsSync(pluginsDir)) return [];


const files = fs.readdirSync(pluginsDir).filter(f => f.endsWith('.js'));
const loaded = [];


for (const file of files) {
const pluginPath = path.join(pluginsDir, file);
try {
const plugin = require(pluginPath);
if (typeof plugin !== 'function' && typeof plugin.init !== 'function') {
console.warn('[express-plugin-starter] plugin', file, 'has no export function or init method - skipping');
continue;
}


const handler = (typeof plugin === 'function') ? plugin : plugin.init;
// call plugin with app and options
handler(app, options.pluginOptions || {});
loaded.push({ name: file, path: pluginPath });
} catch (err) {
console.error('[express-plugin-starter] failed to load plugin', file, err);
}
}


return loaded;
}


module.exports = { loadPlugins };
