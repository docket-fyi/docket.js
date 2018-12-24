# @DocketDocketSdk.AuthApi

All URIs are relative to *http://localhost:3000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authPost**](AuthApi.md#authPost) | **POST** /auth | Issues a JWT


<a name="authPost"></a>
# **authPost**
> InlineResponse200 authPost(authPostRequestBody)

Issues a JWT



### Example
```javascript
import @DocketDocketSdk from '@docket/docket-sdk';

let apiInstance = new @DocketDocketSdk.AuthApi();

let authPostRequestBody = new @DocketDocketSdk.AuthPostRequestBody(); // AuthPostRequestBody | 

apiInstance.authPost(authPostRequestBody).then((data) => {
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

