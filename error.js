/**
 * Error information script. 
 * 
 * All methods to interact with errors.
 */
const fs = require('fs');

var ERRORS = fs.readFileSync('errors.json');
ERRORS = JSON.parse(ERRORS);

/**
 * Parse and return the error string
 * @param {*} id 
 * @param {*} other 
 */
function getErrorString(id, other)
{
    return `ERROR ${id}: ${ERRORS[id]} ${'- ' + other | ''}`;
}

module.exports = getErrorString;