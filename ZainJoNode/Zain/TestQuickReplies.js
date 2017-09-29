"use strict"

var log4js = require('log4js');
var logger = log4js.getLogger();

module.exports = {

    metadata: () => ({
            "name": "QuickReplyTest",
            "properties": {
            },
            "supportedActions": [
            ]
        }),

    invoke: (conversation, done) => {

        var fbPayload =
                {

                    "message": {
                        "text": "Here's a quick reply!",
                        "quick_replies": [
                            {
                                "content_type": "text",
                                "title": "Search",
                                "payload": "<POSTBACK_PAYLOAD>",
                                "image_url": "http://example.com/img/red.png"
                            },
                            {
                                "content_type": "location"
                            },
                            {
                                "content_type": "text",
                                "title": "Something Else",
                                "payload": "<POSTBACK_PAYLOAD>"
                            }
                        ]
        }};
        
        conversation.reply(fbPayload);
        conversation.transition();
        done();
        
    }  };