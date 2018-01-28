const lib = require('lib')({token: "5UnLEsAiOfs5PwuHeNs7rh2jh0y3aCBmNFgXB_bX5yHIeGjYAUXfWGoQMhDLA8RL"});
const request = require("request");
const helper = require("../helpers");

const URL_BASE = `https://sandbox-healthservice.priaid.ch/`;
const URL_TOKEN = `token=${helper.token}&`;
const URL_LANG = `language=en-gb&`;
const URL_FORMAT = `format=json`;
const URL_TYPE = { issues: `issues?`};

/**
* A basic Hello World function
* @param {string} _issue symptom to get treatment data for
* @returns {string}
*/
module.exports = (_issue, context, callback) => {
    let url = `${URL_BASE}${URL_TYPE.issues}${URL_TOKEN}${URL_LANG}${URL_FORMAT}`;
    helper.get_issue_id (_issue, url, id => {
        url = `${URL_BASE}issues/${id}/info?${URL_TOKEN}${URL_LANG}${URL_FORMAT}`;
        helper.get_description(id, url, info => {
            callback(null, info);
        })
    });
};
