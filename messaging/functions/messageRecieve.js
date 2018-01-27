const lib = require('lib')({token: "5UnLEsAiOfs5PwuHeNs7rh2jh0y3aCBmNFgXB_bX5yHIeGjYAUXfWGoQMhDLA8RL"});

/**
* @param {string} sender The phone number that sent the text to be handled
* @param {string} receiver The StdLib phone number that received the SMS
* @param {string} message The contents of the SMS
* @param {string} createdDatetime Datetime when the SMS was sent
* @returns {string}
*/

module.exports = async (sender, receiver, message, createdDatetime, context) => {
    
    //STORAGE
    let store = await lib.utils.storage.set('a', message);
    
    console.log('stored');

    let pull = await lib.utils.storage.get('a');
    
    //TEXT RESPONSE
    
    console.log('Parsing...');

    
    var mssg = message.toLowerCase();
    var type = mssg.substring(0, mssg.indexOf(','));
    mssg = mssg.substring(mssg.indexOf(',')+2, mssg.length);
    console.log(type);
    var age = mssg.substring (0, mssg.indexOf(','));
    mssg = mssg.substring(mssg.indexOf(',')+2, mssg.length);
    console.log(age);
    var sex = mssg.substring (0, mssg.indexOf(','));
    if (sex == m){
        
    } else i
    mssg = mssg.substring(mssg.indexOf(',')+2, mssg.length);
    console.log(sex);
    var symptoms = mssg.split(',').map(symptom => symptom.trim());
    console.log(symptoms);
    
    if (type == 'diagnose'){
      console.log('sending sms with diagnosis response: ' + pull);
    
      let result = await lib.messagebird.tel.sms({
        originator: receiver,
        recipient: sender,
        body: "Diagnosis request received: <" + pull + "> at " + new Date()
      });
    } else if (type == 'treatment'){
      console.log('sending sms treatment response: ' + pull);
    
      let result = await lib.messagebird.tel.sms({
        originator: receiver,
        recipient: sender,
        body: "Treatment request received: <" + pull + "> at " + new Date()
      });
    } else {
      console.log('sending sms FORMAT ERROR');
    
      let result = await lib.messagebird.tel.sms({
        originator: receiver,
        recipient: sender,
        body: "Error: BAD format: <" + pull + "> Please enter a proper format" + new Date()
      });
    }
    return '200';

};
