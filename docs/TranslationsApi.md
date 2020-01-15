# DocketJs.TranslationsApi

All URIs are relative to *http://localhost:3001/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listTranslationsByLocale**](TranslationsApi.md#listTranslationsByLocale) | **GET** /locales/{localeCode}/translations | List translations by locale code



## listTranslationsByLocale

> InlineResponse2003 listTranslationsByLocale(localeCode)

List translations by locale code

List translations by locale code

### Example

```javascript
import DocketJs from 'docket.js';

let apiInstance = new DocketJs.TranslationsApi();
let localeCode = "'en-US'"; // String | Locale code of translations
apiInstance.listTranslationsByLocale(localeCode).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **localeCode** | **String**| Locale code of translations | [default to &#39;en-US&#39;]

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json

