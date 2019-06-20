let url = require('url');

module.exports = function calculate(req, res) {
        let query = url.parse(req.url, true).query;

        let lhs = parseFloat(query.lhs);
        let operation = query.operation;
        let rhs = parseFloat(query.rhs);
        let result = 0;

        if (operation == '+') {
            result = lhs + rhs;
        } else if (operation == '-') {
            result = lhs - rhs;
        } else if (operation == '*') {
            result = lhs * rhs;
        } else if (operation == '/') {
            result = lhs / rhs;
        } else {
            result = 0;
        }

        console.log("Result " + result);
        return result;
    };