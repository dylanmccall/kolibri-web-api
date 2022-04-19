# KolibriApi.LearnApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**learnApiHomehydrateList**](LearnApi.md#learnApiHomehydrateList) | **GET** /learn/api/homehydrate | 
[**learnApiLearnerclassroomList**](LearnApi.md#learnApiLearnerclassroomList) | **GET** /learn/api/learnerclassroom/ | 
[**learnApiLearnerclassroomRead**](LearnApi.md#learnApiLearnerclassroomRead) | **GET** /learn/api/learnerclassroom/{id}/ | 
[**learnApiLearnerlessonList**](LearnApi.md#learnApiLearnerlessonList) | **GET** /learn/api/learnerlesson/ | 
[**learnApiLearnerlessonRead**](LearnApi.md#learnApiLearnerlessonRead) | **GET** /learn/api/learnerlesson/{id}/ | 
[**learnApiStateList**](LearnApi.md#learnApiStateList) | **GET** /learn/api/state | 


<a name="learnApiHomehydrateList"></a>
# **learnApiHomehydrateList**
> learnApiHomehydrateList()





### Example
```javascript
var KolibriApi = require('kolibri_api');
var defaultClient = KolibriApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new KolibriApi.LearnApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.learnApiHomehydrateList(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiLearnerclassroomList"></a>
# **learnApiLearnerclassroomList**
> [Object] learnApiLearnerclassroomList()



Returns all Classrooms for which the requesting User is a member, along with all associated assignments.

### Example
```javascript
var KolibriApi = require('kolibri_api');
var defaultClient = KolibriApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new KolibriApi.LearnApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.learnApiLearnerclassroomList(callback);
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

<a name="learnApiLearnerclassroomRead"></a>
# **learnApiLearnerclassroomRead**
> Object learnApiLearnerclassroomRead(id)



Returns all Classrooms for which the requesting User is a member, along with all associated assignments.

### Example
```javascript
var KolibriApi = require('kolibri_api');
var defaultClient = KolibriApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new KolibriApi.LearnApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.learnApiLearnerclassroomRead(id, callback);
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

<a name="learnApiLearnerlessonList"></a>
# **learnApiLearnerlessonList**
> [Object] learnApiLearnerlessonList()



Special Viewset for Learners to view Lessons to which they are assigned. The core Lesson Viewset is locked down to Admin users only.

### Example
```javascript
var KolibriApi = require('kolibri_api');
var defaultClient = KolibriApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new KolibriApi.LearnApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.learnApiLearnerlessonList(callback);
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

<a name="learnApiLearnerlessonRead"></a>
# **learnApiLearnerlessonRead**
> Object learnApiLearnerlessonRead(id)



Special Viewset for Learners to view Lessons to which they are assigned. The core Lesson Viewset is locked down to Admin users only.

### Example
```javascript
var KolibriApi = require('kolibri_api');
var defaultClient = KolibriApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new KolibriApi.LearnApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.learnApiLearnerlessonRead(id, callback);
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

<a name="learnApiStateList"></a>
# **learnApiStateList**
> learnApiStateList()





### Example
```javascript
var KolibriApi = require('kolibri_api');
var defaultClient = KolibriApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new KolibriApi.LearnApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.learnApiStateList(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

