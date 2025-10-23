const express = require('express');
const { loadPlugins } = require('..'); // if installed as package, require('express-plugin-starter')


const app = express();


// load plugins from the default plugins folder
const loaded = loadPlugins(app, { pluginOptions: { prefix: '[my-app]' } });
console.log('Loaded plugins:', loaded);


app.get('/', (req, res) => res.send('Hello from sample-app'));


const port = process.env.PORT || 3000;
app.listen(port, () => console.log('sample-app listening on', port));
