'use strict';

const Subscription = require('egg').Subscription;

class Checkin extends Subscription {
    static get schedule() {
        return {
            interval: '1s',
            type: 'all',
        };
    }

    //用于每日启动一次
    async subscribe() {
        console.log("Test");
    }
}

module.exports = Checkin;