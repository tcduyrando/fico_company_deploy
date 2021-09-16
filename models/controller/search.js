/* eslint-disable no-undef */
const Fundraiser = require('../../schemas/fundraiser');

module.exports = (req, res, next) => {
    const filters = req.query;
    const filteredUsers = Fundraiser.filter(user => {
        let isValid = true;
        for (key in filters) {
            console.log(key, user[key], filters[key]);
            isValid = isValid && user[key] === filters[key];
        }
        return isValid;
    });
    res.send(filteredUsers);
}   