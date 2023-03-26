let  _ = require('lodash');
const assertEqual = require('./assertEqual');

const head = function (arr) {
    return _.head(arr);
}

module.exports = assertEqual;