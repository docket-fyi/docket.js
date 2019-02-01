# DocketJsSdk.StatusApi

All URIs are relative to *http://localhost:3000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getHealthCheck**](StatusApi.md#getHealthCheck) | **GET** /health-check | Health check


<a name="getHealthCheck"></a>
# **getHealthCheck**
> InlineResponse2001 getHealthCheck()

Health check



### Example
```javascript
import DocketJsSdk from 'docket-js-sdk';

let apiInstance = new DocketJsSdk.StatusApi();
apiInstance.getHealthCheck().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

