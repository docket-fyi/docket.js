/**
 * Docket API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';





/**
* The GoogleCalendarEventStart model module.
* @module model/GoogleCalendarEventStart
* @version 0.1.0
*/
export default class GoogleCalendarEventStart {
    /**
    * Constructs a new <code>GoogleCalendarEventStart</code>.
    * @alias module:model/GoogleCalendarEventStart
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>GoogleCalendarEventStart</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GoogleCalendarEventStart} obj Optional instance to populate.
    * @return {module:model/GoogleCalendarEventStart} The populated <code>GoogleCalendarEventStart</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GoogleCalendarEventStart();

            
            
            

            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('dateTime')) {
                obj['dateTime'] = ApiClient.convertToType(data['dateTime'], 'Date');
            }
            if (data.hasOwnProperty('timeZone')) {
                obj['timeZone'] = ApiClient.convertToType(data['timeZone'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {Date} date
    *
    date = undefined;
    */
    /**
    * @member {Date} dateTime
    *
    dateTime = undefined;
    */
    /**
    * @member {String} timeZone
    *
    timeZone = undefined;
    */





    /**
    * @return {Date}
    */
    getDate() {
        return this.date;
    }

    /**
    * @param {Date} _date
    */
    setDate(_date) {
        this['date'] = _date;
    }

    /**
    * @return {Date}
    */
    getDateTime() {
        return this.dateTime;
    }

    /**
    * @param {Date} dateTime
    */
    setDateTime(dateTime) {
        this['dateTime'] = dateTime;
    }

    /**
    * @return {String}
    */
    getTimeZone() {
        return this.timeZone;
    }

    /**
    * @param {String} timeZone
    */
    setTimeZone(timeZone) {
        this['timeZone'] = timeZone;
    }




}


