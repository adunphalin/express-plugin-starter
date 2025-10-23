module.exports.init = function exampleMetrics(app, opts = {}) {
const route = opts.route || '/_metrics';
app.get(route, (req, res) => {
// trivial example: expose a small JSON with process info
res.json({ uptime: process.uptime(), memory: process.memoryUsage() });
});
};
