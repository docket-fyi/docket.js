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


import ApiClient from "../ApiClient";
import Error from '../model/Error';
import InlineResponse2002 from '../model/InlineResponse2002';

/**
* I18n service.
* @module api/I18nApi
* @version 0.1.0
*/
export default class I18nApi {

    /**
    * Constructs a new I18nApi. 
    * @alias module:api/I18nApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * 
     * 
     * @param {String} localeCode 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2002} and HTTP response
     */
    getLocaleWithHttpInfo(localeCode) {
      let postBody = null;

      // verify the required parameter 'localeCode' is set
      if (localeCode === undefined || localeCode === null) {
        throw new Error("Missing the required parameter 'localeCode' when calling getLocale");
      }


      let pathParams = {
        'localeCode': localeCode
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2002;

      return this.apiClient.callApi(
        '/i18n/{localeCode}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 
     * 
     * @param {String} localeCode 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2002}
     */
    getLocale(localeCode) {
      return this.getLocaleWithHttpInfo(localeCode);
        /*.then(function(response_and_data) {
          return response_and_data.data;
        });*/
    }


}
