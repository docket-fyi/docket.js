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
import InlineResponse2009Data from './InlineResponse2009Data';
import InlineResponse200Links from './InlineResponse200Links';
/**
 * The InlineResponse2009 model module.
 * @module model/InlineResponse2009
 * @version 1.0.0
 */

class InlineResponse2009 {
  /**
   * Constructs a new <code>InlineResponse2009</code>.
   * @alias module:model/InlineResponse2009
   */
  constructor() {
    InlineResponse2009.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>InlineResponse2009</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2009} obj Optional instance to populate.
   * @return {module:model/InlineResponse2009} The populated <code>InlineResponse2009</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse2009();

      if (data.hasOwnProperty('data')) {
        obj['data'] = InlineResponse2009Data.constructFromObject(data['data']);
      }

      if (data.hasOwnProperty('links')) {
        obj['links'] = InlineResponse200Links.constructFromObject(data['links']);
      }
    }

    return obj;
  }
  /**
       * @return {module:model/InlineResponse2009Data}
       */


  getData() {
    return this.data;
  }
  /**
   * @param {module:model/InlineResponse2009Data} data
   */


  setData(data) {
    this['data'] = data;
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

}
/**
 * @member {module:model/InlineResponse2009Data} data
 */


InlineResponse2009.prototype['data'] = undefined;
/**
 * @member {module:model/InlineResponse200Links} links
 */

InlineResponse2009.prototype['links'] = undefined;
export default InlineResponse2009;