"use strict"

var log4js = require('log4js');
var logger = log4js.getLogger();

var FAQService = require('./FAQService');

module.exports = {

    metadata: () => ({
        "name": "FAQ",
        "properties": {
            "nlpVariable": { "type": "string", "required": true }
        },
        "supportedActions": [
        ]
    }),

    invoke: (conversation, done) => {
        var nlpVariable = conversation.properties().nlpVariable;
        var nlpResult = conversation.variable(nlpVariable);
        logger.debug('FAQ: nlpResult=' + JSON.stringify(nlpResult, null, 2));

        if (nlpResult.intentMatches && Array.isArray(nlpResult.intentMatches.detail.final_norm)) {
            if (nlpResult.intentMatches.detail.final_norm.length > 0) {
                let faq = nlpResult.intentMatches.detail.final_norm[0];
                logger.debug('FAQ: answering question=' + faq.sentence);
                conversation.reply(FAQService.answerFor(faq.sentence))
            }
        }
        else {
            conversation.reply('I\'m not sure what your question was, can you ask it a little differently?');
        }

        conversation.transition();

        done();
    }
};
