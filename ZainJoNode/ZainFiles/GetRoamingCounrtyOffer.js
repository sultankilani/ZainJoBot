"use strict"

var log4js = require('log4js');
var logger = log4js.getLogger();
var country = "USA";
//// Define JSON File
 var fs = require("fs");
// console.log("\n *STARTING* \n");
//// Get content from file
 var contents = fs.readFileSync("RoamingBolts.json");
//// Define to JSON type
 var jsonContent = JSON.parse(contents);
//// Get Value from JSON
// console.log("User Name:", jsonContent.object[1].Country);
//// console.log("Email:", jsonContent[0].Price);
//// console.log("Password:", jsonContent[0].Validity);
//console.log("\n *EXIT* \n");

//var exjson = {'key':'...abc...', 'key2':'...xyz...'};
for(var exKey in jsonContent ) {
    
    if (jsonContent[exKey].Country == country ) {
         console.log("key:"+exKey+", value:"+jsonContent[exKey].Country);
    }
    
   
}
//        if (obj.country == country) {
//            
//            console.log("baby");
//        };
//console.log("out");


//        var fbPayload = {
//            "attachment": {
//                "type": "template",
//                "payload": {
//                    "template_type": "generic",
//                    "elements": [
//                        {
//                            "title": "Shabab",
//                            "image_url": "http://i.imgur.com/wCZboGLt.png",
//                            "subtitle": "الشباب",
//
//                            "buttons": [
//                                {
//                                    "type": "postback",
//                                    "title": "Shabab",
//                                    "payload": "Shabab"
//                                }
//                            ]
//
//                        },
//                        {
//                            "title": "Family ",
//                            "image_url": "http://i.imgur.com/dHy9XIIt.png",
//                            "subtitle": "العيلة",
//
//                            "buttons": [
//                                {
//                                    "type": "postback",
//                                    "title": "Family Offer",
//                                    "payload": "Family"
//                                }
//                            ]
//
//                        },
//                        {
//                            "title": "Business",
//                            "image_url": "http://i.imgur.com/SXppKTot.png",
//                            "subtitle": "الأعمال",
//
//                            "buttons": [
//                                {
//                                    "type": "postback",
//                                    "title": "Business",
//                                    "payload": "Business"
//                                }
//                            ]
//
//                        }
//
//                    ]
//                }
//            }
//        };
//       conversation.reply({text: "Please choose one of the below plans"});
//        conversation.reply(fbPayload);
//        conversation.transition();
//        done();
    

