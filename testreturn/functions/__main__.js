/**
* A basic Hello World function
* @param {string} name Who you're saying hello to
* @returns {object}
*/


module.exports = (name = 'world', context, callback) => {

  callback(null, {hello: name});

};
