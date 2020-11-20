//  Connect to database db
// const db = require('../models');
const db = 'hello';

// Export Controller Methods
module.exports = {
    genericTest: function(req, res) {
        res.json(db);
    }
};