'use strict'

const ServiceProvider = require('adonis-fold').ServiceProvider

class TwilioProvider extends ServiceProvider {

  * register () {
    this.app.singleton('Adonis/Addons/Twilio', function (app) {
      const Config          = app.use('Adonis/Src/Config')
      const Twilio          = require('../src/Twilio')
      const TwilioContainer = new Twilio(Config)

      return TwilioContainer.twilio

    })
  }
}

module.exports = TwilioProvider
