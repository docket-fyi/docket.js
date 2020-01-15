# DocketJs.HealthCheckApi

All URIs are relative to *http://localhost:3001/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listHealthCheck**](HealthCheckApi.md#listHealthCheck) | **GET** /health-check | Health check



## listHealthCheck

> InlineResponse2001 listHealthCheck()

Health check

Checks the health of the application

### Example

```javascript
import DocketJs from 'docket.js';

let apiInstance = new DocketJs.HealthCheckApi();
apiInstance.listHealthCheck().then((data) => {
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

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json

