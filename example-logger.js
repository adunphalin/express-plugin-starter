module.exports = function exampleLogger(app, opts = {}) {
const prefix = opts.prefix || '[example-logger]';
app.use((req, res, next) => {
console.log(`${prefix} ${req.method} ${req.url}`);
next();
});
};
