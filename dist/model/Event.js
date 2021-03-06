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
 * The Event model module.
 * @module model/Event
 * @version 1.0.0
 */

class Event {
  /**
   * Constructs a new <code>Event</code>.
   * @alias module:model/Event
   */
  constructor() {
    Event.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>Event</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Event} obj Optional instance to populate.
   * @return {module:model/Event} The populated <code>Event</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Event();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }

      if (data.hasOwnProperty('uuid')) {
        obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
      }

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }

      if (data.hasOwnProperty('slug')) {
        obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
      }

      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'String');
      }

      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
      }

      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
      }

      if (data.hasOwnProperty('updatedAt')) {
        obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'String');
      }

      if (data.hasOwnProperty('deletedAt')) {
        obj['deletedAt'] = ApiClient.convertToType(data['deletedAt'], 'String');
      }
    }

    return obj;
  }
  /**
       * @return {Number}
       */


  getId() {
    return this.id;
  }
  /**
   * @param {Number} id
   */


  setId(id) {
    this['id'] = id;
  }
  /**
       * @return {String}
       */


  getUuid() {
    return this.uuid;
  }
  /**
   * @param {String} uuid
   */


  setUuid(uuid) {
    this['uuid'] = uuid;
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


  getSlug() {
    return this.slug;
  }
  /**
   * @param {String} slug
   */


  setSlug(slug) {
    this['slug'] = slug;
  }
  /**
       * @return {String}
       */


  getDate() {
    return this.date;
  }
  /**
   * @param {String} _date
   */


  setDate(_date) {
    this['date'] = _date;
  }
  /**
       * @return {String}
       */


  getUserId() {
    return this.userId;
  }
  /**
   * @param {String} userId
   */


  setUserId(userId) {
    this['userId'] = userId;
  }
  /**
       * @return {String}
       */


  getCreatedAt() {
    return this.createdAt;
  }
  /**
   * @param {String} createdAt
   */


  setCreatedAt(createdAt) {
    this['createdAt'] = createdAt;
  }
  /**
       * @return {String}
       */


  getUpdatedAt() {
    return this.updatedAt;
  }
  /**
   * @param {String} updatedAt
   */


  setUpdatedAt(updatedAt) {
    this['updatedAt'] = updatedAt;
  }
  /**
       * @return {String}
       */


  getDeletedAt() {
    return this.deletedAt;
  }
  /**
   * @param {String} deletedAt
   */


  setDeletedAt(deletedAt) {
    this['deletedAt'] = deletedAt;
  }

}
/**
 * @member {Number} id
 */


Event.prototype['id'] = undefined;
/**
 * @member {String} uuid
 */

Event.prototype['uuid'] = undefined;
/**
 * @member {String} name
 */

Event.prototype['name'] = undefined;
/**
 * @member {String} slug
 */

Event.prototype['slug'] = undefined;
/**
 * @member {String} date
 */

Event.prototype['date'] = undefined;
/**
 * @member {String} userId
 */

Event.prototype['userId'] = undefined;
/**
 * @member {String} createdAt
 */

Event.prototype['createdAt'] = undefined;
/**
 * @member {String} updatedAt
 */

Event.prototype['updatedAt'] = undefined;
/**
 * @member {String} deletedAt
 */

Event.prototype['deletedAt'] = undefined;
export default Event;