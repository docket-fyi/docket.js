# DocketJs.DocsApi

All URIs are relative to *http://localhost:3001/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDocs**](DocsApi.md#getDocs) | **GET** /docs | Get the OpenAPI 3.x spec



## getDocs

> Object getDocs()

Get the OpenAPI 3.x spec

Get the OpenAPI 3.x spec

### Example

```javascript
import DocketJs from 'docket.js';

let apiInstance = new DocketJs.DocsApi();
apiInstance.getDocs().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json

