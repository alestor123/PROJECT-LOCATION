var axios = require('axios');
module.exports = async repo => {
if(!repo) throw Error('Please enter repo path');
var data  = (await axios.get(`https://api.github.com/repos/${repo}`)).data.owner.login,
loc = (await axios.get(`https://api.github.com/users/${data}`)).data.location;
return loc
}