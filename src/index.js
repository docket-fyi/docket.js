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


import ApiClient from './ApiClient';
import AuthPostRequestBody from './model/AuthPostRequestBody';
import Error from './model/Error';
import Event from './model/Event';
import ForgotPasswordPostRequestBody from './model/ForgotPasswordPostRequestBody';
import GoogleCalendar from './model/GoogleCalendar';
import GoogleCalendarEvent from './model/GoogleCalendarEvent';
import GoogleCalendarList from './model/GoogleCalendarList';
import InlineResponse200 from './model/InlineResponse200';
import InlineResponse2001 from './model/InlineResponse2001';
import InlineResponse2002 from './model/InlineResponse2002';
import InlineResponse2003 from './model/InlineResponse2003';
import InlineResponse2004 from './model/InlineResponse2004';
import Locale from './model/Locale';
import MeEventPutRequestBody from './model/MeEventPutRequestBody';
import MeEventsPostRequestBody from './model/MeEventsPostRequestBody';
import MePutRequestBody from './model/MePutRequestBody';
import ResetPasswordPostRequestBody from './model/ResetPasswordPostRequestBody';
import User from './model/User';
import UsersPostRequestBody from './model/UsersPostRequestBody';
import AuthApi from './api/AuthApi';
import DocumentationApi from './api/DocumentationApi';
import GoogleApi from './api/GoogleApi';
import I18nApi from './api/I18nApi';
import MeApi from './api/MeApi';
import StatusApi from './api/StatusApi';
import UserApi from './api/UserApi';


/**
* JavaScript SDK for interfacing with the Docket API.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var DocketJsSdk = require('index'); // See note below*.
* var xxxSvc = new DocketJsSdk.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new DocketJsSdk.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new DocketJsSdk.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new DocketJsSdk.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.1.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AuthPostRequestBody model constructor.
     * @property {module:model/AuthPostRequestBody}
     */
    AuthPostRequestBody,

    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error,

    /**
     * The Event model constructor.
     * @property {module:model/Event}
     */
    Event,

    /**
     * The ForgotPasswordPostRequestBody model constructor.
     * @property {module:model/ForgotPasswordPostRequestBody}
     */
    ForgotPasswordPostRequestBody,

    /**
     * The GoogleCalendar model constructor.
     * @property {module:model/GoogleCalendar}
     */
    GoogleCalendar,

    /**
     * The GoogleCalendarEvent model constructor.
     * @property {module:model/GoogleCalendarEvent}
     */
    GoogleCalendarEvent,

    /**
     * The GoogleCalendarList model constructor.
     * @property {module:model/GoogleCalendarList}
     */
    GoogleCalendarList,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200,

    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001,

    /**
     * The InlineResponse2002 model constructor.
     * @property {module:model/InlineResponse2002}
     */
    InlineResponse2002,

    /**
     * The InlineResponse2003 model constructor.
     * @property {module:model/InlineResponse2003}
     */
    InlineResponse2003,

    /**
     * The InlineResponse2004 model constructor.
     * @property {module:model/InlineResponse2004}
     */
    InlineResponse2004,

    /**
     * The Locale model constructor.
     * @property {module:model/Locale}
     */
    Locale,

    /**
     * The MeEventPutRequestBody model constructor.
     * @property {module:model/MeEventPutRequestBody}
     */
    MeEventPutRequestBody,

    /**
     * The MeEventsPostRequestBody model constructor.
     * @property {module:model/MeEventsPostRequestBody}
     */
    MeEventsPostRequestBody,

    /**
     * The MePutRequestBody model constructor.
     * @property {module:model/MePutRequestBody}
     */
    MePutRequestBody,

    /**
     * The ResetPasswordPostRequestBody model constructor.
     * @property {module:model/ResetPasswordPostRequestBody}
     */
    ResetPasswordPostRequestBody,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
     * The UsersPostRequestBody model constructor.
     * @property {module:model/UsersPostRequestBody}
     */
    UsersPostRequestBody,

    /**
    * The AuthApi service constructor.
    * @property {module:api/AuthApi}
    */
    AuthApi,

    /**
    * The DocumentationApi service constructor.
    * @property {module:api/DocumentationApi}
    */
    DocumentationApi,

    /**
    * The GoogleApi service constructor.
    * @property {module:api/GoogleApi}
    */
    GoogleApi,

    /**
    * The I18nApi service constructor.
    * @property {module:api/I18nApi}
    */
    I18nApi,

    /**
    * The MeApi service constructor.
    * @property {module:api/MeApi}
    */
    MeApi,

    /**
    * The StatusApi service constructor.
    * @property {module:api/StatusApi}
    */
    StatusApi,

    /**
    * The UserApi service constructor.
    * @property {module:api/UserApi}
    */
    UserApi
};
