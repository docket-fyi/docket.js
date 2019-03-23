# DocketJsSdk.MicrosoftApi

All URIs are relative to *http://localhost:3000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllMicrosoftCalendarLists**](MicrosoftApi.md#getAllMicrosoftCalendarLists) | **GET** /microsoft/calendar-list | Get Microsoft calendar lists
[**getMicrosoftAuthTokens**](MicrosoftApi.md#getMicrosoftAuthTokens) | **GET** /microsoft/tokens | Get Microsoft OAuth tokens
[**getMicrosoftOAuthUrl**](MicrosoftApi.md#getMicrosoftOAuthUrl) | **GET** /microsoft/oauth-url | Get Microsoft OAuth URL


<a name="getAllMicrosoftCalendarLists"></a>
# **getAllMicrosoftCalendarLists**
> [MicrosoftCalendarList] getAllMicrosoftCalendarLists()

Get Microsoft calendar lists

Get Microsoft calendar lists

### Example
```javascript
import DocketJsSdk from 'docket-js-sdk';
let defaultClient = DocketJsSdk.ApiClient.instance;

// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new DocketJsSdk.MicrosoftApi();
apiInstance.getAllMicrosoftCalendarLists().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[MicrosoftCalendarList]**](MicrosoftCalendarList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMicrosoftAuthTokens"></a>
# **getMicrosoftAuthTokens**
> InlineResponse2004 getMicrosoftAuthTokens(code)

Get Microsoft OAuth tokens



### Example
```javascript
import DocketJsSdk from 'docket-js-sdk';
let defaultClient = DocketJsSdk.ApiClient.instance;

// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new DocketJsSdk.MicrosoftApi();

let code = "code_example"; // String | 

apiInstance.getMicrosoftAuthTokens(code).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**|  | 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMicrosoftOAuthUrl"></a>
# **getMicrosoftOAuthUrl**
> InlineResponse2005 getMicrosoftOAuthUrl()

Get Microsoft OAuth URL



### Example
```javascript
import DocketJsSdk from 'docket-js-sdk';
let defaultClient = DocketJsSdk.ApiClient.instance;

// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new DocketJsSdk.MicrosoftApi();
apiInstance.getMicrosoftOAuthUrl().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

