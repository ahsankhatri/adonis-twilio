'use strict'

class TwilioContainer {

  constructor (Config) {
    const Twilio = require('twilio')

    this.config  = Config
    this.twilio  = new Twilio.RestClient(this.config.get('twilio.accountSid'), this.config.get('twilio.authToken'));

    this._extending()
  }

  _extending () {

    /**
     * Twilio send SMS/MMS via this method
     */
    this.twilio.sendMessage = (number, body, media, callback) => {
      if ( !number || typeof body !== 'string' ) {
        throw new Error('Body must be string.')
      }

      let payload = this._generatePayload({
        to: number,
        body: body
      })

      if ( typeof media == 'function' ) {
        callback = media
      } else {
        payload.mediaUrl = media
      }

      return this.twilio.messages.post(payload, callback)
    }

    /**
     * Ability to make a call
     */
    this.twilio.makeCall = (number, url, callback) => {
      if ( !number || typeof url !== 'string' ) {
        throw new Error('Body must be string.')
      }

      return this.twilio.makeCall(
        this._generatePayload({
          to: number,
          url: url
        }), callback)
    }
  }

  _generatePayload (object) {
    return Object.assign({}, {
      from: this.config.get('twilio.fromNumber')
    }, object)
  }

}

module.exports = TwilioContainer