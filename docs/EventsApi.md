# DocketJs.EventsApi

All URIs are relative to *http://localhost:3001/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMyEvent**](EventsApi.md#createMyEvent) | **POST** /my/events | Create a new event for the current user
[**deleteMyEventById**](EventsApi.md#deleteMyEventById) | **DELETE** /my/events/{eventId} | Delete an event for the current user by it&#39;s ID
[**getMyEventById**](EventsApi.md#getMyEventById) | **GET** /my/events/{eventId} | Get an event for the current user by it&#39;s ID
[**importMyEvents**](EventsApi.md#importMyEvents) | **POST** /my/events/import | Bulk import events for the current user
[**listMyEvents**](EventsApi.md#listMyEvents) | **GET** /my/events | List the current user&#39;s events
[**updateMyEventById**](EventsApi.md#updateMyEventById) | **PATCH** /my/events/{eventId} | Update an event for the current user by it&#39;s ID



## createMyEvent

> InlineResponse2007 createMyEvent(inlineObject1)

Create a new event for the current user

Create a new event for the current user

### Example

```javascript
import DocketJs from 'docket.js';
let defaultClient = DocketJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new DocketJs.EventsApi();
let inlineObject1 = new DocketJs.InlineObject1(); // InlineObject1 | 
apiInstance.createMyEvent(inlineObject1).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject1** | [**InlineObject1**](InlineObject1.md)|  | 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## deleteMyEventById

> deleteMyEventById(eventId)

Delete an event for the current user by it&#39;s ID

Delete an event for the current user by it&#39;s ID

### Example

```javascript
import DocketJs from 'docket.js';
let defaultClient = DocketJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new DocketJs.EventsApi();
let eventId = 56; // Number | ID of event to delete
apiInstance.deleteMyEventById(eventId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | **Number**| ID of event to delete | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## getMyEventById

> InlineResponse2007 getMyEventById(eventId)

Get an event for the current user by it&#39;s ID

Get an event for the current user by it&#39;s ID

### Example

```javascript
import DocketJs from 'docket.js';
let defaultClient = DocketJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new DocketJs.EventsApi();
let eventId = 56; // Number | ID of event to get
apiInstance.getMyEventById(eventId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | **Number**| ID of event to get | 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## importMyEvents

> InlineResponse2006 importMyEvents(inlineObject3)

Bulk import events for the current user

Bulk import events for the current user

### Example

```javascript
import DocketJs from 'docket.js';
let defaultClient = DocketJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new DocketJs.EventsApi();
let inlineObject3 = new DocketJs.InlineObject3(); // InlineObject3 | 
apiInstance.importMyEvents(inlineObject3).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject3** | [**InlineObject3**](InlineObject3.md)|  | 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## listMyEvents

> InlineResponse2006 listMyEvents()

List the current user&#39;s events

List the current user&#39;s events

### Example

```javascript
import DocketJs from 'docket.js';
let defaultClient = DocketJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new DocketJs.EventsApi();
apiInstance.listMyEvents().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## updateMyEventById

> InlineResponse2007 updateMyEventById(eventId, inlineObject2)

Update an event for the current user by it&#39;s ID

Update an event for the current user by it&#39;s ID

### Example

```javascript
import DocketJs from 'docket.js';
let defaultClient = DocketJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new DocketJs.EventsApi();
let eventId = 56; // Number | ID of event to update
let inlineObject2 = new DocketJs.InlineObject2(); // InlineObject2 | 
apiInstance.updateMyEventById(eventId, inlineObject2).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | **Number**| ID of event to update | 
 **inlineObject2** | [**InlineObject2**](InlineObject2.md)|  | 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json

