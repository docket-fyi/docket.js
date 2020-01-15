# DocketJs.SearchApi

All URIs are relative to *http://localhost:3001/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listSearchResults**](SearchApi.md#listSearchResults) | **GET** /search | Perform a search



## listSearchResults

> InlineResponse2008 listSearchResults(query)

Perform a search

Perform a search

### Example

```javascript
import DocketJs from 'docket.js';
let defaultClient = DocketJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new DocketJs.SearchApi();
let query = "query_example"; // String | Search query
apiInstance.listSearchResults(query).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| Search query | 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json

