"use strict"

var log4js = require('log4js');
var logger = log4js.getLogger();

module.exports = {

    metadata: () => ({
            "name": "ZainChangeOffers",
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
                                    "payload": "Shabab"
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
                                    "payload": "Family"
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
                                    "payload": "Business"
                                }
                            ]

                        }

                    ]
                }
            }
        };
       conversation.reply({text: "Please choose one of the below plans"});
        conversation.reply(fbPayload);
        conversation.transition();
        done();
    }
};
