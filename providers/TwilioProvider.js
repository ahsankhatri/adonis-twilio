'use strict'

const ServiceProvider = require('adonis-fold').ServiceProvider

class TwilioProvider extends ServiceProvider {

  * register () {
    this.app.singleton('Adonis/Addons/Twilio', function (app) {
      const Config = app.use('Adonis/Src/Config')
      const Twilio = require('twilio')

      return new Twilio.RestClient(Config.get('twilio.TWILIO_ACCOUNT_SID'), Config.get('twilio.TWILIO_AUTH_TOKEN'));
    })
  }
}

module.exports = TwilioProvider
