# @DocketDocketSdk.DocumentationApi

All URIs are relative to *http://localhost:3000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDocs**](DocumentationApi.md#getDocs) | **GET** /docs | Returns an OpenAPI 3.0 spec.


<a name="getDocs"></a>
# **getDocs**
> Object getDocs()

Returns an OpenAPI 3.0 spec.

Returns an OpenAPI 3.0 spec describing HTTP methods, endpoints, parameters, etc.

### Example
```javascript
import @DocketDocketSdk from '@docket/docket-sdk';

let apiInstance = new @DocketDocketSdk.DocumentationApi();
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
 - **Accept**: application/json

