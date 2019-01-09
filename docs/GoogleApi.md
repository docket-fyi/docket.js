# @DocketDocketSdk.GoogleApi

All URIs are relative to *http://localhost:3000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGoogleAuthTokens**](GoogleApi.md#getGoogleAuthTokens) | **GET** /google/tokens | Get Google OAuth tokens
[**getGoogleAuthUrl**](GoogleApi.md#getGoogleAuthUrl) | **GET** /google/url | Get Google OAuth URL


<a name="getGoogleAuthTokens"></a>
# **getGoogleAuthTokens**
> InlineResponse2003 getGoogleAuthTokens()

Get Google OAuth tokens



### Example
```javascript
import @DocketDocketSdk from '@docket/docket-sdk';

let apiInstance = new @DocketDocketSdk.GoogleApi();
apiInstance.getGoogleAuthTokens().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGoogleAuthUrl"></a>
# **getGoogleAuthUrl**
> InlineResponse2002 getGoogleAuthUrl()

Get Google OAuth URL



### Example
```javascript
import @DocketDocketSdk from '@docket/docket-sdk';

let apiInstance = new @DocketDocketSdk.GoogleApi();
apiInstance.getGoogleAuthUrl().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

