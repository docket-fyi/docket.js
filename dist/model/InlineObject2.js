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
import MyEventsData from './MyEventsData';
/**
 * The InlineObject2 model module.
 * @module model/InlineObject2
 * @version 1.0.0
 */

class InlineObject2 {
  /**
   * Constructs a new <code>InlineObject2</code>.
   * @alias module:model/InlineObject2
   * @param data {module:model/MyEventsData} 
   */
  constructor(data) {
    InlineObject2.initialize(this, data);
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
   * Constructs a <code>InlineObject2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineObject2} obj Optional instance to populate.
   * @return {module:model/InlineObject2} The populated <code>InlineObject2</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineObject2();

      if (data.hasOwnProperty('data')) {
        obj['data'] = MyEventsData.constructFromObject(data['data']);
      }
    }

    return obj;
  }
  /**
       * @return {module:model/MyEventsData}
       */


  getData() {
    return this.data;
  }
  /**
   * @param {module:model/MyEventsData} data
   */


  setData(data) {
    this['data'] = data;
  }

}
/**
 * @member {module:model/MyEventsData} data
 */


InlineObject2.prototype['data'] = undefined;
export default InlineObject2;