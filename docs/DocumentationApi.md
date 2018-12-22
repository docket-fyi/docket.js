# @DocketDocketSdk.DocumentationApi

All URIs are relative to *http://localhost:3000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**docsGet**](DocumentationApi.md#docsGet) | **GET** /docs | Returns an OpenAPI 3.0 spec.


<a name="docsGet"></a>
# **docsGet**
> XComponentsresponsesDocsGetOk docsGet()

Returns an OpenAPI 3.0 spec.

Returns an OpenAPI 3.0 spec describing HTTP methods, endpoints, parameters, etc.

### Example
```javascript
import @DocketDocketSdk from '@docket/docket-sdk';

let apiInstance = new @DocketDocketSdk.DocumentationApi();
apiInstance.docsGet().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**XComponentsresponsesDocsGetOk**](XComponentsresponsesDocsGetOk.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

