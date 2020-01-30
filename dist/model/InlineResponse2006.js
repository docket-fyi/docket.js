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
import InlineResponse2006Data from './InlineResponse2006Data';
import InlineResponse200Links from './InlineResponse200Links';
/**
 * The InlineResponse2006 model module.
 * @module model/InlineResponse2006
 * @version 1.0.0
 */

class InlineResponse2006 {
  /**
   * Constructs a new <code>InlineResponse2006</code>.
   * @alias module:model/InlineResponse2006
   */
  constructor() {
    InlineResponse2006.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>InlineResponse2006</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2006} obj Optional instance to populate.
   * @return {module:model/InlineResponse2006} The populated <code>InlineResponse2006</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse2006();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [InlineResponse2006Data]);
      }

      if (data.hasOwnProperty('links')) {
        obj['links'] = InlineResponse200Links.constructFromObject(data['links']);
      }
    }

    return obj;
  }
  /**
       * @return {Array.<module:model/InlineResponse2006Data>}
       */


  getData() {
    return this.data;
  }
  /**
   * @param {Array.<module:model/InlineResponse2006Data>} data
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
 * @member {Array.<module:model/InlineResponse2006Data>} data
 */


InlineResponse2006.prototype['data'] = undefined;
/**
 * @member {module:model/InlineResponse200Links} links
 */

InlineResponse2006.prototype['links'] = undefined;
export default InlineResponse2006;