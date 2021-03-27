var project = require('./App');
(async () => {
var data = await project(process.argv[2])
console.log(data)
})();
