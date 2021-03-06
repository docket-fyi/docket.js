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
import Locale from './Locale';

/**
 * The InlineResponse2002Data model module.
 * @module model/InlineResponse2002Data
 * @version 1.0.0
 */
class InlineResponse2002Data {
    /**
     * Constructs a new <code>InlineResponse2002Data</code>.
     * @alias module:model/InlineResponse2002Data
     */
    constructor() { 
        
        InlineResponse2002Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2002Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2002Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse2002Data} The populated <code>InlineResponse2002Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2002Data();

            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = Locale.constructFromObject(data['attributes']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

/**
     * @return {module:model/Locale}
     */
    getAttributes() {
        return this.attributes;
    }

    /**
     * @param {module:model/Locale} attributes
     */
    setAttributes(attributes) {
        this['attributes'] = attributes;
    }
/**
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * @param {String} type
     */
    setType(type) {
        this['type'] = type;
    }

}

/**
 * @member {module:model/Locale} attributes
 */
InlineResponse2002Data.prototype['attributes'] = undefined;

/**
 * @member {String} type
 */
InlineResponse2002Data.prototype['type'] = undefined;






export default InlineResponse2002Data;

