# KolibriApi.CoachApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**coachApiClasssummaryRead**](CoachApi.md#coachApiClasssummaryRead) | **GET** /coach/api/classsummary/{id}/ | 
[**coachApiExercisedifficultiesRead**](CoachApi.md#coachApiExercisedifficultiesRead) | **GET** /coach/api/exercisedifficulties/{id}/ | 
[**coachApiLessonreportList**](CoachApi.md#coachApiLessonreportList) | **GET** /coach/api/lessonreport/ | 
[**coachApiLessonreportRead**](CoachApi.md#coachApiLessonreportRead) | **GET** /coach/api/lessonreport/{id}/ | 
[**coachApiNotificationsCreate**](CoachApi.md#coachApiNotificationsCreate) | **POST** /coach/api/notifications/ | 
[**coachApiNotificationsDelete**](CoachApi.md#coachApiNotificationsDelete) | **DELETE** /coach/api/notifications/{id}/ | 
[**coachApiNotificationsList**](CoachApi.md#coachApiNotificationsList) | **GET** /coach/api/notifications/ | 
[**coachApiNotificationsPartialUpdate**](CoachApi.md#coachApiNotificationsPartialUpdate) | **PATCH** /coach/api/notifications/{id}/ | 
[**coachApiNotificationsRead**](CoachApi.md#coachApiNotificationsRead) | **GET** /coach/api/notifications/{id}/ | 
[**coachApiNotificationsUpdate**](CoachApi.md#coachApiNotificationsUpdate) | **PUT** /coach/api/notifications/{id}/ | 
[**coachApiQuizdifficultiesRead**](CoachApi.md#coachApiQuizdifficultiesRead) | **GET** /coach/api/quizdifficulties/{id}/ | 


<a name="coachApiClasssummaryRead"></a>
# **coachApiClasssummaryRead**
> coachApiClasssummaryRead(id)





### Example
```javascript
var KolibriApi = require('kolibri_api');
var defaultClient = KolibriApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new KolibriApi.CoachApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.coachApiClasssummaryRead(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="coachApiExercisedifficultiesRead"></a>
# **coachApiExercisedifficultiesRead**
> coachApiExercisedifficultiesRead(id)



Get the difficult questions for a particular exercise. pk maps to the content_id of the exercise in question.

### Example
```javascript
var KolibriApi = require('kolibri_api');
var defaultClient = KolibriApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new KolibriApi.CoachApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.coachApiExercisedifficultiesRead(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="coachApiLessonreportList"></a>
# **coachApiLessonreportList**
> [LessonReport] coachApiLessonreportList()





### Example
```javascript
var KolibriApi = require('kolibri_api');
var defaultClient = KolibriApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new KolibriApi.CoachApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.coachApiLessonreportList(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[LessonReport]**](LessonReport.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="coachApiLessonreportRead"></a>
# **coachApiLessonreportRead**
> LessonReport coachApiLessonreportRead(id)





### Example
```javascript
var KolibriApi = require('kolibri_api');
var defaultClient = KolibriApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new KolibriApi.CoachApi();

var id = "id_example"; // String | A unique value identifying this lesson.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.coachApiLessonreportRead(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| A unique value identifying this lesson. | 

### Return type

[**LessonReport**](LessonReport.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="coachApiNotificationsCreate"></a>
# **coachApiNotificationsCreate**
> Object coachApiNotificationsCreate(data)





### Example
```javascript
var KolibriApi = require('kolibri_api');
var defaultClient = KolibriApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new KolibriApi.CoachApi();

var data = null; // Object | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.coachApiNotificationsCreate(data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Object**|  | 

### Return type

**Object**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="coachApiNotificationsDelete"></a>
# **coachApiNotificationsDelete**
> coachApiNotificationsDelete(id, )





### Example
```javascript
var KolibriApi = require('kolibri_api');
var defaultClient = KolibriApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new KolibriApi.CoachApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.coachApiNotificationsDelete(id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="coachApiNotificationsList"></a>
# **coachApiNotificationsList**
> [Object] coachApiNotificationsList()



It provides the list of ClassroomNotificationsViewset from DRF. Then it fetches and saves the needed information to know how many coaches are requesting notifications in the last five minutes

### Example
```javascript
var KolibriApi = require('kolibri_api');
var defaultClient = KolibriApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new KolibriApi.CoachApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.coachApiNotificationsList(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**[Object]**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="coachApiNotificationsPartialUpdate"></a>
# **coachApiNotificationsPartialUpdate**
> Object coachApiNotificationsPartialUpdate(id, data)





### Example
```javascript
var KolibriApi = require('kolibri_api');
var defaultClient = KolibriApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new KolibriApi.CoachApi();

var id = "id_example"; // String | 

var data = null; // Object | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.coachApiNotificationsPartialUpdate(id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **data** | **Object**|  | 

### Return type

**Object**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="coachApiNotificationsRead"></a>
# **coachApiNotificationsRead**
> Object coachApiNotificationsRead(id, )





### Example
```javascript
var KolibriApi = require('kolibri_api');
var defaultClient = KolibriApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new KolibriApi.CoachApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.coachApiNotificationsRead(id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

**Object**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="coachApiNotificationsUpdate"></a>
# **coachApiNotificationsUpdate**
> Object coachApiNotificationsUpdate(id, data)





### Example
```javascript
var KolibriApi = require('kolibri_api');
var defaultClient = KolibriApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new KolibriApi.CoachApi();

var id = "id_example"; // String | 

var data = null; // Object | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.coachApiNotificationsUpdate(id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **data** | **Object**|  | 

### Return type

**Object**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="coachApiQuizdifficultiesRead"></a>
# **coachApiQuizdifficultiesRead**
> coachApiQuizdifficultiesRead(id)



Get the difficult questions for a particular quiz.

### Example
```javascript
var KolibriApi = require('kolibri_api');
var defaultClient = KolibriApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new KolibriApi.CoachApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.coachApiQuizdifficultiesRead(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

