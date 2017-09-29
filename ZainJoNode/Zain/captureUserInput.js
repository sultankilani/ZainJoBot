"use strict"

var log4js = require('log4js');
var logger = log4js.getLogger();

module.exports = {

    metadata: () => ({
            "name": "captureUserInput",
            "properties": {
                "variable": {"type": "string", "required": true}
            },
            "supportedActions": [
            ]
        }),

    invoke: (conversation, done) => {

        var variableName = conversation.properties().variable;
        var userInput = conversation.text();

        conversation.variable(variableName, userInput);

        conversation.transition();
        done();
    }
};
