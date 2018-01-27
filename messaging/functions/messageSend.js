const lib = require('lib')({token: "5UnLEsAiOfs5PwuHeNs7rh2jh0y3aCBmNFgXB_bX5yHIeGjYAUXfWGoQMhDLA8RL"});

/**
* Message Send
* @param {string} receiver The StdLib phone number that received the SMS
* @param {string} mssg The contents of the SMS
* @returns {string}
*/
 
module.exports = async (receiver = '6475003114', mssg = "bean man", context) => {

    let result = await lib.messagebird.tel.sms({
      originator: '12262124495',
      recipient: receiver,
      body: mssg + new Date()
    });

  return `A message was sent from 12262124495 to ${receiver} with body ${mssg}`;

};
