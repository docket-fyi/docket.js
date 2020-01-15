# DocketJs.UsersApi

All URIs are relative to *http://localhost:3001/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**confirmRegistration**](UsersApi.md#confirmRegistration) | **POST** /users/confirm-registration | Confirm a new user&#39;s registration
[**createUser**](UsersApi.md#createUser) | **POST** /users | Create a new user
[**destroyMyProfile**](UsersApi.md#destroyMyProfile) | **DELETE** /my/profile | Delete the current user
[**forgotPassword**](UsersApi.md#forgotPassword) | **POST** /users/forgot-password | Facilitates a user to reset their password
[**getMyProfile**](UsersApi.md#getMyProfile) | **GET** /my/profile | Return the current user&#39;s profile
[**resetPassword**](UsersApi.md#resetPassword) | **POST** /users/reset-password | Reset a user&#39;s password
[**showMyMembership**](UsersApi.md#showMyMembership) | **GET** /my/membership | Get the current user&#39;s membership status
[**updateMyMembership**](UsersApi.md#updateMyMembership) | **PATCH** /my/membership | Update the current user&#39;s membership status
[**updateMyProfile**](UsersApi.md#updateMyProfile) | **PATCH** /my/profile | Update the current user&#39;s profile



## confirmRegistration

> confirmRegistration(code, inlineObject6)

Confirm a new user&#39;s registration

Confirm a new user&#39;s registration

### Example

```javascript
import DocketJs from 'docket.js';

let apiInstance = new DocketJs.UsersApi();
let code = "code_example"; // String | Confirm registration code parameter
let inlineObject6 = new DocketJs.InlineObject6(); // InlineObject6 | 
apiInstance.confirmRegistration(code, inlineObject6).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| Confirm registration code parameter | 
 **inlineObject6** | [**InlineObject6**](InlineObject6.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## createUser

> InlineResponse2005 createUser(inlineObject5)

Create a new user

Create a new user and, if valid, return it

### Example

```javascript
import DocketJs from 'docket.js';

let apiInstance = new DocketJs.UsersApi();
let inlineObject5 = new DocketJs.InlineObject5(); // InlineObject5 | 
apiInstance.createUser(inlineObject5).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject5** | [**InlineObject5**](InlineObject5.md)|  | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## destroyMyProfile

> destroyMyProfile()

Delete the current user

Delete the current user

### Example

```javascript
import DocketJs from 'docket.js';
let defaultClient = DocketJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new DocketJs.UsersApi();
apiInstance.destroyMyProfile().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## forgotPassword

> forgotPassword(inlineObject7)

Facilitates a user to reset their password

Facilitates a user to reset their password

### Example

```javascript
import DocketJs from 'docket.js';

let apiInstance = new DocketJs.UsersApi();
let inlineObject7 = new DocketJs.InlineObject7(); // InlineObject7 | 
apiInstance.forgotPassword(inlineObject7).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject7** | [**InlineObject7**](InlineObject7.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## getMyProfile

> InlineResponse2005 getMyProfile()

Return the current user&#39;s profile

Return the current user&#39;s profile

### Example

```javascript
import DocketJs from 'docket.js';
let defaultClient = DocketJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new DocketJs.UsersApi();
apiInstance.getMyProfile().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## resetPassword

> resetPassword(code, inlineObject8)

Reset a user&#39;s password

Reset a user&#39;s password

### Example

```javascript
import DocketJs from 'docket.js';

let apiInstance = new DocketJs.UsersApi();
let code = "code_example"; // String | Reset password code parameter
let inlineObject8 = new DocketJs.InlineObject8(); // InlineObject8 | 
apiInstance.resetPassword(code, inlineObject8).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| Reset password code parameter | 
 **inlineObject8** | [**InlineObject8**](InlineObject8.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## showMyMembership

> showMyMembership()

Get the current user&#39;s membership status

Get the current user&#39;s membership status

### Example

```javascript
import DocketJs from 'docket.js';
let defaultClient = DocketJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new DocketJs.UsersApi();
apiInstance.showMyMembership().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## updateMyMembership

> updateMyMembership()

Update the current user&#39;s membership status

Update the current user&#39;s membership status

### Example

```javascript
import DocketJs from 'docket.js';
let defaultClient = DocketJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new DocketJs.UsersApi();
apiInstance.updateMyMembership().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## updateMyProfile

> InlineResponse2005 updateMyProfile(inlineObject)

Update the current user&#39;s profile

Update the current user&#39;s profile

### Example

```javascript
import DocketJs from 'docket.js';
let defaultClient = DocketJs.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new DocketJs.UsersApi();
let inlineObject = new DocketJs.InlineObject(); // InlineObject | 
apiInstance.updateMyProfile(inlineObject).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json

