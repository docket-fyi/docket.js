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
import ApiClient from "../ApiClient";
import ClientError from '../model/ClientError';
import InlineResponse2002 from '../model/InlineResponse2002';
/**
* Locales service.
* @module api/LocalesApi
* @version 1.0.0
*/

export default class LocalesApi {
  /**
  * Constructs a new LocalesApi. 
  * @alias module:api/LocalesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }
  /**
   * List locales
   * List locales
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2002} and HTTP response
   */


  listLocalesWithHttpInfo() {
    let postBody = null;
    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = [];
    let contentTypes = [];
    let accepts = ['application/vnd.api+json'];
    let returnType = InlineResponse2002;
    return this.apiClient.callApi('/locales', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }
  /**
   * List locales
   * List locales
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2002}
   */


  listLocales() {
    return this.listLocalesWithHttpInfo().then(function (response_and_data) {
      return response_and_data.data;
    });
  }

}