"use strict"

var log4js = require('log4js');
var logger = log4js.getLogger();

var AccountService = require('./AccountService');

module.exports = {

    metadata: () => ({
        "name": "BalanceRetrieval",
        "properties": {
            "accountType": { "type": "string", "required": true }
        },
        "supportedActions": [
        ]
    }),

    invoke: (conversation, done) => {
        var accountType = conversation.properties().accountType;
        logger.debug('BalanceRetrieval: getting balance for account type=' + accountType);

        var accounts = AccountService.accounts(accountType);
        if (accounts.length > 0) {
            var account = accounts[0];
            logger.debug('BalanceRetrieval: account id ' + account.id + ' balance=' + account.balance());
            conversation.reply({ text: 'The balance in your ' + accountType + ' account (' + account.id + ') is $' + String(account.balance()) });
            if (accountType === 'credit card') {
                conversation.reply({ text: 'Your remaining credit is $' + String(account.remainingLimit()) });
            }
        }
        else {
            logger.debug('BalanceRetrieval: no accounts of specified type found!');
            conversation.reply({ text: 'Sorry, you don\'t have a ' + accountType + ' account!' });
        }
        conversation.transition();

        done();
    }
};
