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
import InlineResponse200Data from './InlineResponse200Data';
import InlineResponse200Links from './InlineResponse200Links';

/**
 * The InlineResponse200 model module.
 * @module model/InlineResponse200
 * @version 1.0.0
 */
class InlineResponse200 {
    /**
     * Constructs a new <code>InlineResponse200</code>.
     * @alias module:model/InlineResponse200
     */
    constructor() { 
        
        InlineResponse200.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse200</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse200} obj Optional instance to populate.
     * @return {module:model/InlineResponse200} The populated <code>InlineResponse200</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse200();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ApiClient.convertToType(data['meta'], Object);
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = InlineResponse200Links.constructFromObject(data['links']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = InlineResponse200Data.constructFromObject(data['data']);
            }
        }
        return obj;
    }

/**
     * @return {Object}
     */
    getMeta() {
        return this.meta;
    }

    /**
     * @param {Object} meta
     */
    setMeta(meta) {
        this['meta'] = meta;
    }
/**
     * @return {module:model/InlineResponse200Links}
     */
    getLinks() {
        return this.links;
    }

    /**
     * @param {module:model/InlineResponse200Links} links
     */
    setLinks(links) {
        this['links'] = links;
    }
/**
     * @return {module:model/InlineResponse200Data}
     */
    getData() {
        return this.data;
    }

    /**
     * @param {module:model/InlineResponse200Data} data
     */
    setData(data) {
        this['data'] = data;
    }

}

/**
 * @member {Object} meta
 */
InlineResponse200.prototype['meta'] = undefined;

/**
 * @member {module:model/InlineResponse200Links} links
 */
InlineResponse200.prototype['links'] = undefined;

/**
 * @member {module:model/InlineResponse200Data} data
 */
InlineResponse200.prototype['data'] = undefined;






export default InlineResponse200;

