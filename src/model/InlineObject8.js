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
import UsersConfirmRegistrationData from './UsersConfirmRegistrationData';

/**
 * The InlineObject8 model module.
 * @module model/InlineObject8
 * @version 1.0.0
 */
class InlineObject8 {
    /**
     * Constructs a new <code>InlineObject8</code>.
     * @alias module:model/InlineObject8
     * @param data {module:model/UsersConfirmRegistrationData} 
     */
    constructor(data) { 
        
        InlineObject8.initialize(this, data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, data) { 
        obj['data'] = data;
    }

    /**
     * Constructs a <code>InlineObject8</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject8} obj Optional instance to populate.
     * @return {module:model/InlineObject8} The populated <code>InlineObject8</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject8();

            if (data.hasOwnProperty('data')) {
                obj['data'] = UsersConfirmRegistrationData.constructFromObject(data['data']);
            }
        }
        return obj;
    }

/**
     * @return {module:model/UsersConfirmRegistrationData}
     */
    getData() {
        return this.data;
    }

    /**
     * @param {module:model/UsersConfirmRegistrationData} data
     */
    setData(data) {
        this['data'] = data;
    }

}

/**
 * @member {module:model/UsersConfirmRegistrationData} data
 */
InlineObject8.prototype['data'] = undefined;






export default InlineObject8;

