const lib = require('lib')({token: "5UnLEsAiOfs5PwuHeNs7rh2jh0y3aCBmNFgXB_bX5yHIeGjYAUXfWGoQMhDLA8RL"});
const request = require("request");
const helper = require("../helpers");

const API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImRhbWlhbi5yZWl0ZXJAZ21haWwuY29tIiwicm9sZSI6IlVzZXIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIyNzQ4IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMjAwIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6Ijk5OTk5OTk5OSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IlByZW1pdW0iLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xhbmd1YWdlIjoiZW4tZ2IiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIyMDk5LTEyLTMxIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwc3RhcnQiOiIyMDE4LTAxLTI3IiwiaXNzIjoiaHR0cHM6Ly9zYW5kYm94LWF1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE1MTcwOTkxNjgsIm5iZiI6MTUxNzA5MTk2OH0.BKr9reP3ruZhuhMSUQdbbGJ8UuSXaGNMsmD-lN6eTas';
const URL_BASE = `https://sandbox-healthservice.priaid.ch/`;
const URL_TOKEN = `token=${helper.token}&`;
const URL_LANG = `language=en-gb&`;
const URL_FORMAT = `format=json`;
let URL_TYPE = { symptoms: `symptoms?`, diagnosis: `diagnosis?`};

function get_diagnosis (url, callback) {
    request(url, (err, res, body) => {
        const diagnosis = JSON.parse(body);
        callback(diagnosis);
    })
}

/**
* A basic Hello World function
* @param {string} _sex Sex of the patient
* @param {string} _age Age of the patient
* @param {array} _symptoms symptoms of the patient
* @returns {array}
*/
module.exports = (_sex, _age, _symptoms, context, callback) => {
    
    console.log("=------------------------------------------");
    const symptoms = _symptoms.map(symptom => symptom.trim());
    let url = `${URL_BASE}${URL_TYPE.symptoms}${URL_TOKEN}${URL_LANG}${URL_FORMAT}`;
    console.log(helper);
    
    helper.get_symptoms_ids(symptoms, url, ids => {
        const id_string = helper.generate_id_string(ids);
        const URL_SYMPTOMS = `symptoms=[${id_string}]&`;
        const URL_SEX = `gender=${_sex.trim()}&`;
        const URL_AGE = `year_of_birth=${Number(new Date().getFullYear()) - _age.trim()}&`;
        url = `${URL_BASE}${URL_TYPE.diagnosis}${URL_TOKEN}${URL_SYMPTOMS}${URL_SEX}${URL_AGE}${URL_LANG}${URL_FORMAT}`;
        get_diagnosis(url, body => {
            console.log(body);
            const names = [];
            
            body.forEach(diagnosis => {
                names.push(diagnosis.Issue.Name);
            })
            callback(null, names);
        });
    })
};
