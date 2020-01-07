'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, this is auto check-in core which made by CRoot, but it is developing.';
  }
}

module.exports = HomeController;
