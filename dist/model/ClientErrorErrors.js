/**
 * Docket API
 * Docket API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: development@docket.fyi
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
import ApiClient from '../ApiClient';
/**
 * The ClientErrorErrors model module.
 * @module model/ClientErrorErrors
 * @version 1.0.0
 */

class ClientErrorErrors {
  /**
   * Constructs a new <code>ClientErrorErrors</code>.
   * @alias module:model/ClientErrorErrors
   */
  constructor() {
    ClientErrorErrors.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>ClientErrorErrors</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClientErrorErrors} obj Optional instance to populate.
   * @return {module:model/ClientErrorErrors} The populated <code>ClientErrorErrors</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ClientErrorErrors();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }

      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }

      if (data.hasOwnProperty('translationKey')) {
        obj['translationKey'] = ApiClient.convertToType(data['translationKey'], 'String');
      }

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
    }

    return obj;
  }
  /**
       * @return {String}
       */


  getName() {
    return this.name;
  }
  /**
   * @param {String} name
   */


  setName(name) {
    this['name'] = name;
  }
  /**
       * @return {String}
       */


  getMessage() {
    return this.message;
  }
  /**
   * @param {String} message
   */


  setMessage(message) {
    this['message'] = message;
  }
  /**
       * @return {String}
       */


  getTranslationKey() {
    return this.translationKey;
  }
  /**
   * @param {String} translationKey
   */


  setTranslationKey(translationKey) {
    this['translationKey'] = translationKey;
  }
  /**
       * @return {String}
       */


  getCode() {
    return this.code;
  }
  /**
   * @param {String} code
   */


  setCode(code) {
    this['code'] = code;
  }

}
/**
 * @member {String} name
 */


ClientErrorErrors.prototype['name'] = undefined;
/**
 * @member {String} message
 */

ClientErrorErrors.prototype['message'] = undefined;
/**
 * @member {String} translationKey
 */

ClientErrorErrors.prototype['translationKey'] = undefined;
/**
 * @member {String} code
 */

ClientErrorErrors.prototype['code'] = undefined;
export default ClientErrorErrors;