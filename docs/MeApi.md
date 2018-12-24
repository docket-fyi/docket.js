# @DocketDocketSdk.MeApi

All URIs are relative to *http://localhost:3000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**meDelete**](MeApi.md#meDelete) | **DELETE** /me | Deletes the current user
[**meEventsGet**](MeApi.md#meEventsGet) | **GET** /me/events | Fetches all events for the current user
[**meEventsIdDelete**](MeApi.md#meEventsIdDelete) | **DELETE** /me/events/{id} | Deletes an event for the current user
[**meEventsIdPut**](MeApi.md#meEventsIdPut) | **PUT** /me/events/{id} | Updates an event for the current user
[**meEventsPost**](MeApi.md#meEventsPost) | **POST** /me/events | Creates a new event for the current user
[**meGet**](MeApi.md#meGet) | **GET** /me | Fetches the current user
[**mePut**](MeApi.md#mePut) | **PUT** /me | Updates the current user


<a name="meDelete"></a>
# **meDelete**
> meDelete()

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
apiInstance.meDelete().then(() => {
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

<a name="meEventsGet"></a>
# **meEventsGet**
> [Event] meEventsGet()

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
apiInstance.meEventsGet().then((data) => {
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

<a name="meEventsIdDelete"></a>
# **meEventsIdDelete**
> meEventsIdDelete(id)

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

apiInstance.meEventsIdDelete(id).then(() => {
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

<a name="meEventsIdPut"></a>
# **meEventsIdPut**
> Event meEventsIdPut(id, meEventPutRequestBody)

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

apiInstance.meEventsIdPut(id, meEventPutRequestBody).then((data) => {
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

<a name="meEventsPost"></a>
# **meEventsPost**
> Event meEventsPost(meEventsPostRequestBody)

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

apiInstance.meEventsPost(meEventsPostRequestBody).then((data) => {
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

<a name="meGet"></a>
# **meGet**
> User meGet()

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
apiInstance.meGet().then((data) => {
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

<a name="mePut"></a>
# **mePut**
> User mePut(mePutRequestBody)

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

apiInstance.mePut(mePutRequestBody).then((data) => {
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

