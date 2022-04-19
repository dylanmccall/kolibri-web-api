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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KolibriApi) {
      root.KolibriApi = {};
    }
    root.KolibriApi.AttemptLogViewSet = factory(root.KolibriApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AttemptLogViewSet model module.
   * @module model/AttemptLogViewSet
   * @version v0
   */

  /**
   * Constructs a new <code>AttemptLogViewSet</code>.
   * @alias module:model/AttemptLogViewSet
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AttemptLogViewSet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AttemptLogViewSet} obj Optional instance to populate.
   * @return {module:model/AttemptLogViewSet} The populated <code>AttemptLogViewSet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('item'))
        obj.item = ApiClient.convertToType(data['item'], 'String');
      if (data.hasOwnProperty('start_timestamp'))
        obj.startTimestamp = ApiClient.convertToType(data['start_timestamp'], 'String');
      if (data.hasOwnProperty('end_timestamp'))
        obj.endTimestamp = ApiClient.convertToType(data['end_timestamp'], 'String');
      if (data.hasOwnProperty('completion_timestamp'))
        obj.completionTimestamp = ApiClient.convertToType(data['completion_timestamp'], 'String');
      if (data.hasOwnProperty('time_spent'))
        obj.timeSpent = ApiClient.convertToType(data['time_spent'], 'Number');
      if (data.hasOwnProperty('complete'))
        obj.complete = ApiClient.convertToType(data['complete'], 'Boolean');
      if (data.hasOwnProperty('correct'))
        obj.correct = ApiClient.convertToType(data['correct'], 'Number');
      if (data.hasOwnProperty('hinted'))
        obj.hinted = ApiClient.convertToType(data['hinted'], 'Boolean');
      if (data.hasOwnProperty('answer'))
        obj.answer = ApiClient.convertToType(data['answer'], 'String');
      if (data.hasOwnProperty('simple_answer'))
        obj.simpleAnswer = ApiClient.convertToType(data['simple_answer'], 'String');
      if (data.hasOwnProperty('interaction_history'))
        obj.interactionHistory = ApiClient.convertToType(data['interaction_history'], 'String');
      if (data.hasOwnProperty('user'))
        obj.user = ApiClient.convertToType(data['user'], 'String');
      if (data.hasOwnProperty('error'))
        obj.error = ApiClient.convertToType(data['error'], 'Boolean');
      if (data.hasOwnProperty('masterylog'))
        obj.masterylog = ApiClient.convertToType(data['masterylog'], 'String');
      if (data.hasOwnProperty('sessionlog'))
        obj.sessionlog = ApiClient.convertToType(data['sessionlog'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} item
   */
  exports.prototype.item = undefined;

  /**
   * @member {String} startTimestamp
   */
  exports.prototype.startTimestamp = undefined;

  /**
   * @member {String} endTimestamp
   */
  exports.prototype.endTimestamp = undefined;

  /**
   * @member {String} completionTimestamp
   */
  exports.prototype.completionTimestamp = undefined;

  /**
   * (in seconds)
   * @member {Number} timeSpent
   */
  exports.prototype.timeSpent = undefined;

  /**
   * @member {Boolean} complete
   */
  exports.prototype.complete = undefined;

  /**
   * @member {Number} correct
   */
  exports.prototype.correct = undefined;

  /**
   * @member {Boolean} hinted
   */
  exports.prototype.hinted = undefined;

  /**
   * @member {String} answer
   */
  exports.prototype.answer = undefined;

  /**
   * @member {String} simpleAnswer
   */
  exports.prototype.simpleAnswer = undefined;

  /**
   * @member {String} interactionHistory
   */
  exports.prototype.interactionHistory = undefined;

  /**
   * @member {String} user
   */
  exports.prototype.user = undefined;

  /**
   * @member {Boolean} error
   */
  exports.prototype.error = undefined;

  /**
   * @member {String} masterylog
   */
  exports.prototype.masterylog = undefined;

  /**
   * @member {String} sessionlog
   */
  exports.prototype.sessionlog = undefined;

  return exports;

}));