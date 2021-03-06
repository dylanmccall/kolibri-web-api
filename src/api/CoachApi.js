/*
 * Kolibri API
 * Kolibri Swagger API
 *
 * OpenAPI spec version: v0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.9
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/LessonReport'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/LessonReport'));
  } else {
    // Browser globals (root is window)
    if (!root.KolibriApi) {
      root.KolibriApi = {};
    }
    root.KolibriApi.CoachApi = factory(root.KolibriApi.ApiClient, root.KolibriApi.LessonReport);
  }
}(this, function(ApiClient, LessonReport) {
  'use strict';

  /**
   * Coach service.
   * @module api/CoachApi
   * @version v0
   */

  /**
   * Constructs a new CoachApi. 
   * @alias module:api/CoachApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the coachApiClasssummaryRead operation.
     * @callback module:api/CoachApi~coachApiClasssummaryReadCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} id 
     * @param {module:api/CoachApi~coachApiClasssummaryReadCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.coachApiClasssummaryRead = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling coachApiClasssummaryRead");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/coach/api/classsummary/{id}/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the coachApiExercisedifficultiesRead operation.
     * @callback module:api/CoachApi~coachApiExercisedifficultiesReadCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the difficult questions for a particular exercise. pk maps to the content_id of the exercise in question.
     * @param {String} id 
     * @param {module:api/CoachApi~coachApiExercisedifficultiesReadCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.coachApiExercisedifficultiesRead = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling coachApiExercisedifficultiesRead");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/coach/api/exercisedifficulties/{id}/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the coachApiLessonreportList operation.
     * @callback module:api/CoachApi~coachApiLessonreportListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/LessonReport>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {module:api/CoachApi~coachApiLessonreportListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/LessonReport>}
     */
    this.coachApiLessonreportList = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [LessonReport];

      return this.apiClient.callApi(
        '/coach/api/lessonreport/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the coachApiLessonreportRead operation.
     * @callback module:api/CoachApi~coachApiLessonreportReadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LessonReport} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} id A unique value identifying this lesson.
     * @param {module:api/CoachApi~coachApiLessonreportReadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LessonReport}
     */
    this.coachApiLessonreportRead = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling coachApiLessonreportRead");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LessonReport;

      return this.apiClient.callApi(
        '/coach/api/lessonreport/{id}/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the coachApiNotificationsCreate operation.
     * @callback module:api/CoachApi~coachApiNotificationsCreateCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {Object} data 
     * @param {module:api/CoachApi~coachApiNotificationsCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.coachApiNotificationsCreate = function(data, callback) {
      var postBody = data;

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling coachApiNotificationsCreate");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/coach/api/notifications/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the coachApiNotificationsDelete operation.
     * @callback module:api/CoachApi~coachApiNotificationsDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} id 
     * @param {module:api/CoachApi~coachApiNotificationsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.coachApiNotificationsDelete = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling coachApiNotificationsDelete");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/coach/api/notifications/{id}/', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the coachApiNotificationsList operation.
     * @callback module:api/CoachApi~coachApiNotificationsListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * It provides the list of ClassroomNotificationsViewset from DRF. Then it fetches and saves the needed information to know how many coaches are requesting notifications in the last five minutes
     * @param {module:api/CoachApi~coachApiNotificationsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */
    this.coachApiNotificationsList = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Object];

      return this.apiClient.callApi(
        '/coach/api/notifications/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the coachApiNotificationsPartialUpdate operation.
     * @callback module:api/CoachApi~coachApiNotificationsPartialUpdateCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} id 
     * @param {Object} data 
     * @param {module:api/CoachApi~coachApiNotificationsPartialUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.coachApiNotificationsPartialUpdate = function(id, data, callback) {
      var postBody = data;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling coachApiNotificationsPartialUpdate");
      }

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling coachApiNotificationsPartialUpdate");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/coach/api/notifications/{id}/', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the coachApiNotificationsRead operation.
     * @callback module:api/CoachApi~coachApiNotificationsReadCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} id 
     * @param {module:api/CoachApi~coachApiNotificationsReadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.coachApiNotificationsRead = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling coachApiNotificationsRead");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/coach/api/notifications/{id}/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the coachApiNotificationsUpdate operation.
     * @callback module:api/CoachApi~coachApiNotificationsUpdateCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} id 
     * @param {Object} data 
     * @param {module:api/CoachApi~coachApiNotificationsUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.coachApiNotificationsUpdate = function(id, data, callback) {
      var postBody = data;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling coachApiNotificationsUpdate");
      }

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling coachApiNotificationsUpdate");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/coach/api/notifications/{id}/', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the coachApiQuizdifficultiesRead operation.
     * @callback module:api/CoachApi~coachApiQuizdifficultiesReadCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the difficult questions for a particular quiz.
     * @param {String} id 
     * @param {module:api/CoachApi~coachApiQuizdifficultiesReadCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.coachApiQuizdifficultiesRead = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling coachApiQuizdifficultiesRead");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/coach/api/quizdifficulties/{id}/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
