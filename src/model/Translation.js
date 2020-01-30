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
 * The Translation model module.
 * @module model/Translation
 * @version 1.0.0
 */
class Translation {
    /**
     * Constructs a new <code>Translation</code>.
     * @alias module:model/Translation
     */
    constructor() { 
        
        Translation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Translation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Translation} obj Optional instance to populate.
     * @return {module:model/Translation} The populated <code>Translation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Translation();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('localeId')) {
                obj['localeId'] = ApiClient.convertToType(data['localeId'], 'Number');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
        }
        return obj;
    }

/**
     * @return {String}
     */
    getKey() {
        return this.key;
    }

    /**
     * @param {String} key
     */
    setKey(key) {
        this['key'] = key;
    }
/**
     * @return {Number}
     */
    getLocaleId() {
        return this.localeId;
    }

    /**
     * @param {Number} localeId
     */
    setLocaleId(localeId) {
        this['localeId'] = localeId;
    }
/**
     * @return {String}
     */
    getText() {
        return this.text;
    }

    /**
     * @param {String} text
     */
    setText(text) {
        this['text'] = text;
    }

}

/**
 * @member {String} key
 */
Translation.prototype['key'] = undefined;

/**
 * @member {Number} localeId
 */
Translation.prototype['localeId'] = undefined;

/**
 * @member {String} text
 */
Translation.prototype['text'] = undefined;






export default Translation;
