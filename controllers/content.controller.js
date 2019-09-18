const Content = require('../models/site/Content.model');

exports.getSections = async () => {
    let results = await Content.find({});

    return {
        success: true,
        data: results
    }
}