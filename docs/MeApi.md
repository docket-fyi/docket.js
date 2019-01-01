# @DocketDocketSdk.MeApi

All URIs are relative to *http://localhost:3000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMyEvent**](MeApi.md#createMyEvent) | **POST** /me/events | Creates a new event for the current user
[**deleteMe**](MeApi.md#deleteMe) | **DELETE** /me | Deletes the current user
[**deleteMyEventById**](MeApi.md#deleteMyEventById) | **DELETE** /me/events/{id} | Deletes an event for the current user
[**getMe**](MeApi.md#getMe) | **GET** /me | Fetches the current user
[**getMyEventById**](MeApi.md#getMyEventById) | **GET** /me/events/{id} | Fetches a specific event for the current user
[**getMyEvents**](MeApi.md#getMyEvents) | **GET** /me/events | Fetches all events for the current user
[**updateMe**](MeApi.md#updateMe) | **PUT** /me | Updates the current user
[**updateMyEventById**](MeApi.md#updateMyEventById) | **PUT** /me/events/{id} | Updates an event for the current user


<a name="createMyEvent"></a>
# **createMyEvent**
> Event createMyEvent(meEventsPostRequestBody)

Creates a new event for the current user



### Example
```javascript
import @DocketDocketSdk from '@docket/docket-sdk';
let defaultClient = @DocketDocketSdk.ApiClient.instance;

// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new @DocketDocketSdk.MeApi();

let meEventsPostRequestBody = new @DocketDocketSdk.MeEventsPostRequestBody(); // MeEventsPostRequestBody | 

apiInstance.createMyEvent(meEventsPostRequestBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **meEventsPostRequestBody** | [**MeEventsPostRequestBody**](MeEventsPostRequestBody.md)|  | 

### Return type

[**Event**](Event.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteMe"></a>
# **deleteMe**
> deleteMe()

Deletes the current user



### Example
```javascript
import @DocketDocketSdk from '@docket/docket-sdk';
let defaultClient = @DocketDocketSdk.ApiClient.instance;

// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new @DocketDocketSdk.MeApi();
apiInstance.deleteMe().then(() => {
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
 - **Accept**: application/json

<a name="deleteMyEventById"></a>
# **deleteMyEventById**
> deleteMyEventById(id)

Deletes an event for the current user



### Example
```javascript
import @DocketDocketSdk from '@docket/docket-sdk';
let defaultClient = @DocketDocketSdk.ApiClient.instance;

// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new @DocketDocketSdk.MeApi();

let id = "id_example"; // String | 

apiInstance.deleteMyEventById(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMe"></a>
# **getMe**
> User getMe()

Fetches the current user



### Example
```javascript
import @DocketDocketSdk from '@docket/docket-sdk';
let defaultClient = @DocketDocketSdk.ApiClient.instance;

// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new @DocketDocketSdk.MeApi();
apiInstance.getMe().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**User**](User.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMyEventById"></a>
# **getMyEventById**
> Event getMyEventById(id)

Fetches a specific event for the current user



### Example
```javascript
import @DocketDocketSdk from '@docket/docket-sdk';
let defaultClient = @DocketDocketSdk.ApiClient.instance;

// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new @DocketDocketSdk.MeApi();

let id = "id_example"; // String | 

apiInstance.getMyEventById(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**Event**](Event.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMyEvents"></a>
# **getMyEvents**
> [Event] getMyEvents()

Fetches all events for the current user



### Example
```javascript
import @DocketDocketSdk from '@docket/docket-sdk';
let defaultClient = @DocketDocketSdk.ApiClient.instance;

// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new @DocketDocketSdk.MeApi();
apiInstance.getMyEvents().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Event]**](Event.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateMe"></a>
# **updateMe**
> User updateMe(mePutRequestBody)

Updates the current user



### Example
```javascript
import @DocketDocketSdk from '@docket/docket-sdk';
let defaultClient = @DocketDocketSdk.ApiClient.instance;

// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new @DocketDocketSdk.MeApi();

let mePutRequestBody = new @DocketDocketSdk.MePutRequestBody(); // MePutRequestBody | 

apiInstance.updateMe(mePutRequestBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mePutRequestBody** | [**MePutRequestBody**](MePutRequestBody.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateMyEventById"></a>
# **updateMyEventById**
> Event updateMyEventById(id, meEventPutRequestBody)

Updates an event for the current user



### Example
```javascript
import @DocketDocketSdk from '@docket/docket-sdk';
let defaultClient = @DocketDocketSdk.ApiClient.instance;

// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new @DocketDocketSdk.MeApi();

let id = "id_example"; // String | 

let meEventPutRequestBody = new @DocketDocketSdk.MeEventPutRequestBody(); // MeEventPutRequestBody | 

apiInstance.updateMyEventById(id, meEventPutRequestBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **meEventPutRequestBody** | [**MeEventPutRequestBody**](MeEventPutRequestBody.md)|  | 

### Return type

[**Event**](Event.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

