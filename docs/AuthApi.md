# @DocketDocketSdk.AuthApi

All URIs are relative to *http://localhost:3000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**auth**](AuthApi.md#auth) | **POST** /auth | Issues a JWT


<a name="auth"></a>
# **auth**
> InlineResponse200 auth(authPostRequestBody)

Issues a JWT



### Example
```javascript
import @DocketDocketSdk from '@docket/docket-sdk';

let apiInstance = new @DocketDocketSdk.AuthApi();

let authPostRequestBody = new @DocketDocketSdk.AuthPostRequestBody(); // AuthPostRequestBody | 

apiInstance.auth(authPostRequestBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authPostRequestBody** | [**AuthPostRequestBody**](AuthPostRequestBody.md)|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

