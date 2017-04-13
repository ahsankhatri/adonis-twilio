'use strict'

/**
 * adonis-twilio
 *
 * (c) Ahsaan Muhammad Yousuf <ahsankhatri1992@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const BaseGenerator = require('../../../adonis-commands/src/Generators/Base')
const path = require('path')

class ConfigGenerator extends BaseGenerator {

  /**
   * makes path to a given template
   * @param  {String} template
   * @return {String}
   *
   * @private
   */
  _makeTemplatePath (template) {
    return path.join(__dirname, '../../stubs', `${template}.stub`)
  }

  /**
   * returns signature to be used by ace
   * @return {String}
   *
   * @public
   */
  get signature () {
    return `twilio:config`
  }

  /**
   * returns description to be used by ace as help command
   * @return {String}
   *
   * @public
   */
  get description () {
    return 'Create a twilio config'
  }

  /**
   * called by ace automatically. It will create a new
   * config file inside the config directory.
   * @param  {Object} args
   * @param  {Object} options
   *
   * @public
   */
  * handle (args, options) {
    const toPath = this.helpers.configPath(`twilio.js`)
    const template = 'config'
    const templateOptions = {}

    yield this._wrapWrite(template, toPath, templateOptions)
  }
}

module.exports = ConfigGenerator