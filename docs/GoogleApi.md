# DocketJs.GoogleApi

All URIs are relative to *http://localhost:3001/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGoogleOAuthUrl**](GoogleApi.md#getGoogleOAuthUrl) | **GET** /google/oauth-url | Get the OAuth2 URL for Google services
[**googleGetAccessTokens**](GoogleApi.md#googleGetAccessTokens) | **GET** /google/tokens | Get Google access tokens
[**googleListCalendarLists**](GoogleApi.md#googleListCalendarLists) | **GET** /google/calendars-lists | List calendar lists
[**googleListEventInstances**](GoogleApi.md#googleListEventInstances) | **GET** /google/calendars/{calendarId}/events/{eventId}/instances | Get event instances by ID
[**googleListEventsByCalendarId**](GoogleApi.md#googleListEventsByCalendarId) | **GET** /google/calendars/{calendarId}/events | List events by calendar ID
[**googleShowCalendarById**](GoogleApi.md#googleShowCalendarById) | **GET** /google/calendars/{calendarId} | Get calendar by ID
[**googleShowCalendarListById**](GoogleApi.md#googleShowCalendarListById) | **GET** /google/calendars-lists/{calendarListId} | Get a Google calendar list by ID
[**googleShowEventById**](GoogleApi.md#googleShowEventById) | **GET** /google/calendars/{calendarId}/events/{eventId} | Get event by ID
[**googleWatchCalendarLists**](GoogleApi.md#googleWatchCalendarLists) | **POST** /google/calendars-lists/watch | Watch calendar lists
[**googleWatchEvents**](GoogleApi.md#googleWatchEvents) | **POST** /google/calendars/{calendarId}/events/watch | Watch events



## getGoogleOAuthUrl

> InlineResponse200 getGoogleOAuthUrl()

Get the OAuth2 URL for Google services

Get the OAuth2 URL for Google services

### Example

```javascript
import DocketJs from 'docket.js';

let apiInstance = new DocketJs.GoogleApi();
apiInstance.getGoogleOAuthUrl().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## googleGetAccessTokens

> googleGetAccessTokens(code)

Get Google access tokens

Get Google access tokens

### Example

```javascript
import DocketJs from 'docket.js';
let defaultClient = DocketJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new DocketJs.GoogleApi();
let code = "code_example"; // String | Code
apiInstance.googleGetAccessTokens(code).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| Code | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## googleListCalendarLists

> googleListCalendarLists()

List calendar lists

List calendar lists

### Example

```javascript
import DocketJs from 'docket.js';
let defaultClient = DocketJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new DocketJs.GoogleApi();
apiInstance.googleListCalendarLists().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## googleListEventInstances

> googleListEventInstances(calendarId, eventId)

Get event instances by ID

Get event instances by ID

### Example

```javascript
import DocketJs from 'docket.js';
let defaultClient = DocketJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new DocketJs.GoogleApi();
let calendarId = "calendarId_example"; // String | Calendar ID
let eventId = "eventId_example"; // String | Event ID
apiInstance.googleListEventInstances(calendarId, eventId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calendarId** | **String**| Calendar ID | 
 **eventId** | **String**| Event ID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## googleListEventsByCalendarId

> googleListEventsByCalendarId(calendarId)

List events by calendar ID

List events by calendar ID

### Example

```javascript
import DocketJs from 'docket.js';
let defaultClient = DocketJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new DocketJs.GoogleApi();
let calendarId = "calendarId_example"; // String | Calendar ID
apiInstance.googleListEventsByCalendarId(calendarId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calendarId** | **String**| Calendar ID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## googleShowCalendarById

> googleShowCalendarById(calendarId)

Get calendar by ID

Get calendar by ID

### Example

```javascript
import DocketJs from 'docket.js';
let defaultClient = DocketJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new DocketJs.GoogleApi();
let calendarId = "calendarId_example"; // String | Calendar ID
apiInstance.googleShowCalendarById(calendarId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calendarId** | **String**| Calendar ID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## googleShowCalendarListById

> googleShowCalendarListById(calendarListId)

Get a Google calendar list by ID

Get a Google calendar list by ID

### Example

```javascript
import DocketJs from 'docket.js';
let defaultClient = DocketJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new DocketJs.GoogleApi();
let calendarListId = "calendarListId_example"; // String | Calendar list ID
apiInstance.googleShowCalendarListById(calendarListId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calendarListId** | **String**| Calendar list ID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## googleShowEventById

> googleShowEventById(calendarId, eventId)

Get event by ID

Get event by ID

### Example

```javascript
import DocketJs from 'docket.js';
let defaultClient = DocketJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new DocketJs.GoogleApi();
let calendarId = "calendarId_example"; // String | Calendar ID
let eventId = "eventId_example"; // String | Event ID
apiInstance.googleShowEventById(calendarId, eventId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calendarId** | **String**| Calendar ID | 
 **eventId** | **String**| Event ID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## googleWatchCalendarLists

> googleWatchCalendarLists()

Watch calendar lists

Watch calendar lists

### Example

```javascript
import DocketJs from 'docket.js';
let defaultClient = DocketJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new DocketJs.GoogleApi();
apiInstance.googleWatchCalendarLists().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## googleWatchEvents

> googleWatchEvents(calendarId)

Watch events

Watch events

### Example

```javascript
import DocketJs from 'docket.js';
let defaultClient = DocketJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new DocketJs.GoogleApi();
let calendarId = "calendarId_example"; // String | Calendar ID
apiInstance.googleWatchEvents(calendarId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calendarId** | **String**| Calendar ID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json

