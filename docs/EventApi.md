# @DocketDocketSdk.EventApi

All URIs are relative to *http://localhost:3000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**meEventsGet**](EventApi.md#meEventsGet) | **GET** /me/events | Fetches all events for the current user
[**meEventsIdDelete**](EventApi.md#meEventsIdDelete) | **DELETE** /me/events/{id} | Deletes an event for the current user
[**meEventsIdPut**](EventApi.md#meEventsIdPut) | **PUT** /me/events/{id} | Updates an event for the current user
[**meEventsPost**](EventApi.md#meEventsPost) | **POST** /me/events | Creates a new event for the current user


<a name="meEventsGet"></a>
# **meEventsGet**
> XComponentsresponsesMeEventsGetOk meEventsGet()

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

let apiInstance = new @DocketDocketSdk.EventApi();
apiInstance.meEventsGet().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**XComponentsresponsesMeEventsGetOk**](XComponentsresponsesMeEventsGetOk.md)

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

let apiInstance = new @DocketDocketSdk.EventApi();

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
> XComponentsresponsesMeEventPutOk meEventsIdPut(id, meEventPutRequestBody)

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

let apiInstance = new @DocketDocketSdk.EventApi();

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

[**XComponentsresponsesMeEventPutOk**](XComponentsresponsesMeEventPutOk.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="meEventsPost"></a>
# **meEventsPost**
> XComponentsresponsesMeEventsPostOk meEventsPost(meEventsPostRequestBody)

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

let apiInstance = new @DocketDocketSdk.EventApi();

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

[**XComponentsresponsesMeEventsPostOk**](XComponentsresponsesMeEventsPostOk.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

