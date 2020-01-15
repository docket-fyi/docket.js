# DocketJs.MicrosoftApi

All URIs are relative to *http://localhost:3001/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMicrosoftOAuthUrl**](MicrosoftApi.md#getMicrosoftOAuthUrl) | **GET** /microsoft/oauth-url | Get Microsoft OAuth URL
[**microsoftGetAccessTokens**](MicrosoftApi.md#microsoftGetAccessTokens) | **GET** /microsoft/tokens | Get Microsoft access tokens
[**microsoftListCalendars**](MicrosoftApi.md#microsoftListCalendars) | **GET** /microsoft/calendars | List Microsoft calendars
[**microsoftListEventsByCalendarId**](MicrosoftApi.md#microsoftListEventsByCalendarId) | **GET** /microsoft/calendars/{calendarId}/events | List Microsoft events by calendar ID



## getMicrosoftOAuthUrl

> InlineResponse2004 getMicrosoftOAuthUrl()

Get Microsoft OAuth URL

Get Microsoft OAuth URL

### Example

```javascript
import DocketJs from 'docket.js';

let apiInstance = new DocketJs.MicrosoftApi();
apiInstance.getMicrosoftOAuthUrl().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## microsoftGetAccessTokens

> microsoftGetAccessTokens(code)

Get Microsoft access tokens

Get Microsoft access tokens

### Example

```javascript
import DocketJs from 'docket.js';
let defaultClient = DocketJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new DocketJs.MicrosoftApi();
let code = "code_example"; // String | Code
apiInstance.microsoftGetAccessTokens(code).then(() => {
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


## microsoftListCalendars

> InlineResponse2004 microsoftListCalendars()

List Microsoft calendars

List microsoft calendars

### Example

```javascript
import DocketJs from 'docket.js';
let defaultClient = DocketJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new DocketJs.MicrosoftApi();
apiInstance.microsoftListCalendars().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## microsoftListEventsByCalendarId

> InlineResponse2004 microsoftListEventsByCalendarId(calendarId)

List Microsoft events by calendar ID

List Microsoft events by calendar ID

### Example

```javascript
import DocketJs from 'docket.js';
let defaultClient = DocketJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new DocketJs.MicrosoftApi();
let calendarId = "calendarId_example"; // String | Calendar ID
apiInstance.microsoftListEventsByCalendarId(calendarId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calendarId** | **String**| Calendar ID | 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json

