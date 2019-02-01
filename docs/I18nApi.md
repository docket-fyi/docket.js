# @DocketDocketSdk.I18nApi

All URIs are relative to *http://localhost:3000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLocale**](I18nApi.md#getLocale) | **GET** /i18n/{localeCode} | 


<a name="getLocale"></a>
# **getLocale**
> Locale getLocale(localeCode)





### Example
```javascript
import @DocketDocketSdk from '@docket/docket-sdk';

let apiInstance = new @DocketDocketSdk.I18nApi();

let localeCode = "localeCode_example"; // String | 

apiInstance.getLocale(localeCode).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **localeCode** | **String**|  | 

### Return type

[**Locale**](Locale.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

