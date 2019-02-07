# docket-js-sdk

DocketJsSdk - JavaScript client for docket-js-sdk
No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.1.0
- Package version: 0.1.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install docket-js-sdk --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var DocketJsSdk = require('docket-js-sdk');

var api = new DocketJsSdk.AuthApi()

var authPostRequestBody = new DocketJsSdk.AuthPostRequestBody(); // {AuthPostRequestBody} 

api.auth(authPostRequestBody).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *http://localhost:3000/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DocketJsSdk.AuthApi* | [**auth**](docs/AuthApi.md#auth) | **POST** /auth | Issues a JWT
*DocketJsSdk.DocumentationApi* | [**getDocs**](docs/DocumentationApi.md#getDocs) | **GET** /docs | Returns an OpenAPI 3.0 spec.
*DocketJsSdk.GoogleApi* | [**getAllGoogleCalendarLists**](docs/GoogleApi.md#getAllGoogleCalendarLists) | **GET** /google/calendar-list | Get Google calendar lists
*DocketJsSdk.GoogleApi* | [**getGoogleAuthTokens**](docs/GoogleApi.md#getGoogleAuthTokens) | **GET** /google/tokens | Get Google OAuth tokens
*DocketJsSdk.GoogleApi* | [**getGoogleAuthUrl**](docs/GoogleApi.md#getGoogleAuthUrl) | **GET** /google/url | Get Google OAuth URL
*DocketJsSdk.I18nApi* | [**getLocale**](docs/I18nApi.md#getLocale) | **GET** /i18n/{localeCode} | 
*DocketJsSdk.MeApi* | [**createMyEvent**](docs/MeApi.md#createMyEvent) | **POST** /me/events | Creates a new event for the current user
*DocketJsSdk.MeApi* | [**deleteMe**](docs/MeApi.md#deleteMe) | **DELETE** /me | Deletes the current user
*DocketJsSdk.MeApi* | [**deleteMyEventById**](docs/MeApi.md#deleteMyEventById) | **DELETE** /me/events/{id} | Deletes an event for the current user
*DocketJsSdk.MeApi* | [**getMe**](docs/MeApi.md#getMe) | **GET** /me | Fetches the current user
*DocketJsSdk.MeApi* | [**getMyEventById**](docs/MeApi.md#getMyEventById) | **GET** /me/events/{id} | Fetches a specific event for the current user
*DocketJsSdk.MeApi* | [**getMyEvents**](docs/MeApi.md#getMyEvents) | **GET** /me/events | Fetches all events for the current user
*DocketJsSdk.MeApi* | [**updateMe**](docs/MeApi.md#updateMe) | **PUT** /me | Updates the current user
*DocketJsSdk.MeApi* | [**updateMyEventById**](docs/MeApi.md#updateMyEventById) | **PUT** /me/events/{id} | Updates an event for the current user
*DocketJsSdk.StatusApi* | [**getHealthCheck**](docs/StatusApi.md#getHealthCheck) | **GET** /health-check | Health check
*DocketJsSdk.UserApi* | [**confirmUser**](docs/UserApi.md#confirmUser) | **GET** /users/confirm/{code} | Confirms user&#39;s registration
*DocketJsSdk.UserApi* | [**createUser**](docs/UserApi.md#createUser) | **POST** /users | Create a user
*DocketJsSdk.UserApi* | [**forgotPassword**](docs/UserApi.md#forgotPassword) | **POST** /users/forgot-password | Forgot password
*DocketJsSdk.UserApi* | [**resetPassword**](docs/UserApi.md#resetPassword) | **POST** /users/reset-password | Reset password


## Documentation for Models

 - [DocketJsSdk.AuthPostRequestBody](docs/AuthPostRequestBody.md)
 - [DocketJsSdk.Error](docs/Error.md)
 - [DocketJsSdk.Event](docs/Event.md)
 - [DocketJsSdk.ForgotPasswordPostRequestBody](docs/ForgotPasswordPostRequestBody.md)
 - [DocketJsSdk.GoogleCalendar](docs/GoogleCalendar.md)
 - [DocketJsSdk.GoogleCalendarEvent](docs/GoogleCalendarEvent.md)
 - [DocketJsSdk.GoogleCalendarList](docs/GoogleCalendarList.md)
 - [DocketJsSdk.InlineResponse200](docs/InlineResponse200.md)
 - [DocketJsSdk.InlineResponse2001](docs/InlineResponse2001.md)
 - [DocketJsSdk.InlineResponse2002](docs/InlineResponse2002.md)
 - [DocketJsSdk.InlineResponse2003](docs/InlineResponse2003.md)
 - [DocketJsSdk.InlineResponse2004](docs/InlineResponse2004.md)
 - [DocketJsSdk.Locale](docs/Locale.md)
 - [DocketJsSdk.MeEventPutRequestBody](docs/MeEventPutRequestBody.md)
 - [DocketJsSdk.MeEventsPostRequestBody](docs/MeEventsPostRequestBody.md)
 - [DocketJsSdk.MePutRequestBody](docs/MePutRequestBody.md)
 - [DocketJsSdk.ResetPasswordPostRequestBody](docs/ResetPasswordPostRequestBody.md)
 - [DocketJsSdk.User](docs/User.md)
 - [DocketJsSdk.UsersPostRequestBody](docs/UsersPostRequestBody.md)


## Documentation for Authorization


### bearerAuth

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

