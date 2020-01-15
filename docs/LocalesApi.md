# DocketJs.LocalesApi

All URIs are relative to *http://localhost:3001/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listLocales**](LocalesApi.md#listLocales) | **GET** /locales | List locales



## listLocales

> InlineResponse2002 listLocales()

List locales

List locales

### Example

```javascript
import DocketJs from 'docket.js';

let apiInstance = new DocketJs.LocalesApi();
apiInstance.listLocales().then((data) => {
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

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json

