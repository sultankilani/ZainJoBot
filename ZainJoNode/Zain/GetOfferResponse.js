"use strict"

var log4js = require('log4js');
var logger = log4js.getLogger();

module.exports = {

    metadata: () => ({
            "name": "GetOfferType",
            "properties": {
                
                "offerType": { "type": "string", "required": true },
                "MSISDN": { "type": "string", "required": true }
                
            },
            "supportedActions": [
            ]
        }),

    invoke: (conversation, done) => {

        var fbPayload = {
             "message":{
  	"text":"hello, world!"
  }
            
        };
        conversation.reply(fbPayload);
        conversation.transition();
        done();
    }
};
