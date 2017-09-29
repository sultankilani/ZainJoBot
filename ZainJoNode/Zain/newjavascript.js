"use strict"

var log4js = require('log4js');
var logger = log4js.getLogger();

module.exports = {

    metadata: () => ({
            "name": "Jawwaloffers",
            "properties": {
            },
            "supportedActions": [
            ]
        }),

    invoke: (conversation, done) => {

        var fbPayload = {
            "attachment": {
                "type": "template",
                "payload": {
                    "template_type": "generic",
                    "elements": [
                        {
                            "title": "Shabab",
                            "image_url": "http://i.imgur.com/wCZboGLt.png",
                            "subtitle": "الشباب",

                            "buttons": [
                                {
                                    "type": "postback",
                                    "title": "Shabab",
                                    "payload": "1"
                                }
                            ]

                        },
                        {
                            "title": "Family ",
                            "image_url": "http://i.imgur.com/dHy9XIIt.png",
                            "subtitle": "العيلة",

                            "buttons": [
                                {
                                    "type": "postback",
                                    "title": "Family Offer",
                                    "payload": "2"
                                }
                            ]

                        },
                        {
                            "title": "Business",
                            "image_url": "http://i.imgur.com/SXppKTot.png",
                            "subtitle": "الأعمال",

                            "buttons": [
                                {
                                    "type": "postback",
                                    "title": "Business",
                                    "payload": "3"
                                }
                            ]

                        }

                    ]
                }
            }
        };
        conversation.reply(fbPayload);

        conversation.transition();
        done();
    }
};
